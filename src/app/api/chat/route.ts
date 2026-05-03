import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

const COURSE_PDF_FILENAME = 'AI_Course_Student_Companion.pdf';

const systemPrompt = `You are the AI Course Assistant for We Can Academy. Your ONLY job is to answer questions about the WeCan Academy AI Course based strictly on the attached course outline document (AI_Course_Student_Companion.pdf).

STRICT RULES:
1. Only answer questions whose answer is contained in, or directly about, the attached course outline (curriculum, schedule, weeks/modules, projects, prerequisites, tools, certification, instructors, fees, sign-up, what students will learn, etc.).
2. If the user asks anything outside the course outline — general AI/tech questions, coding help, math, news, personal advice, or any topic not covered in the document — politely refuse and redirect.
3. Never answer general AI or programming questions, even if you know the answer. You exist solely to talk about this specific course.
4. If the answer is genuinely not in the document, say so clearly. Never invent course details, dates, prices, or features.
5. Keep replies concise, warm, and encouraging. Use bullet points for lists.
6. When refusing, suggest 2–3 things you CAN help with (e.g., "I can tell you about the curriculum, what you'll learn, or how to enroll").

Sample refusal: "I can only help with questions about the WeCan Academy AI Course. I'd be happy to tell you about the curriculum, the projects you'll build, or how to enroll — what would you like to know?"`;

let pdfBase64: string | null = null;

async function loadPdfBase64(): Promise<string> {
  if (pdfBase64) return pdfBase64;
  const pdfPath = path.join(process.cwd(), COURSE_PDF_FILENAME);
  const buffer = await fs.readFile(pdfPath);
  pdfBase64 = buffer.toString('base64');
  return pdfBase64;
}

type IncomingMessage = { role: 'user' | 'assistant'; content: string };

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: 'ANTHROPIC_API_KEY is not configured. Add it to .env.local.' },
      { status: 500 }
    );
  }

  let incoming: IncomingMessage[];
  try {
    const body = await request.json();
    incoming = body?.messages ?? [];
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!Array.isArray(incoming) || incoming.length === 0) {
    return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
  }

  const trimmed = incoming.filter((m) => m.role === 'user' || m.role === 'assistant');
  const firstUserIdx = trimmed.findIndex((m) => m.role === 'user');
  if (firstUserIdx === -1) {
    return NextResponse.json({ error: 'No user message found' }, { status: 400 });
  }
  const conversation = trimmed.slice(firstUserIdx);

  let pdfData: string;
  try {
    pdfData = await loadPdfBase64();
  } catch (err) {
    console.error('Failed to load course PDF:', err);
    return NextResponse.json({ error: 'Course outline not available' }, { status: 500 });
  }

  const messages: Anthropic.MessageParam[] = conversation.map((msg, idx) => {
    if (idx === 0) {
      return {
        role: 'user',
        content: [
          {
            type: 'document',
            source: {
              type: 'base64',
              media_type: 'application/pdf',
              data: pdfData,
            },
            cache_control: { type: 'ephemeral', ttl: '1h' },
          },
          { type: 'text', text: msg.content },
        ],
      };
    }
    return { role: msg.role, content: msg.content };
  });

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        const stream = client.messages.stream({
          model: 'claude-haiku-4-5',
          max_tokens: 1024,
          system: systemPrompt,
          messages,
        });

        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        console.error('Stream error:', err);
        let msg = 'Something went wrong. Please try again.';
        if (err instanceof Anthropic.AuthenticationError) {
          msg = 'Invalid Anthropic API key.';
        } else if (err instanceof Anthropic.RateLimitError) {
          msg = 'Rate limit exceeded — try again in a moment.';
        }
        controller.enqueue(encoder.encode(msg));
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'X-Accel-Buffering': 'no',
    },
  });
}

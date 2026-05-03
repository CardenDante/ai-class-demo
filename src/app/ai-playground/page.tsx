'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Spotlight } from '@/components/ui/spotlight';
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const examplePrompts = [
  'What is artificial intelligence and how does it work?',
  'Help me write a professional email to my boss',
  'Explain machine learning like I\'m 10 years old',
  'Give me 5 creative ideas for a birthday party',
  'What are the best practices for prompt engineering?',
];

export default function AIPlayground() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. I\'m here to help you learn about AI and experience how it works. Ask me anything - try a simple question, request help writing something, or explore any topic you\'re curious about!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError(null);
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I\'m sorry, I encountered an error. This playground requires an OpenAI API key to be configured. In our course, you\'ll learn how to set this up yourself!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--muted)]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        {/* Spotlight Effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(99, 102, 241, 0.3)"
        />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai-circuit-bg.jpg"
            alt="AI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-950)]/95 to-[var(--primary-900)]/90" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--accent-coral)]/20 text-[var(--accent-coral)] rounded-full text-xs sm:text-sm font-semibold mb-4">
            Interactive Learning
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            AI Playground
          </h1>
          <p className="text-base sm:text-lg text-[var(--primary-200)] max-w-2xl mx-auto">
            Experience AI firsthand! Chat with our AI assistant to see how prompt engineering
            works. This is just a taste of what you&apos;ll learn in our course.
          </p>
        </motion.div>
      </section>

      {/* Chat Section */}
      <section className="py-6 sm:py-8 -mt-6 sm:-mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-700)] px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-white">AI Assistant</h2>
                  <p className="text-xs sm:text-sm text-white/70">Powered by OpenAI</p>
                </div>
                <div className="ml-auto flex items-center gap-1 sm:gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs sm:text-sm text-white/70">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[350px] sm:h-[400px] overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <motion.div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                      message.role === 'user'
                        ? 'chat-message-user rounded-br-sm'
                        : 'chat-message-ai rounded-bl-sm'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-wrap">{message.content}</p>
                  </motion.div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="chat-message-ai rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-[var(--primary-400)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-[var(--primary-400)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-[var(--primary-400)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                      <span className="text-sm text-[var(--muted-foreground)]">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Error Display */}
            {error && (
              <div className="px-6 py-2 bg-red-50 border-t border-red-100">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-[var(--border)] p-4">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
                  className="flex-1 resize-none rounded-xl border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent"
                  rows={2}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="btn-accent px-6 py-3 rounded-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send
                </button>
              </form>
            </div>
          </motion.div>

          {/* Example Prompts */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-[var(--primary-950)] mb-3 sm:mb-4">
              Try These Example Prompts
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {examplePrompts.map((prompt, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleExampleClick(prompt)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full border border-[var(--border)] text-xs sm:text-sm text-[var(--muted-foreground)] hover:border-[var(--primary-400)] hover:text-[var(--primary-600)] transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[var(--primary-950)] mb-6 text-center">
            Prompt Engineering Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Be Specific',
                description: 'The more detail you provide, the better the response. Instead of "write an email," try "write a professional email to request a meeting with my manager about a promotion."',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Give Context',
                description: 'Tell the AI who you are, who the audience is, and what the purpose is. Context helps generate more relevant responses.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Specify Format',
                description: 'Want a list? A paragraph? Bullet points? Tell the AI exactly how you want the output formatted.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[var(--border)] card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-600)] to-[var(--accent-coral)] rounded-lg flex items-center justify-center text-white mb-4">
                  {tip.icon}
                </div>
                <h4 className="font-bold text-[var(--primary-950)] mb-2">{tip.title}</h4>
                <p className="text-sm text-[var(--muted-foreground)]">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-950)] to-[var(--primary-800)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Master AI Like This?
          </h2>
          <p className="text-lg text-[var(--primary-200)] mb-8">
            This playground is just a preview. In our course, you&apos;ll learn to build your own
            AI chatbots, automate workflows, and much more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/course-outline" className="btn-accent text-lg px-8 py-4">
              View Full Curriculum
            </a>
            <a href="/what-youll-learn" className="btn-primary text-lg px-8 py-4">
              See What You&apos;ll Learn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

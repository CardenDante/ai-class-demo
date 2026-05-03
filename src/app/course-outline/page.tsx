import Image from 'next/image';
import Link from 'next/link';

const courseData = [
  {
    month: 1,
    title: 'AI Foundations + Practical Tools',
    description: 'Build a strong foundation in AI concepts and start using powerful AI tools from day one.',
    color: 'var(--primary-600)',
    weeks: [
      {
        week: 1,
        title: 'Introduction to AI',
        topics: [
          'What is AI?',
          'Difference between AI vs Machine Learning vs Deep Learning',
          'Real-world AI examples (ChatGPT, Google Maps, Face recognition, Recommendation systems)',
          'AI myths & limitations',
          'Ethics & responsible AI',
        ],
        practical: [
          'Exploring ChatGPT, Gemini, Claude',
          'Comparing answers from different AI models',
        ],
        learningObjectives: [
          'Understand what AI is and how it differs from related technologies',
          'Recognize AI applications in everyday life',
          'Appreciate the importance of ethical AI usage',
        ],
      },
      {
        week: 2,
        title: 'Prompt Engineering (VERY IMPORTANT)',
        highlight: 'This is where most value is',
        topics: [
          'What is a prompt?',
          'Types of prompts: Instruction prompts, Role-based prompts, Chain-of-thought',
          'Prompt structure: Role, Task, Context, Output format',
        ],
        practical: [
          'Writing prompts for emails, reports, lesson notes',
          'Creating marketing content and code generation prompts',
          'Identifying prompt mistakes and making improvements',
        ],
        learningObjectives: [
          'Master the art of writing effective AI prompts',
          'Understand different prompting techniques and when to use them',
          'Create professional-quality content using AI',
        ],
      },
      {
        week: 3,
        title: 'AI for Productivity & Business',
        topics: [
          'AI for content creation, research, and data summarization',
          'AI for customer support and marketing',
          'AI tools overview: ChatGPT, Canva AI, Notion AI, Excel + AI, Google Workspace AI',
        ],
        practical: [
          'Build an AI marketing plan',
          'Create an AI-generated social media calendar',
          'Develop an AI-powered CV or proposal',
        ],
        learningObjectives: [
          'Leverage AI tools to boost productivity',
          'Apply AI across various business functions',
          'Build practical marketing and professional materials',
        ],
      },
      {
        week: 4,
        title: 'Intro to Data & AI Thinking',
        note: 'No complex statistics',
        topics: [
          'What is data?',
          'Structured vs unstructured data',
          'How AI learns from data (conceptually)',
          'Bias in data',
          'Simple datasets explanation',
        ],
        practical: [
          'Using AI to analyze attendance data',
          'Analyzing sales data with AI',
          'Working with survey data',
        ],
        learningObjectives: [
          'Understand different types of data',
          'Recognize how data quality affects AI outputs',
          'Perform basic data analysis with AI assistance',
        ],
      },
    ],
  },
  {
    month: 2,
    title: 'AI Development & Automation',
    description: 'Start coding with Python and build real AI applications using APIs and automation tools.',
    color: 'var(--accent-coral)',
    weeks: [
      {
        week: 5,
        title: 'Introduction to Python for AI (Beginner)',
        topics: [
          'What is Python?',
          'Why Python for AI?',
          'Basics: Variables, Lists, Dictionaries, Simple functions',
        ],
        practical: [
          'Write simple Python scripts',
          'Use Python with ChatGPT help',
        ],
        learningObjectives: [
          'Write basic Python code',
          'Understand fundamental programming concepts',
          'Use AI to assist with coding tasks',
        ],
      },
      {
        week: 6,
        title: 'AI APIs (Very Practical)',
        topics: [
          'What is an API?',
          'How AI APIs work',
          'Using OpenAI API and Claude API (conceptual)',
          'Costs & limitations',
        ],
        practical: [
          'Build a simple AI chatbot',
          'Create an AI text summarizer',
          'Learn to use environment variables securely',
        ],
        learningObjectives: [
          'Understand how to connect applications to AI services',
          'Build functional AI-powered tools',
          'Handle API credentials securely',
        ],
      },
      {
        week: 7,
        title: 'Building AI Chatbots',
        topics: [
          'Chatbot logic',
          'Context & memory',
          'Prompt templates',
          'Simple moderation & safety',
        ],
        practical: [
          'Build a school assistant chatbot',
          'Create a customer support chatbot',
          'Develop an FAQ AI bot',
        ],
        learningObjectives: [
          'Design conversational AI experiences',
          'Implement context management in chatbots',
          'Add safety measures to AI applications',
        ],
      },
      {
        week: 8,
        title: 'AI Automation (Low-Code)',
        topics: [
          'What is automation?',
          'AI + automation tools: Zapier, Make.com, Google Forms + AI',
          'AI workflows',
        ],
        practical: [
          'Automate: Form to AI to Email',
          'Customer inquiries to AI replies',
          'Automated reports generation',
        ],
        learningObjectives: [
          'Connect AI to everyday workflows',
          'Build automated systems without heavy coding',
          'Create efficient business automation',
        ],
      },
    ],
  },
  {
    month: 3,
    title: 'Real Projects + AI in the Real World',
    description: 'Apply everything you\'ve learned to build real-world projects and gain confidence.',
    color: 'var(--accent-gold)',
    weeks: [
      {
        week: 9,
        title: 'AI Use Cases by Industry',
        topics: [
          'AI in Education, Healthcare, Business',
          'AI in NGOs and Finance',
          'Local African use cases',
        ],
        practical: [
          'Choose one industry',
          'Define a real AI problem to solve',
        ],
        learningObjectives: [
          'Identify AI opportunities across industries',
          'Relate AI solutions to local context',
          'Begin planning your final project',
        ],
      },
      {
        week: 10,
        title: 'AI Project Development',
        topics: [
          'Planning an AI solution',
          'Choosing the right tools',
          'Data input & outputs',
          'UI basics (simple web or form)',
        ],
        practical: [
          'Build a mini AI system such as:',
          'Attendance analyzer, Student performance assistant',
          'Business analytics chatbot, HR screening assistant',
        ],
        learningObjectives: [
          'Plan and scope an AI project',
          'Select appropriate tools and technologies',
          'Build end-to-end AI solutions',
        ],
      },
      {
        week: 11,
        title: 'AI Ethics, Security & Future',
        topics: [
          'AI risks',
          'Data privacy',
          'AI hallucinations',
          'Regulations (high level)',
          'Future of AI & jobs',
        ],
        practical: [
          'Evaluating AI answers',
          'Bias testing',
          'Ethical scenarios discussion',
        ],
        learningObjectives: [
          'Navigate ethical considerations in AI',
          'Identify and mitigate AI risks',
          'Prepare for the future AI landscape',
        ],
      },
      {
        week: 12,
        title: 'Final Project & Presentation',
        topics: [
          'Present: Problem, AI solution, Demo',
          'Feedback & improvement',
          'Certification & next steps',
        ],
        practical: [
          'Complete and polish your project',
          'Present to instructors and peers',
          'Receive certification',
        ],
        learningObjectives: [
          'Deliver a professional project presentation',
          'Demonstrate mastery of course concepts',
          'Plan your continued AI learning journey',
        ],
      },
    ],
  },
];

export default function CourseOutline() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai-background-1.jpg"
            alt="AI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-950)]/95 to-[var(--primary-900)]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[var(--accent-coral)]/20 text-[var(--accent-coral)] rounded-full text-sm font-semibold mb-6">
              12 Weeks of Comprehensive Learning
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Course Outline
            </h1>
            <p className="text-xl text-[var(--primary-200)] max-w-3xl mx-auto">
              A structured journey from AI fundamentals to building real-world projects.
              Each week combines theory with hands-on practical exercises.
            </p>
          </div>
        </div>
      </section>

      {/* Course Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {courseData.map((month, monthIndex) => (
            <div key={monthIndex} className="mb-20 last:mb-0">
              {/* Month Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl"
                  style={{ background: `linear-gradient(135deg, ${month.color}, ${month.color}dd)` }}
                >
                  {month.month}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-950)]">
                    Month {month.month}: {month.title}
                  </h2>
                  <p className="text-[var(--muted-foreground)]">{month.description}</p>
                </div>
              </div>

              {/* Weeks Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {month.weeks.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="card-hover bg-[var(--muted)] rounded-2xl p-6 border border-[var(--border)]"
                  >
                    {/* Week Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                          style={{ backgroundColor: month.color }}
                        >
                          Week {week.week}
                        </span>
                        <h3 className="text-xl font-bold text-[var(--primary-950)]">
                          {week.title}
                        </h3>
                        {week.highlight && (
                          <span className="text-sm text-[var(--accent-coral)] font-medium">
                            {week.highlight}
                          </span>
                        )}
                        {week.note && (
                          <span className="text-sm text-[var(--muted-foreground)] italic">
                            ({week.note})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--primary-700)] mb-2 uppercase tracking-wider">
                        Topics Covered
                      </h4>
                      <ul className="space-y-1">
                        {week.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                            <svg className="w-4 h-4 text-[var(--primary-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical */}
                    <div className="mb-4 bg-white rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-[var(--accent-coral)] mb-2 uppercase tracking-wider flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Hands-On Practice
                      </h4>
                      <ul className="space-y-1">
                        {week.practical.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                            <svg className="w-4 h-4 text-[var(--accent-coral)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learning Objectives */}
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--accent-gold-dark)] mb-2 uppercase tracking-wider flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Learning Objectives
                      </h4>
                      <ul className="space-y-1">
                        {week.learningObjectives.map((objective, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                            <svg className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download PDF Section */}
      <section className="py-16 bg-[var(--muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary-950)] mb-4">
            Download the Complete Course Outline
          </h2>
          <p className="text-[var(--muted-foreground)] mb-6">
            Get the full PDF version of our course outline to review offline or share with others.
          </p>
          <a
            href="/images/AI-COURSE OUTLINE.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary-950)] to-[var(--primary-800)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your AI Journey?
          </h2>
          <p className="text-xl text-[var(--primary-200)] mb-8">
            See what skills you&apos;ll gain or try our AI playground to get a taste of what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/what-youll-learn" className="btn-accent text-lg px-8 py-4">
              What You&apos;ll Learn
            </Link>
            <Link href="/ai-playground" className="btn-primary text-lg px-8 py-4">
              Try AI Playground
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

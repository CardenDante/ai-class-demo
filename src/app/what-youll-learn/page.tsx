import Image from 'next/image';
import Link from 'next/link';

const skillCategories = [
  {
    title: 'AI Fundamentals',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: [
      'Understand what AI, Machine Learning, and Deep Learning are',
      'Recognize AI applications in everyday technology',
      'Navigate AI ethics and responsible usage',
      'Distinguish between AI myths and reality',
      'Understand how data powers AI systems',
    ],
  },
  {
    title: 'Prompt Engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      'Write effective prompts for any AI system',
      'Use instruction, role-based, and chain-of-thought prompts',
      'Structure prompts with Role, Task, Context, and Output format',
      'Generate professional emails, reports, and marketing content',
      'Debug and improve underperforming prompts',
    ],
  },
  {
    title: 'AI Productivity Tools',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skills: [
      'Master ChatGPT, Gemini, and Claude',
      'Use Canva AI for design and content creation',
      'Leverage Notion AI for productivity',
      'Integrate AI with Excel and Google Workspace',
      'Create AI-powered marketing materials',
    ],
  },
  {
    title: 'Python Programming',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      'Write Python code from scratch',
      'Work with variables, lists, and dictionaries',
      'Create functions for reusable code',
      'Use Python with AI assistance',
      'Build simple automation scripts',
    ],
  },
  {
    title: 'AI APIs & Integration',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      'Understand how APIs work',
      'Connect to OpenAI and other AI services',
      'Handle API authentication securely',
      'Build AI-powered applications',
      'Manage costs and usage limits',
    ],
  },
  {
    title: 'Chatbot Development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    skills: [
      'Design chatbot conversation flows',
      'Implement context and memory management',
      'Create prompt templates for consistency',
      'Add moderation and safety measures',
      'Build customer support and FAQ bots',
    ],
  },
  {
    title: 'AI Automation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    skills: [
      'Use Zapier and Make.com for automation',
      'Create AI-powered email workflows',
      'Automate customer inquiry responses',
      'Generate reports automatically',
      'Connect AI to forms and databases',
    ],
  },
  {
    title: 'Project Development',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    skills: [
      'Plan and scope AI projects',
      'Choose appropriate tools and technologies',
      'Design user interfaces for AI apps',
      'Present projects professionally',
      'Receive and incorporate feedback',
    ],
  },
];

const projects = [
  {
    title: 'AI Marketing Plan',
    description: 'Create a comprehensive marketing strategy using AI tools to generate content, analyze competitors, and plan campaigns.',
    tools: ['ChatGPT', 'Canva AI'],
    week: 3,
  },
  {
    title: 'Social Media Calendar',
    description: 'Build an AI-generated content calendar with posts, captions, and hashtags for a full month.',
    tools: ['ChatGPT', 'Notion AI'],
    week: 3,
  },
  {
    title: 'AI-Powered CV',
    description: 'Create a professional, tailored resume and cover letter using AI assistance.',
    tools: ['ChatGPT', 'Canva AI'],
    week: 3,
  },
  {
    title: 'Simple AI Chatbot',
    description: 'Build your first chatbot using Python and the OpenAI API.',
    tools: ['Python', 'OpenAI API'],
    week: 6,
  },
  {
    title: 'Text Summarizer',
    description: 'Create a tool that automatically summarizes long documents and articles.',
    tools: ['Python', 'OpenAI API'],
    week: 6,
  },
  {
    title: 'School Assistant Bot',
    description: 'Develop a chatbot that helps students with homework and study questions.',
    tools: ['Python', 'OpenAI API'],
    week: 7,
  },
  {
    title: 'Customer Support Bot',
    description: 'Build an intelligent customer service chatbot with FAQ handling.',
    tools: ['Python', 'OpenAI API'],
    week: 7,
  },
  {
    title: 'Automated Email System',
    description: 'Create a workflow that uses AI to process forms and send personalized emails.',
    tools: ['Zapier', 'OpenAI'],
    week: 8,
  },
  {
    title: 'Final Capstone Project',
    description: 'Design and build your own AI solution for a real-world problem in your chosen industry.',
    tools: ['All learned tools'],
    week: 12,
  },
];

const outcomes = [
  {
    stat: '12+',
    label: 'AI Tools Mastered',
    description: 'Including ChatGPT, Python, APIs, and automation platforms',
  },
  {
    stat: '9+',
    label: 'Projects Built',
    description: 'From chatbots to automated workflows and your capstone',
  },
  {
    stat: '100%',
    label: 'Practical Skills',
    description: 'Every concept is reinforced with hands-on exercises',
  },
  {
    stat: '1',
    label: 'Certification',
    description: 'Complete with a final project presentation',
  },
];

export default function WhatYoullLearn() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai-background-2.jpg"
            alt="AI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-950)]/95 to-[var(--primary-900)]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] rounded-full text-sm font-semibold mb-6">
              Skills & Outcomes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You&apos;ll Learn
            </h1>
            <p className="text-xl text-[var(--primary-200)] max-w-3xl mx-auto">
              By the end of this course, you&apos;ll have mastered essential AI skills
              and built real projects that demonstrate your capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {outcome.stat}
                </div>
                <div className="font-semibold text-[var(--primary-950)] mb-1">
                  {outcome.label}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  {outcome.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--accent-coral)] font-semibold text-sm uppercase tracking-wider">
              Comprehensive Skill Set
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-950)] mt-2">
              Skills You&apos;ll Master
            </h2>
            <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
              Our curriculum covers everything from AI fundamentals to advanced project development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-2xl p-6 border border-[var(--border)]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-600)] to-[var(--accent-coral)] rounded-xl flex items-center justify-center text-white mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-950)] mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                      <svg className="w-4 h-4 text-[var(--accent-coral)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--accent-gold)] font-semibold text-sm uppercase tracking-wider">
              Hands-On Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-950)] mt-2">
              Projects You&apos;ll Build
            </h2>
            <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
              Learn by doing. Every project teaches practical skills you can use immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-hover bg-[var(--muted)] rounded-2xl p-6 border border-[var(--border)] relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 px-3 py-1 bg-[var(--primary-100)] text-[var(--primary-700)] rounded-full text-xs font-semibold">
                  Week {project.week}
                </span>
                <h3 className="text-lg font-bold text-[var(--primary-950)] mb-2 pr-16">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white text-[var(--primary-600)] rounded text-xs font-medium border border-[var(--border)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai-content-creation.jpg"
            alt="AI Content Creation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-950)]/95 to-[var(--primary-900)]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--accent-coral)] font-semibold text-sm uppercase tracking-wider">
                Career Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                How These Skills Will Help You
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Boost Your Productivity',
                    description: 'Use AI tools to work faster and smarter in any role.',
                  },
                  {
                    title: 'Stand Out in the Job Market',
                    description: 'AI skills are in high demand across all industries.',
                  },
                  {
                    title: 'Build Your Own Solutions',
                    description: 'Create custom AI tools tailored to your specific needs.',
                  },
                  {
                    title: 'Future-Proof Your Career',
                    description: 'Stay ahead of the curve as AI transforms every industry.',
                  },
                  {
                    title: 'Start a Side Business',
                    description: 'Offer AI services or build AI-powered products.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-[var(--accent-coral)] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-[var(--primary-200)] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Industries Where You Can Apply These Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Education',
                  'Healthcare',
                  'Finance',
                  'Marketing',
                  'Customer Service',
                  'E-commerce',
                  'Human Resources',
                  'Content Creation',
                  'NGOs',
                  'Agriculture',
                  'Real Estate',
                  'And More...',
                ].map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[var(--primary-100)]"
                  >
                    <svg className="w-4 h-4 text-[var(--accent-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-950)] mb-6">
            Ready to Learn These Skills?
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-8">
            Check out our detailed curriculum or experience AI firsthand in our playground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/course-outline" className="btn-primary text-lg px-8 py-4">
              View Course Outline
            </Link>
            <Link href="/ai-playground" className="btn-accent text-lg px-8 py-4">
              Try AI Playground
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

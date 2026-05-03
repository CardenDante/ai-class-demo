'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai-background-main.jpg"
            alt="AI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-950)]/95 via-[var(--primary-900)]/85 to-[var(--primary-950)]/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[var(--accent-coral)]/20 text-[var(--accent-coral)] rounded-full text-sm font-semibold mb-6">
              12-Week Comprehensive AI Course
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-coral)] to-[var(--accent-gold)]">
                Artificial Intelligence
              </span>{' '}
              at We Can Academy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--primary-200)] mb-8 leading-relaxed">
              From AI fundamentals to building real-world projects. Learn prompt
              engineering, Python basics, AI APIs, and create your own chatbots
              and automation systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/course-outline" className="btn-accent text-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Explore Course
              </Link>
              <Link
                href="/ai-playground"
                className="btn-primary text-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Try AI Playground
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-coral)]">12</div>
                <div className="text-sm sm:text-base text-[var(--primary-200)]">Weeks</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)]">3</div>
                <div className="text-sm sm:text-base text-[var(--primary-200)]">Months</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm sm:text-base text-[var(--primary-200)]">Practical</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-coral)]">1</div>
                <div className="text-sm sm:text-base text-[var(--primary-200)]">Final Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--accent-coral)] font-semibold text-sm uppercase tracking-wider">
                Understanding AI
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-950)] mt-2 mb-6">
                What is Artificial Intelligence?
              </h2>
              <p className="text-[var(--muted-foreground)] text-lg mb-6 leading-relaxed">
                Artificial Intelligence is the simulation of human intelligence
                processes by machines, especially computer systems. These processes
                include learning, reasoning, and self-correction.
              </p>
              <p className="text-[var(--muted-foreground)] text-lg mb-6 leading-relaxed">
                Today, AI powers everyday technologies you already use: from
                ChatGPT that can write and code, to Google Maps predicting your
                commute, face recognition on your phone, and Netflix recommending
                what to watch next.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ChatGPT', 'Google Maps', 'Face ID', 'Netflix', 'Siri'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[var(--primary-50)] text-[var(--primary-700)] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ai-ml-banner.jpg"
                  alt="AI and Machine Learning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-600)] to-[var(--accent-coral)] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[var(--primary-950)]">AI is Everywhere</div>
                    <div className="text-sm text-[var(--muted-foreground)]">Used in 80% of devices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs ML vs DL Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[var(--accent-coral)] font-semibold text-sm uppercase tracking-wider">
              Key Concepts
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-950)] mt-2">
              AI vs Machine Learning vs Deep Learning
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Card */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-600)] to-[var(--primary-700)] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-950)] mb-3">
                Artificial Intelligence
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                The broadest concept - machines that can perform tasks that
                typically require human intelligence.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Problem solving
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Decision making
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Language understanding
                </li>
              </ul>
            </div>

            {/* ML Card */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-coral)] to-[var(--accent-coral-dark)] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-950)] mb-3">
                Machine Learning
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                A subset of AI where machines learn from data without being
                explicitly programmed.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pattern recognition
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Predictions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Data-driven learning
                </li>
              </ul>
            </div>

            {/* DL Card */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary-950)] mb-3">
                Deep Learning
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                A subset of ML using neural networks with many layers to learn
                complex patterns.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Image recognition
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Natural language processing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--accent-coral)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ChatGPT, DALL-E
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[var(--accent-coral)] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Course Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-950)] mt-2">
              What Makes This Course Special
            </h2>
          </div>

          <HoverEffect
            items={[
              {
                title: 'Hands-On Learning',
                description: 'Every week includes practical projects and real-world applications.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: 'Beginner Friendly',
                description: 'No prior coding experience required. We start from the basics.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Industry Tools',
                description: 'Learn ChatGPT, Python, APIs, Zapier, and more professional tools.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: 'Certification',
                description: 'Complete with a final project presentation and certificate.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ]}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai-circuit-bg.jpg"
            alt="Circuit Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-950)] to-[var(--primary-900)]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--primary-200)] mb-8">
            Join We Can Academy and transform your understanding of artificial
            intelligence from theory to practical skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/course-outline" className="btn-accent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
              View Full Curriculum
            </Link>
            <Link href="/what-youll-learn" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
              See Learning Outcomes
            </Link>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/students-illustration.jpg"
                  alt="Students learning AI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-[var(--accent-coral)] font-semibold text-sm uppercase tracking-wider">
                For Everyone
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-950)] mt-2 mb-6">
                Who Is This Course For?
              </h2>
              <div className="space-y-4">
                {[
                  'Students wanting to understand AI and future-proof their careers',
                  'Professionals looking to leverage AI in their work',
                  'Entrepreneurs wanting to build AI-powered products',
                  'Teachers and educators exploring AI in education',
                  'Anyone curious about how AI works and how to use it',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--accent-coral)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[var(--muted-foreground)]">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/ai-playground"
                className="inline-flex items-center mt-8 text-[var(--primary-600)] font-semibold hover:text-[var(--accent-coral)] transition-colors"
              >
                Try our AI Playground
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

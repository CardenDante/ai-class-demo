'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/course-outline', label: 'Course Outline' },
  { href: '/what-youll-learn', label: "What You'll Learn" },
  { href: '/ai-playground', label: 'AI Playground' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/App-Logo.png"
                alt="We Can Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* <span className="font-bold text-xl text-[var(--primary-950)] group-hover:text-[var(--primary-700)] transition-colors">
              We Can Academy
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--muted-foreground)] hover:text-[var(--primary-600)] font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-[var(--primary-50)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4">
              <Link
                href="/ai-playground"
                className="btn-accent inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Try AI
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--muted)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--primary-950)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-[var(--muted-foreground)] hover:text-[var(--primary-600)] hover:bg-[var(--muted)] rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ai-playground"
              className="btn-accent block text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Try AI Playground
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

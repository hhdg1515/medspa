'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { useLanguage } from '@/lib/LanguageContext';
import clsx from 'clsx';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background-main shadow-sm'
          : 'bg-background-main/80 backdrop-blur-sm'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-semibold">
            [Clinic Name] <span className="text-accent">{t.logo}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/treatments" className="hover:text-accent transition-colors">
              {t.nav.treatments}
            </Link>
            <Link href="/providers" className="hover:text-accent transition-colors">
              {t.nav.providers}
            </Link>
            <Link href="/results" className="hover:text-accent transition-colors">
              {t.nav.results}
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/blog" className="hover:text-accent transition-colors">
              {t.nav.blog}
            </Link>
            <Link href="/faq" className="hover:text-accent transition-colors">
              {t.nav.faq}
            </Link>
          </nav>

          {/* Right Side - Phone & CTA & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:XXXXXXXXXX"
              className="text-sm hover:text-accent transition-colors"
            >
              {t.phone}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => setLanguage('en')}
                className={clsx(
                  'transition-colors',
                  language === 'en' ? 'text-accent font-semibold' : 'hover:text-accent'
                )}
              >
                EN
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLanguage('zh')}
                className={clsx(
                  'transition-colors',
                  language === 'zh' ? 'text-accent font-semibold' : 'hover:text-accent'
                )}
              >
                中文
              </button>
            </div>

            <Button variant="primary" href="#contact">
              {t.bookConsultation}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-accent transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/treatments" className="hover:text-accent transition-colors">
                {t.nav.treatments}
              </Link>
              <Link href="/providers" className="hover:text-accent transition-colors">
                {t.nav.providers}
              </Link>
              <Link href="/results" className="hover:text-accent transition-colors">
                {t.nav.results}
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/blog" className="hover:text-accent transition-colors">
                {t.nav.blog}
              </Link>
              <Link href="/faq" className="hover:text-accent transition-colors">
                {t.nav.faq}
              </Link>

              <div className="pt-4 border-t border-border">
                <a
                  href="tel:XXXXXXXXXX"
                  className="block text-sm mb-4 hover:text-accent transition-colors"
                >
                  {t.phone}
                </a>

                {/* Language Switcher Mobile */}
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={() => setLanguage('en')}
                    className={clsx(
                      'text-sm transition-colors',
                      language === 'en' ? 'text-accent font-semibold' : 'hover:text-accent'
                    )}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('zh')}
                    className={clsx(
                      'text-sm transition-colors',
                      language === 'zh' ? 'text-accent font-semibold' : 'hover:text-accent'
                    )}
                  >
                    中文
                  </button>
                </div>

                <Button variant="primary" href="#contact" className="w-full">
                  {t.bookConsultation}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

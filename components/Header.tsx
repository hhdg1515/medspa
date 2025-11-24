'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Logo } from './Logo';
import { useLanguage } from '@/lib/LanguageContext';
import { siteConfig } from '@/lib/config';
import clsx from 'clsx';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Throttle scroll events to improve performance
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 80);
      }, 10); // 10ms throttle
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-background-main focus:rounded"
      >
        Skip to main content
      </a>

      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300',
          isScrolled ? 'shadow-md shadow-black/10' : ''
        )}
      >
        <div className="bg-[#5B4A43]/95 backdrop-blur-sm">
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <Logo className="w-10 h-10 text-white transition-colors group-hover:text-accent" />
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-semibold tracking-wide text-white">
                    {siteConfig.name}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/60">
                    {t.logo}
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation - Simplified to 3 main menus like ARIA */}
              <nav className="hidden lg:flex items-center space-x-8 text-sm">
                <Link href="/treatments/face" className="text-white/80 hover:text-white transition-colors">
                  {language === 'zh' ? '面部' : 'Face'}
                </Link>
                <Link href="/treatments/body" className="text-white/80 hover:text-white transition-colors">
                  {language === 'zh' ? '身体' : 'Body'}
                </Link>
                <Link href="/treatments/wellness" className="text-white/80 hover:text-white transition-colors">
                  {language === 'zh' ? '健康' : 'Wellness'}
                </Link>
              </nav>

              {/* Right Side - Phone & CTA & Language Switcher */}
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  {siteConfig.phone}
                </a>

                <Button
                  variant="secondary"
                  href="#contact"
                  className="border border-white/80 text-white bg-transparent hover:bg-white hover:text-[#5B4A43] px-6 py-2.5 text-sm"
                >
                  {language === 'zh' ? '预约咨询' : 'Request an Appointment'}
                </Button>

                {/* Language Switcher - Moved to end */}
                <div
                  className="flex items-center space-x-2 pl-2 border-l border-white/20"
                  role="group"
                  aria-label="Language selection"
                >
                  <button
                    onClick={() => setLanguage('en')}
                    className={clsx(
                      'transition-colors text-xs',
                      language === 'en'
                        ? 'text-accent font-semibold'
                        : 'text-white/70 hover:text-white'
                    )}
                    aria-label="Switch to English"
                    aria-pressed={language === 'en'}
                  >
                    EN
                  </button>
                  <span className="text-white/30" aria-hidden="true">
                    |
                  </span>
                  <button
                    onClick={() => setLanguage('zh')}
                    className={clsx(
                      'transition-colors text-xs',
                      language === 'zh'
                        ? 'text-accent font-semibold'
                        : 'text-white/70 hover:text-white'
                    )}
                    aria-label="切换到中文"
                    aria-pressed={language === 'zh'}
                  >
                    中文
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-white"
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
              <div className="lg:hidden py-4 border-t border-white/10">
                <nav className="flex flex-col space-y-4 text-white/90">
                  <Link href="/treatments/face" className="hover:text-accent transition-colors">
                    {language === 'zh' ? '面部' : 'Face'}
                  </Link>
                  <Link href="/treatments/body" className="hover:text-accent transition-colors">
                    {language === 'zh' ? '身体' : 'Body'}
                  </Link>
                  <Link href="/treatments/wellness" className="hover:text-accent transition-colors">
                    {language === 'zh' ? '健康' : 'Wellness'}
                  </Link>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="block text-sm mb-4 text-white/80 hover:text-accent transition-colors"
                    >
                      {siteConfig.phone}
                    </a>

                    {/* Language Switcher Mobile */}
                    <div className="flex items-center space-x-4 mb-4 text-sm">
                      <button
                        onClick={() => setLanguage('en')}
                        className={clsx(
                          'transition-colors',
                          language === 'en'
                            ? 'text-accent font-semibold'
                            : 'text-white/80 hover:text-accent'
                        )}
                      >
                        English
                      </button>
                      <button
                        onClick={() => setLanguage('zh')}
                        className={clsx(
                          'transition-colors',
                          language === 'zh'
                            ? 'text-accent font-semibold'
                            : 'text-white/80 hover:text-accent'
                        )}
                      >
                        中文
                      </button>
                    </div>

                    <Button
                      variant="secondary"
                      href="#contact"
                      className="w-full border border-white/80 text-white bg-transparent hover:bg-white hover:text-[#5B4A43]"
                    >
                      {language === 'zh' ? '预约咨询' : 'Request an Appointment'}
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Treatment finder banner */}
        <div className="hidden md:block bg-background-main/90 border-t border-border">
          <div className="container-custom flex items-center justify-center gap-2 py-2 text-xs text-text-secondary">
            <span>
              {language === 'zh'
                ? '不确定自己适合哪一种疗程？'
                : 'Not sure what treatment is right for you?'}
            </span>
            <button className="text-accent underline underline-offset-4 hover:text-text-primary">
              {language === 'zh' ? '试试疗程匹配测试' : 'Try our treatment finder'}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

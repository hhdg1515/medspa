'use client';

import React from 'react';
import { Button } from '../Button';
import { useLanguage } from '@/lib/LanguageContext';

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Placeholder for video/image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background-main via-background-dark to-background-main opacity-95" />
        {/*
          TODO: Add background video or image here
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        */}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - 6 columns */}
          <div className="lg:col-span-6 space-y-8 animate-fade-in">
            {/* Tag */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-accent">
                {t.hero.tag}
              </p>
              <p className="text-caption text-text-secondary">
                {t.hero.tagChinese}
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-h1">
              {language === 'zh' ? t.hero.title : (
                <>
                  {t.hero.title}
                  <br />
                  <span className="text-text-secondary text-2xl mt-2 block">
                    {t.hero.titleChinese}
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-body text-text-secondary max-w-xl">
              {language === 'zh' ? t.hero.subtitle : (
                <>
                  {t.hero.subtitle}
                  <br /><br />
                  <span className="text-sm">{t.hero.subtitleChinese}</span>
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#contact">
                {t.hero.ctaPrimary}
              </Button>
              <Button variant="secondary" href="#treatments">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right Side - 6 columns (space for background image/video) */}
          <div className="lg:col-span-6 hidden lg:block">
            {/* This space is reserved for the main visual element */}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <p className="text-caption text-text-secondary mb-2">
            {t.hero.scrollHint}
          </p>
          <svg
            className="w-6 h-6 mx-auto text-accent"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

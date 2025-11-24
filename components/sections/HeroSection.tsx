'use client';

import React from 'react';
import { Button } from '../Button';
import { useLanguage } from '@/lib/LanguageContext';

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background-main">
      {/* Soft radial background echoing the reference hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-background-dark" />
        <div className="absolute -left-40 -bottom-40 h-[320px] w-[320px] rounded-full border border-border/60" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8 animate-fade-in">
            {/* Tag */}
            <div className="space-y-2">
              <p className="text-xs tracking-[0.2em] uppercase text-accent">
                {t.hero.tag}
              </p>
              <p className="text-caption text-text-secondary">
                {t.hero.tagChinese}
              </p>
            </div>

            {/* Main Title styled like reference - "Find The Right Treatment For Your Unique Concerns" */}
            <h1 className="text-4xl lg:text-5xl xl:text-[56px] leading-[1.15] font-serif font-normal">
              {language === 'zh' ? (
                <span className="block">
                  为您的独特需求
                  <br />
                  <span className="italic font-light">找到合适的疗程</span>
                </span>
              ) : (
                <>
                  Find The Right Treatment
                  <br />
                  <span className="italic font-light">For Your Unique Concerns</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-body text-text-secondary max-w-xl">
              {language === 'zh' ? (
                t.hero.subtitleChinese
              ) : (
                <>
                  {t.hero.subtitle}
                  <br />
                  <br />
                  <span className="text-sm">{t.hero.subtitleChinese}</span>
                </>
              )}
            </p>

            {/* Underline + CTA like "TREATMENT FINDER" in reference */}
            <div className="space-y-6">
              <div className="h-px w-32 bg-text-primary" />
              <a
                href="#treatments"
                className="inline-block text-sm tracking-[0.2em] uppercase font-medium text-text-primary hover:text-accent transition-colors group"
              >
                {language === 'zh' ? '疗程匹配测试' : 'TREATMENT FINDER'}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-[260px] h-[360px] sm:w-[320px] sm:h-[440px]">
              {/* Large circle background behind model */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[360px] w-[360px] rounded-full bg-background-dark" />

              {/* Main visual - swap background image with your own in /public/images */}
              <div className="relative h-full w-full overflow-hidden rounded-[32px] shadow-xl shadow-black/10 bg-gradient-to-t from-background-dark via-background-main to-background-dark">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/hero-model.jpg')",
                  }}
                />
              </div>

              {/* Floating concern pills */}
              <div className="absolute -left-6 top-8">
                <span className="inline-flex items-center rounded-full bg-white/95 px-4 py-1 text-xs shadow-sm">
                  <span className="mr-2 inline-block h-6 w-6 rounded-full bg-accent/20" />
                  {language === 'zh' ? '整体健康' : 'Wellness concerns'}
                </span>
              </div>
              <div className="absolute -right-4 top-1/2">
                <span className="inline-flex items-center rounded-full bg-white/95 px-4 py-1 text-xs shadow-sm">
                  <span className="mr-2 inline-block h-6 w-6 rounded-full bg-accent/20" />
                  {language === 'zh' ? '面部轮廓' : 'Facial concerns'}
                </span>
              </div>
              <div className="absolute left-6 -bottom-6">
                <span className="inline-flex items-center rounded-full bg-white/95 px-4 py-1 text-xs shadow-sm">
                  <span className="mr-2 inline-block h-6 w-6 rounded-full bg-accent/20" />
                  {language === 'zh' ? '身体线条' : 'Body concerns'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center justify-center text-center">
          <div className="animate-bounce">
            <p className="mb-2 text-caption text-text-secondary">
              {t.hero.scrollHint}
            </p>
            <svg
              className="mx-auto h-6 w-6 text-accent"
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
      </div>
    </section>
  );
}

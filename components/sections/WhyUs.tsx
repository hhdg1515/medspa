'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="space-y-4">
      {/* Icon placeholder */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-xl text-accent">
        {icon || '✓'}
      </div>

      <h3 className="text-h3 text-white">{title}</h3>
      <p className="text-body text-white/80">{description}</p>
    </div>
  );
}

function VideoButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 bg-white/95 hover:bg-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
        <svg
          className="w-4 h-4 text-white ml-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="text-sm font-medium text-text-primary uppercase tracking-wider">
        Watch Video
      </span>
    </button>
  );
}

export function WhyUs() {
  const { language, t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative section-md overflow-hidden bg-background-dark">
      {/* Background photo with warm overlay, similar to the reference "Why" section */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/why-interior.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#4B3B34]/80" />
      </div>

      {/* Video Player Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              ✕
            </button>
            {/* Replace with your video URL */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="relative container-custom">
        {/* Large decorative words across the section */}
        <div className="pointer-events-none absolute inset-x-0 top-8 hidden translate-y-6 select-none text-center font-serif text-5xl tracking-wide text-white/10 lg:block">
          <span className="mr-16">
            {language === 'zh' ? '专业' : 'Expertise'}
          </span>
          <span className="mr-16">
            {language === 'zh' ? '细致' : 'Perfectionism'}
          </span>
          <span>
            {language === 'zh' ? '技术' : 'Technology'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left - Title & Intro */}
          <div className="lg:col-span-4">
            <h2 className="mb-6 text-h2 text-white">
              {language === 'en' ? (
                <>
                  {t.whyUs.title}
                  <span className="mt-2 block text-xl text-white/80">
                    {t.whyUs.titleChinese}
                  </span>
                </>
              ) : (
                t.whyUs.title
              )}
            </h2>
            <p className="text-body text-white/80 mb-8">
              {t.whyUs.subtitle}
            </p>

            {/* Video Button */}
            <VideoButton onClick={() => setShowVideo(true)} />
          </div>

          {/* Right - Feature Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <FeatureCard
                title={
                  language === 'en'
                    ? `${t.whyUs.physicianLed.title} / ${t.whyUs.physicianLed.titleChinese}`
                    : t.whyUs.physicianLed.title
                }
                description={t.whyUs.physicianLed.description}
                icon="🩺"
              />

              <FeatureCard
                title={
                  language === 'en'
                    ? `${t.whyUs.naturalResults.title} / ${t.whyUs.naturalResults.titleChinese}`
                    : t.whyUs.naturalResults.title
                }
                description={t.whyUs.naturalResults.description}
                icon="✨"
              />

              <FeatureCard
                title={
                  language === 'en'
                    ? `${t.whyUs.evidenceBased.title} / ${t.whyUs.evidenceBased.titleChinese}`
                    : t.whyUs.evidenceBased.title
                }
                description={t.whyUs.evidenceBased.description}
                icon="📋"
              />

              <FeatureCard
                title={
                  language === 'en'
                    ? `${t.whyUs.bilingualCare.title} / ${t.whyUs.bilingualCare.titleChinese}`
                    : t.whyUs.bilingualCare.title
                }
                description={t.whyUs.bilingualCare.description}
                icon="🌐"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface Treatment {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  image: string;
  duration: string;
  durationChinese: string;
  downtime: string;
  downtimeChinese: string;
  sessions: string;
  sessionsChinese: string;
  href: string;
}

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const { language } = useLanguage();

  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-background-dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: treatment.image }}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-serif font-light text-text-primary">
          {language === 'zh' ? treatment.nameChinese : treatment.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary line-clamp-3">
          {language === 'zh' ? treatment.descriptionChinese : treatment.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-xs text-text-secondary pt-2 border-t border-border">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language === 'zh' ? treatment.durationChinese : treatment.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{language === 'zh' ? treatment.downtimeChinese : treatment.downtime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{language === 'zh' ? treatment.sessionsChinese : treatment.sessions}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={treatment.href}
          className="block w-full text-center py-3 px-6 bg-[#5B4A43] text-white rounded-full text-sm font-medium hover:bg-[#4a3b35] transition-colors"
        >
          {language === 'zh' ? '立即预约' : 'Book Now'}
        </a>
      </div>
    </div>
  );
}

export function FeaturedTreatments() {
  const { language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const treatments: Treatment[] = [
    {
      id: '1',
      name: 'Face Slimming',
      nameChinese: '瘦脸针',
      description: 'Achieve a more contoured and refined facial appearance with our advanced face slimming treatments.',
      descriptionChinese: '通过我们先进的瘦脸疗程，打造更精致立体的面部轮廓。',
      image: "url('/images/face-slimming.jpg')",
      duration: '30-45 min',
      durationChinese: '30-45分钟',
      downtime: 'None',
      downtimeChinese: '无恢复期',
      sessions: '1-2 sessions',
      sessionsChinese: '1-2次',
      href: '/treatments/face-slimming',
    },
    {
      id: '2',
      name: 'Anti-Aging Facial',
      nameChinese: '抗衰老面部护理',
      description: 'Revitalize your skin with our comprehensive anti-aging facial treatments designed to restore youthful radiance.',
      descriptionChinese: '通过我们全面的抗衰老面部护理，恢复肌肤年轻光彩。',
      image: "url('/images/anti-aging.jpg')",
      duration: '60 min',
      durationChinese: '60分钟',
      downtime: 'Minimal',
      downtimeChinese: '极少',
      sessions: '3-6 sessions',
      sessionsChinese: '3-6次',
      href: '/treatments/anti-aging',
    },
    {
      id: '3',
      name: 'Body Contouring',
      nameChinese: '身体塑形',
      description: 'Sculpt and tone your body with our non-invasive contouring treatments for natural-looking results.',
      descriptionChinese: '通过非侵入式塑形疗程，雕塑紧致身材，呈现自然效果。',
      image: "url('/images/body-contouring.jpg')",
      duration: '45-60 min',
      durationChinese: '45-60分钟',
      downtime: 'None',
      downtimeChinese: '无恢复期',
      sessions: '4-8 sessions',
      sessionsChinese: '4-8次',
      href: '/treatments/body-contouring',
    },
    {
      id: '4',
      name: 'Skin Rejuvenation',
      nameChinese: '皮肤再生',
      description: 'Enhance your skin texture and tone with advanced rejuvenation therapies for a glowing complexion.',
      descriptionChinese: '通过先进的再生疗法，改善肌肤质地和肤色，焕发光彩。',
      image: "url('/images/skin-rejuvenation.jpg')",
      duration: '50 min',
      durationChinese: '50分钟',
      downtime: '1-2 days',
      downtimeChinese: '1-2天',
      sessions: '3-5 sessions',
      sessionsChinese: '3-5次',
      href: '/treatments/skin-rejuvenation',
    },
    {
      id: '5',
      name: 'Wellness Consultation',
      nameChinese: '健康咨询',
      description: 'Comprehensive wellness assessment to optimize your health and create a personalized treatment plan.',
      descriptionChinese: '全面的健康评估，优化您的身体状况并制定个性化治疗方案。',
      image: "url('/images/wellness.jpg')",
      duration: '60-90 min',
      durationChinese: '60-90分钟',
      downtime: 'None',
      downtimeChinese: '无恢复期',
      sessions: 'Ongoing',
      sessionsChinese: '持续',
      href: '/treatments/wellness',
    },
    {
      id: '6',
      name: 'Lip Enhancement',
      nameChinese: '唇部美化',
      description: 'Achieve fuller, more defined lips with our natural-looking lip enhancement treatments.',
      descriptionChinese: '通过自然效果的唇部美化疗程，打造丰盈清晰的唇形。',
      image: "url('/images/lip-enhancement.jpg')",
      duration: '30 min',
      durationChinese: '30分钟',
      downtime: 'Minimal',
      downtimeChinese: '极少',
      sessions: '1 session',
      sessionsChinese: '1次',
      href: '/treatments/lip-enhancement',
    },
  ];

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  return (
    <section className="section-md bg-background-main overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-4">
            {language === 'zh' ? '特色疗程' : 'Featured Treatments'}
          </h2>
          <p className="text-text-secondary">
            {language === 'zh'
              ? '探索我们最受欢迎的美容和健康疗程，为您量身定制完美方案。'
              : 'Explore our most popular aesthetic and wellness treatments, customized to your unique needs.'}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

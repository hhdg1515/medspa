'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface ValueProps {
  title: string;
  description: string;
}

function ValueOverlay({ title, description }: ValueProps) {
  return (
    <div className="text-center space-y-4">
      <h3 className="text-4xl lg:text-5xl font-serif italic text-white">{title}</h3>
      <p className="text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function OurValues() {
  const { language } = useLanguage();

  const values = [
    {
      title: language === 'zh' ? '预防性护理' : 'Preventative Care',
      description:
        language === 'zh'
          ? '我们的诊所强烈致力于解决人们关注的根本原因,而不是提供"快速修复"治疗。'
          : 'Instead of offering "quick fix" treatments, our wellness center in Denver believes strongly in addressing the root cause of people\'s concerns.',
      image: "url('/images/value-preventative.jpg')",
    },
    {
      title: language === 'zh' ? '永不妥协' : 'Never Settling',
      description:
        language === 'zh'
          ? '这是我们在这里的座右铭。这是什么意思?对于我们来说,这意味着我们永远不会为您提供任何少于所有治疗方式中最好的,以确保我们患者的成功。'
          : 'That\'s our motto here at Aria. What does this mean? For Aria, this means we will never provide you with anything less than the best of all the therapeutic modalities we offer to ensure our patient\'s success.',
      image: "url('/images/value-never-settling.jpg')",
    },
    {
      title: language === 'zh' ? '先进技术' : 'Advanced Technology',
      description:
        language === 'zh'
          ? '从从业者到技术、协议和模式,请放心,您将从我们安排咨询的那一刻起就获得一流的待遇。'
          : 'From practitioners, to technology, protocols, and modalities, rest assured you will receive best in class from the moment you schedule your consultation at our wellness clinic in Denver.',
      image: "url('/images/value-technology.jpg')",
    },
  ];

  return (
    <section className="relative">
      <h2 className="sr-only">{language === 'zh' ? '我们的价值观' : 'Our Values'}</h2>
      {values.map((value, index) => (
        <div
          key={index}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: value.image,
              }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative container-custom py-24">
            <div className="max-w-4xl mx-auto">
              {/* Section label */}
              <div className="mb-8 text-center">
                <span className="text-xs tracking-[0.3em] uppercase text-white/60">
                  {language === 'zh' ? '我们的价值观' : 'Our Values'}
                </span>
              </div>

              <ValueOverlay title={value.title} description={value.description} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

interface CategoryCardProps {
  title: string;
  titleChinese: string;
  description: string;
  descriptionChinese: string;
  image: string;
  href: string;
  treatments: string[];
  treatmentsChinese: string[];
}

function CategoryCard({
  title,
  titleChinese,
  description,
  descriptionChinese,
  image,
  href,
  treatments,
  treatmentsChinese,
}: CategoryCardProps) {
  const { language } = useLanguage();

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl bg-background-dark h-[500px] md:h-[600px] transition-transform duration-500 hover:scale-[1.02]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: image }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:from-black/95 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
        {/* Category Title */}
        <div className="space-y-4 mb-6">
          <h3 className="text-4xl md:text-5xl font-serif font-light text-white group-hover:text-accent transition-colors duration-300">
            {language === 'zh' ? titleChinese : title}
          </h3>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-md">
            {language === 'zh' ? descriptionChinese : description}
          </p>
        </div>

        {/* Treatment List */}
        <div className="space-y-2 mb-6">
          <p className="text-xs tracking-[0.2em] uppercase text-accent font-semibold">
            {language === 'zh' ? '包含疗程' : 'Popular Treatments'}
          </p>
          <ul className="space-y-1">
            {(language === 'zh' ? treatmentsChinese : treatments).slice(0, 4).map((treatment, index) => (
              <li key={index} className="text-sm text-white/80 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {treatment}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Arrow */}
        <div className="flex items-center gap-2 text-white group-hover:text-accent transition-colors duration-300">
          <span className="text-sm tracking-[0.2em] uppercase font-medium">
            {language === 'zh' ? '了解更多' : 'Explore'}
          </span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function ServiceCategories() {
  const { language } = useLanguage();

  const categories: CategoryCardProps[] = [
    {
      title: 'Face',
      titleChinese: '面部疗程',
      description:
        'Enhance your natural beauty with our comprehensive facial treatments designed to rejuvenate and refine your appearance.',
      descriptionChinese: '通过我们全面的面部疗程，提升您的自然美，焕发青春活力，精致容颜。',
      image: "url('/images/category-face.jpg')",
      href: '/treatments/face',
      treatments: [
        'Face Slimming',
        'Anti-Aging Treatments',
        'Lip Enhancement',
        'Skin Rejuvenation',
        'Dermal Fillers',
      ],
      treatmentsChinese: ['瘦脸针', '抗衰老疗程', '唇部美化', '皮肤再生', '真皮填充'],
    },
    {
      title: 'Body',
      titleChinese: '身体疗程',
      description:
        'Sculpt and tone your body with our advanced non-invasive treatments for natural-looking, long-lasting results.',
      descriptionChinese: '通过我们先进的非侵入式疗程，雕塑紧致身材，呈现自然持久的效果。',
      image: "url('/images/category-body.jpg')",
      href: '/treatments/body',
      treatments: [
        'Body Contouring',
        'Fat Reduction',
        'Skin Tightening',
        'Cellulite Treatment',
        'Body Sculpting',
      ],
      treatmentsChinese: ['身体塑形', '减脂疗程', '紧肤疗程', '橘皮组织治疗', '身体雕塑'],
    },
    {
      title: 'Wellness',
      titleChinese: '健康服务',
      description:
        'Optimize your overall health and well-being with our integrative wellness programs tailored to your unique needs.',
      descriptionChinese: '通过我们为您量身定制的综合健康计划，优化您的整体健康和幸福感。',
      image: "url('/images/category-wellness.jpg')",
      href: '/treatments/wellness',
      treatments: [
        'Wellness Consultation',
        'Hormone Optimization',
        'IV Therapy',
        'Nutritional Counseling',
        'Stress Management',
      ],
      treatmentsChinese: ['健康咨询', '荷尔蒙优化', '静脉注射疗法', '营养咨询', '压力管理'],
    },
  ];

  return (
    <section className="section-md bg-background-main">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
            {language === 'zh' ? '我们的服务' : 'Our Services'}
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">
            {language === 'zh' ? '探索我们的服务类别' : 'Explore Our Service Categories'}
          </h2>
          <p className="text-text-secondary text-lg">
            {language === 'zh'
              ? '从面部美容到身体塑形，再到整体健康优化，我们提供全方位的专业服务，帮助您实现美丽与健康的完美平衡。'
              : 'From facial aesthetics to body sculpting and overall wellness optimization, we offer comprehensive professional services to help you achieve the perfect balance of beauty and health.'}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            {language === 'zh'
              ? '不确定哪个疗程适合您？让我们帮您找到完美方案。'
              : 'Not sure which treatment is right for you? Let us help you find the perfect solution.'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B4A43] text-white rounded-full text-base font-medium hover:bg-accent transition-colors group"
          >
            <span>{language === 'zh' ? '免费咨询' : 'Free Consultation'}</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

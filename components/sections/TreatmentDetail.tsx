'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { TreatmentData } from '@/lib/faceTreatmentsData';

interface TreatmentDetailProps {
  treatment: TreatmentData;
}

export function TreatmentDetail({ treatment }: TreatmentDetailProps) {
  const { language } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: treatment.heroImage }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-4">
            {language === 'zh' ? treatment.nameChinese : treatment.name}
          </h2>
          <p className="text-2xl font-serif italic text-white/90">
            {language === 'zh' ? treatment.taglineChinese : treatment.tagline}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background-dark rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-3">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm text-text-secondary mb-1">
            {language === 'zh' ? '治疗时长' : 'Treatment Length'}
          </p>
          <p className="text-lg font-semibold text-text-primary">
            {language === 'zh' ? treatment.durationChinese : treatment.duration}
          </p>
        </div>

        <div className="bg-background-dark rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-3">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-sm text-text-secondary mb-1">
            {language === 'zh' ? '恢复期' : 'Downtime'}
          </p>
          <p className="text-lg font-semibold text-text-primary">
            {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
          </p>
        </div>

        <div className="bg-background-dark rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-3">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <p className="text-sm text-text-secondary mb-1">
            {language === 'zh' ? '疗程次数' : 'Sessions'}
          </p>
          <p className="text-lg font-semibold text-text-primary">
            {language === 'zh' ? treatment.sessionsChinese : treatment.sessions}
          </p>
        </div>
      </div>

      {/* What It Treats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-serif font-light mb-6">
            {language === 'zh'
              ? treatment.whatItTreats.titleChinese
              : treatment.whatItTreats.title}
          </h3>
          <ul className="space-y-3">
            {(language === 'zh'
              ? treatment.whatItTreats.itemsChinese
              : treatment.whatItTreats.items
            ).map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-80 bg-background-dark rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: treatment.heroImage }}
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-background-dark rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-serif font-light mb-6">
          {language === 'zh'
            ? treatment.howItWorks.titleChinese
            : treatment.howItWorks.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-lg">
          {language === 'zh'
            ? treatment.howItWorks.descriptionChinese
            : treatment.howItWorks.description}
        </p>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-3xl font-serif font-light mb-8 text-center">
          {language === 'zh' ? '核心优势' : 'Key Benefits'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatment.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-text-primary">
                {language === 'zh' ? benefit.titleChinese : benefit.title}
              </h4>
              <p className="text-text-secondary">
                {language === 'zh' ? benefit.descriptionChinese : benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-3xl font-serif font-light mb-8 text-center">
          {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-4 max-w-4xl mx-auto">
          {treatment.faq.map((item, index) => (
            <div key={index} className="bg-background-dark rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3 text-text-primary">
                {language === 'zh' ? item.questionChinese : item.question}
              </h4>
              <p className="text-text-secondary leading-relaxed">
                {language === 'zh' ? item.answerChinese : item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#5B4A43] to-[#4a3b35] rounded-3xl p-12 text-center text-white">
        <h3 className="text-3xl md:text-4xl font-serif font-light mb-4">
          {language === 'zh' ? '准备好开始了吗？' : 'Ready to Get Started?'}
        </h3>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {language === 'zh'
            ? '预约免费咨询，我们的专业团队将为您量身定制完美的治疗方案。'
            : 'Schedule your free consultation and let our expert team create a personalized treatment plan for you.'}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5B4A43] rounded-full text-base font-medium hover:bg-accent hover:text-white transition-colors"
        >
          <span>{language === 'zh' ? '立即预约' : 'Book Now'}</span>
          <svg
            className="w-5 h-5"
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
  );
}

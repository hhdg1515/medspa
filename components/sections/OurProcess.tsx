'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface ProcessStepProps {
  title: string;
  description: string;
  number: number;
}

function ProcessStep({ title, description, number }: ProcessStepProps) {
  return (
    <div className="relative">
      {/* Connecting curved line (decorative) */}
      {number < 3 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-32 h-1">
          <svg
            className="w-full h-full"
            viewBox="0 0 128 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2 Q 64 -10, 128 2"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-border"
            />
            <circle cx="124" cy="2" r="3" fill="currentColor" className="text-accent" />
          </svg>
        </div>
      )}

      <div className="space-y-4">
        {/* Number circle */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border-2 border-accent">
          <span className="text-2xl font-serif font-semibold text-accent">{number}</span>
        </div>

        <h3 className="text-2xl font-serif font-light">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function OurProcess() {
  const { language } = useLanguage();

  return (
    <section className="relative section-md bg-background-main overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/process-bg.jpg')",
          }}
        />
      </div>

      <div className="relative container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif font-light mb-8 text-white">
            {language === 'zh' ? '我们的流程' : 'Our Process'}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <ProcessStep
            number={1}
            title={language === 'zh' ? '咨询' : 'Consultation'}
            description={
              language === 'zh'
                ? '在开始任何治疗之前,我们与患者进行一对一的会面,以更好地了解他们的健康和健康问题。我们还利用这段时间来回顾您的病史并讨论您对护理的任何目标。'
                : 'Before starting any treatment, we meet with patients one-on-one to get a better understanding of their health and wellness concerns. We also use this time to go over your medical history and to discuss any goals you have related to your care.'
            }
          />
          <ProcessStep
            number={2}
            title={language === 'zh' ? '治疗' : 'Treatment'}
            description={
              language === 'zh'
                ? '在咨询期间,我们与您合作制定个性化的治疗计划。我们确保您对所选择的治疗方法感到舒适和满意。'
                : 'During your consultation, we work with you to develop a personalized treatment plan. We ensure you feel comfortable and confident in the therapeutic modality chosen.'
            }
          />
          <ProcessStep
            number={3}
            title={language === 'zh' ? '结果' : 'Results'}
            description={
              language === 'zh'
                ? '我们在这里确保我们优化每一位患者的健康。处于70%的优化状态意味着不是您的最佳状态。我们努力帮助您成为您可以并希望成为的人,达到100%的优化。'
                : 'We are here to make sure we optimize each and every one of our patients\' health. Being asymptomatic at 70% optimization is settling for not being your best. We strive to help you become who you can and want to be at 100% optimization.'
            }
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface StepProps {
  number: number;
  title: string;
  titleChinese?: string;
  description: string;
}

function Step({ number, title, titleChinese, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Step Number */}
      <div className="w-16 h-16 rounded-full bg-accent text-background-main flex items-center justify-center text-2xl font-semibold">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-h3">
        {title}
        {titleChinese && (
          <span className="block text-base font-normal text-text-secondary mt-1">
            {titleChinese}
          </span>
        )}
      </h3>

      {/* Description */}
      <p className="text-body text-text-secondary max-w-xs">
        {description}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const { language, t } = useLanguage();

  return (
    <section className="section-md bg-background-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-h2 mb-4">
            {language === 'en' ? (
              <>
                {t.howItWorks.title}
                <span className="block text-xl text-text-secondary mt-2">
                  {t.howItWorks.titleChinese}
                </span>
              </>
            ) : (
              t.howItWorks.title
            )}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Step
            number={1}
            title={t.howItWorks.step1.title}
            titleChinese={language === 'en' ? t.howItWorks.step1.titleChinese : undefined}
            description={t.howItWorks.step1.description}
          />

          <Step
            number={2}
            title={t.howItWorks.step2.title}
            titleChinese={language === 'en' ? t.howItWorks.step2.titleChinese : undefined}
            description={t.howItWorks.step2.description}
          />

          <Step
            number={3}
            title={t.howItWorks.step3.title}
            titleChinese={language === 'en' ? t.howItWorks.step3.titleChinese : undefined}
            description={t.howItWorks.step3.description}
          />

          <Step
            number={4}
            title={t.howItWorks.step4.title}
            titleChinese={language === 'en' ? t.howItWorks.step4.titleChinese : undefined}
            description={t.howItWorks.step4.description}
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
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
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
        <div className="w-8 h-8 text-accent text-2xl">
          {icon || '✓'}
        </div>
      </div>

      <h3 className="text-h3">{title}</h3>
      <p className="text-body text-text-secondary">{description}</p>
    </div>
  );
}

export function WhyUs() {
  const { language, t } = useLanguage();

  return (
    <section className="section-md bg-background-main">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Title & Intro (4 columns) */}
          <div className="lg:col-span-4">
            <h2 className="text-h2 mb-6">
              {language === 'en' ? (
                <>
                  {t.whyUs.title}
                  <span className="block text-xl text-text-secondary mt-2">
                    {t.whyUs.titleChinese}
                  </span>
                </>
              ) : (
                t.whyUs.title
              )}
            </h2>
            <p className="text-body text-text-secondary">
              {t.whyUs.subtitle}
            </p>
          </div>

          {/* Right - Feature Cards (8 columns) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                title={language === 'en'
                  ? `${t.whyUs.physicianLed.title} / ${t.whyUs.physicianLed.titleChinese}`
                  : t.whyUs.physicianLed.title
                }
                description={t.whyUs.physicianLed.description}
                icon="🩺"
              />

              <FeatureCard
                title={language === 'en'
                  ? `${t.whyUs.naturalResults.title} / ${t.whyUs.naturalResults.titleChinese}`
                  : t.whyUs.naturalResults.title
                }
                description={t.whyUs.naturalResults.description}
                icon="✨"
              />

              <FeatureCard
                title={language === 'en'
                  ? `${t.whyUs.evidenceBased.title} / ${t.whyUs.evidenceBased.titleChinese}`
                  : t.whyUs.evidenceBased.title
                }
                description={t.whyUs.evidenceBased.description}
                icon="📋"
              />

              <FeatureCard
                title={language === 'en'
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

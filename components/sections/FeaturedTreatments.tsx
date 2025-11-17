'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface TreatmentCardProps {
  title: string;
  titleChinese?: string;
  description: string;
  meta: string;
  cta: string;
  href: string;
}

function TreatmentCard({ title, titleChinese, description, meta, cta, href }: TreatmentCardProps) {
  return (
    <div className="card group hover:scale-105 cursor-pointer">
      <a href={href} className="block">
        {/* Placeholder for treatment image */}
        <div className="w-full h-48 bg-background-dark rounded-lg mb-6 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-text-secondary">
            [Treatment Image]
          </div>
        </div>

        <h3 className="text-h3 mb-3 group-hover:text-accent transition-colors">
          {title}
          {titleChinese && (
            <span className="block text-base font-normal text-text-secondary mt-1">
              {titleChinese}
            </span>
          )}
        </h3>

        <p className="text-body text-text-secondary mb-4">
          {description}
        </p>

        <p className="text-caption text-text-secondary mb-4 border-t border-border pt-4">
          {meta}
        </p>

        <span className="text-accent font-medium group-hover:underline">
          {cta} →
        </span>
      </a>
    </div>
  );
}

export function FeaturedTreatments() {
  const { language, t } = useLanguage();

  return (
    <section id="treatments" className="section-md bg-background-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 mb-4">
            {language === 'en' ? (
              <>
                {t.featuredTreatments.title}
                <span className="block text-xl text-text-secondary mt-2">
                  {t.featuredTreatments.titleChinese}
                </span>
              </>
            ) : (
              t.featuredTreatments.title
            )}
          </h2>
          <p className="text-body text-text-secondary">
            {t.featuredTreatments.subtitle}
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TreatmentCard
            title={t.featuredTreatments.faceSlimming.title}
            titleChinese={language === 'en' ? t.featuredTreatments.faceSlimming.titleChinese : undefined}
            description={t.featuredTreatments.faceSlimming.description}
            meta={t.featuredTreatments.faceSlimming.meta}
            cta={t.featuredTreatments.faceSlimming.cta}
            href="/treatments/face-slimming"
          />

          <TreatmentCard
            title={t.featuredTreatments.weightManagement.title}
            titleChinese={language === 'en' ? t.featuredTreatments.weightManagement.titleChinese : undefined}
            description={t.featuredTreatments.weightManagement.description}
            meta={t.featuredTreatments.weightManagement.meta}
            cta={t.featuredTreatments.weightManagement.cta}
            href="/treatments/weight-management"
          />

          <TreatmentCard
            title={t.featuredTreatments.skinGlow.title}
            titleChinese={language === 'en' ? t.featuredTreatments.skinGlow.titleChinese : undefined}
            description={t.featuredTreatments.skinGlow.description}
            meta={t.featuredTreatments.skinGlow.meta}
            cta={t.featuredTreatments.skinGlow.cta}
            href="/treatments/skin-glow"
          />
        </div>
      </div>
    </section>
  );
}

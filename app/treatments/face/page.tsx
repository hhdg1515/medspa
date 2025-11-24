'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TreatmentDetail } from '@/components/sections/TreatmentDetail';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { useLanguage } from '@/lib/LanguageContext';
import { faceTreatments } from '@/lib/faceTreatmentsData';
import clsx from 'clsx';

export default function FaceTreatmentsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(faceTreatments[0].id);

  const activeTreatment = faceTreatments.find((t) => t.id === activeTab) || faceTreatments[0];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="section-md bg-gradient-to-b from-background-dark to-background-main">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
                {language === 'zh' ? '面部疗程' : 'Facial Treatments'}
              </p>
              <h1 className="text-5xl lg:text-6xl font-serif font-light mb-6">
                {language === 'zh' ? (
                  <>
                    提升您的
                    <br />
                    <span className="italic">自然美</span>
                  </>
                ) : (
                  <>
                    Enhance Your
                    <br />
                    <span className="italic">Natural Beauty</span>
                  </>
                )}
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {language === 'zh'
                  ? '探索我们的面部美容疗程，从减少皱纹到恢复容量和轮廓塑形，我们为每个人提供量身定制的解决方案。'
                  : 'Explore our comprehensive facial aesthetic treatments, from wrinkle reduction to volume restoration and contouring. We have tailored solutions for everyone.'}
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation (Sticky) */}
        <div className="sticky top-20 z-40 bg-white border-b border-border shadow-sm">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="inline-flex gap-2 p-2">
                {faceTreatments.map((treatment) => (
                  <button
                    key={treatment.id}
                    onClick={() => setActiveTab(treatment.id)}
                    className={clsx(
                      'px-6 py-3 rounded-full text-sm font-medium transition-all',
                      activeTab === treatment.id
                        ? 'bg-[#5B4A43] text-white shadow-md'
                        : 'bg-transparent text-text-secondary hover:bg-background-dark hover:text-text-primary'
                    )}
                  >
                    {language === 'zh' ? treatment.nameChinese : treatment.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <section className="section-md bg-background-main">
          <div className="container-custom">
            <TreatmentDetail treatment={activeTreatment} />
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Final CTA */}
        <section className="section-md bg-background-main">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#5B4A43] to-[#4a3b35] rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">
                {language === 'zh' ? '准备好改变了吗？' : 'Ready for a Transformation?'}
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {language === 'zh'
                  ? '我们的专家团队将为您提供个性化咨询，帮助您选择最适合您需求和目标的治疗方案。'
                  : 'Our expert team will provide you with a personalized consultation to help you choose the treatment that best fits your needs and goals.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#5B4A43] rounded-full text-base font-medium hover:bg-accent hover:text-white transition-colors"
                >
                  <span>{language === 'zh' ? '预约免费咨询' : 'Book Free Consultation'}</span>
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
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full text-base font-medium hover:bg-white hover:text-[#5B4A43] transition-colors"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{language === 'zh' ? '立即致电' : 'Call Now'}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

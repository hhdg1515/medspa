'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TreatmentDetail } from '@/components/sections/TreatmentDetail';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { useLanguage } from '@/lib/LanguageContext';
import { wellnessTreatments } from '@/lib/wellnessTreatmentsData';

export default function WellnessTreatmentsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(wellnessTreatments[0].id);

  const activeTreatment = wellnessTreatments.find((t) => t.id === activeTab) || wellnessTreatments[0];

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section - SKILL Compliant */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1a2332] to-[#2d3e50]">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/wellness-hero-bg.jpg')" }}
            />
          </div>

          <div className="container mx-auto px-8 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Overline - SKILL: Caption style */}
              <p className="text-[13px] tracking-[0.15em] uppercase text-[#c9a961] mb-6 font-medium">
                {language === 'zh' ? '健康服务' : 'Wellness Services'}
              </p>

              {/* Headline - SKILL: Hero Headline 48-64px, weight 600-700 */}
              <h1 className="text-5xl md:text-6xl font-sans font-semibold text-white mb-6 leading-tight tracking-tight">
                {language === 'zh' ? (
                  <>
                    优化您的
                    <br />
                    <span className="text-[#c9a961]">整体健康</span>
                  </>
                ) : (
                  <>
                    Optimize Your
                    <br />
                    <span className="text-[#c9a961]">Complete Wellness</span>
                  </>
                )}
              </h1>

              {/* Subheadline - SKILL: Body Large 18px, line-height 1.6-1.8 */}
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                {language === 'zh'
                  ? '从荷尔蒙优化到静脉营养疗法，我们提供全面的健康解决方案，帮助您实现最佳状态。基于证据、个性化、全面的护理方法。'
                  : 'From hormone optimization to IV nutrient therapy, we provide comprehensive wellness solutions to help you achieve your optimal state. Evidence-based, personalized, and holistic care.'}
              </p>

              {/* Primary CTA - SKILL: CTA Button style */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('consultation-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#c9a961] text-[#1a2332] rounded-md text-base font-semibold shadow-[0_4px_12px_rgba(201,169,97,0.2)] hover:bg-[#b8975a] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>{language === 'zh' ? '预约免费咨询' : 'Schedule Free Consultation'}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Secondary Button - SKILL: Secondary Button style */}
                <button
                  onClick={() => document.getElementById('tabs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent border-2 border-white text-white rounded-md text-base font-semibold hover:bg-white hover:text-[#1a2332] transition-all duration-300"
                >
                  <span>{language === 'zh' ? '浏览疗程' : 'Explore Treatments'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation - SKILL Compliant Sticky */}
        <div id="tabs" className="sticky top-20 z-40 bg-white border-b border-[#e8e8e8] shadow-sm">
          <div className="container mx-auto px-8 md:px-12">
            <div className="flex justify-center">
              <div className="inline-flex gap-3 p-3">
                {wellnessTreatments.map((treatment) => (
                  <button
                    key={treatment.id}
                    onClick={() => setActiveTab(treatment.id)}
                    className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
                      activeTab === treatment.id
                        ? 'bg-[#1a2332] text-white shadow-md'
                        : 'bg-transparent text-[#6a7380] hover:bg-[#f5f5f5] hover:text-[#2a2a2a]'
                    }`}
                  >
                    {language === 'zh' ? treatment.nameChinese : treatment.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content - SKILL: Section padding 80-100px vertical */}
        <section className="py-20 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
            <WellnessTreatmentDetail treatment={activeTreatment} />
          </div>
        </section>

        {/* Comparison Section - SKILL: Alternating background */}
        <WellnessComparisonTable treatments={wellnessTreatments} />

        {/* Final CTA - SKILL Compliant */}
        <section id="consultation-cta" className="py-20 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-8 md:px-12">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1a2332] to-[#2d3e50] rounded-xl p-12 md:p-16 text-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              {/* SKILL: H2 28-32px, weight 600-700 */}
              <h2 className="text-4xl md:text-5xl font-sans font-semibold mb-6 leading-tight">
                {language === 'zh' ? '准备好改变您的健康了吗？' : 'Ready to Transform Your Health?'}
              </h2>

              {/* SKILL: Body Large 18px, line-height 1.6-1.8 */}
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                {language === 'zh'
                  ? '我们的健康专家团队将为您提供个性化咨询，帮助您选择最适合您需求和目标的治疗方案。开始您通往最佳健康的旅程。'
                  : 'Our wellness expert team will provide you with a personalized consultation to help you choose the treatments that best fit your needs and goals. Begin your journey to optimal health.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* SKILL: CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#c9a961] text-[#1a2332] rounded-md text-base font-semibold shadow-[0_4px_12px_rgba(201,169,97,0.3)] hover:bg-[#b8975a] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>{language === 'zh' ? '预约免费咨询' : 'Book Free Consultation'}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* SKILL: Secondary Button */}
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent border-2 border-white text-white rounded-md text-base font-semibold hover:bg-white hover:text-[#1a2332] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

// SKILL-Compliant Treatment Detail Component
function WellnessTreatmentDetail({ treatment }: { treatment: any }) {
  const { language } = useLanguage();

  return (
    <div className="space-y-24">
      {/* Hero Section - SKILL: Card with shadow */}
      <div className="relative rounded-xl overflow-hidden h-[400px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: treatment.heroImage }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-10 md:p-12">
          {/* SKILL: H1 36-42px */}
          <h2 className="text-5xl md:text-6xl font-sans font-semibold text-white mb-4 tracking-tight">
            {language === 'zh' ? treatment.nameChinese : treatment.name}
          </h2>
          {/* SKILL: Body Large 18px */}
          <p className="text-xl font-sans font-light text-white/95">
            {language === 'zh' ? treatment.taglineChinese : treatment.tagline}
          </p>
        </div>
      </div>

      {/* Key Metrics - SKILL: Card grid with 24-32px gap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: language === 'zh' ? '治疗时长' : 'Treatment Length', value: language === 'zh' ? treatment.durationChinese : treatment.duration, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
          { label: language === 'zh' ? '恢复期' : 'Downtime', value: language === 'zh' ? treatment.downtimeChinese : treatment.downtime, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
          { label: language === 'zh' ? '疗程次数' : 'Sessions', value: language === 'zh' ? treatment.sessionsChinese : treatment.sessions, icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={metric.icon} />
              </svg>
            </div>
            {/* SKILL: Body Small 14px */}
            <p className="text-sm text-[#6a7380] mb-2 font-medium uppercase tracking-wide">{metric.label}</p>
            {/* SKILL: Body Large 18px */}
            <p className="text-lg font-semibold text-[#2a2a2a]">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* What It Treats - SKILL: Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* SKILL: H3 22-26px */}
          <h3 className="text-3xl font-sans font-semibold mb-8 text-[#1a2332]">
            {language === 'zh' ? treatment.whatItTreats.titleChinese : treatment.whatItTreats.title}
          </h3>
          <ul className="space-y-4">
            {(language === 'zh' ? treatment.whatItTreats.itemsChinese : treatment.whatItTreats.items).map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#a8c5b8]/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-[#a8c5b8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {/* SKILL: Body Regular 16px, line-height 1.6-1.8 */}
                <span className="text-[#2a2a2a] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-80 bg-[#f5f5f5] rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: treatment.heroImage }} />
        </div>
      </div>

      {/* How It Works - SKILL: Content section */}
      <div className="bg-white rounded-xl p-10 md:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <h3 className="text-3xl font-sans font-semibold mb-6 text-[#1a2332]">
          {language === 'zh' ? treatment.howItWorks.titleChinese : treatment.howItWorks.title}
        </h3>
        {/* SKILL: Body Regular, max-width 65-75 characters, line-height 1.6-1.8 */}
        <p className="text-[#2a2a2a] leading-relaxed text-lg max-w-[800px]">
          {language === 'zh' ? treatment.howItWorks.descriptionChinese : treatment.howItWorks.description}
        </p>
      </div>

      {/* Benefits - SKILL: 3-column card grid */}
      <div>
        <h3 className="text-3xl font-sans font-semibold mb-10 text-center text-[#1a2332]">
          {language === 'zh' ? '核心优势' : 'Key Benefits'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatment.benefits.map((benefit: any, index: number) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-5">{benefit.icon}</div>
              {/* SKILL: H4 18-20px */}
              <h4 className="text-xl font-semibold mb-4 text-[#1a2332]">
                {language === 'zh' ? benefit.titleChinese : benefit.title}
              </h4>
              <p className="text-[#6a7380] leading-relaxed">
                {language === 'zh' ? benefit.descriptionChinese : benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ - SKILL: Content section */}
      <div>
        <h3 className="text-3xl font-sans font-semibold mb-10 text-center text-[#1a2332]">
          {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          {treatment.faq.map((item: any, index: number) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <h4 className="text-lg font-semibold mb-4 text-[#1a2332]">
                {language === 'zh' ? item.questionChinese : item.question}
              </h4>
              <p className="text-[#6a7380] leading-relaxed">
                {language === 'zh' ? item.answerChinese : item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// SKILL-Compliant Comparison Table
function WellnessComparisonTable({ treatments }: { treatments: any[] }) {
  const { language } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sans font-semibold mb-6 text-[#1a2332]">
            {language === 'zh' ? '疗程对比' : 'Treatment Comparison'}
          </h2>
          <p className="text-[#6a7380] max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '对比我们的三种健康疗程，找到最适合您需求的治疗方案。'
              : 'Compare our three wellness treatments to find the perfect solution for your needs.'}
          </p>
        </div>

        {/* Desktop Table - SKILL Compliant */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <thead>
              <tr className="bg-[#1a2332] text-white">
                <th className="py-5 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  {language === 'zh' ? '特性' : 'Feature'}
                </th>
                {treatments.map((treatment) => (
                  <th key={treatment.id} className="py-5 px-6 text-center text-sm font-semibold uppercase tracking-wider">
                    {language === 'zh' ? treatment.nameChinese : treatment.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-5 px-6 font-medium text-[#2a2a2a]">
                  {language === 'zh' ? '治疗时长' : 'Treatment Time'}
                </td>
                {treatments.map((treatment) => (
                  <td key={treatment.id} className="py-5 px-6 text-center text-[#6a7380]">
                    {language === 'zh' ? treatment.durationChinese : treatment.duration}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#e8e8e8] bg-[#fafaf8]">
                <td className="py-5 px-6 font-medium text-[#2a2a2a]">
                  {language === 'zh' ? '恢复期' : 'Downtime'}
                </td>
                {treatments.map((treatment) => (
                  <td key={treatment.id} className="py-5 px-6 text-center text-[#6a7380]">
                    {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-5 px-6 font-medium text-[#2a2a2a]">
                  {language === 'zh' ? '疗程次数' : 'Sessions Required'}
                </td>
                {treatments.map((treatment) => (
                  <td key={treatment.id} className="py-5 px-6 text-center text-[#6a7380]">
                    {language === 'zh' ? treatment.sessionsChinese : treatment.sessions}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-2xl font-sans font-semibold mb-6 text-center text-[#1a2332]">
                {language === 'zh' ? treatment.nameChinese : treatment.name}
              </h3>
              <div className="space-y-4">
                {[
                  { label: language === 'zh' ? '治疗时长' : 'Treatment Time', value: language === 'zh' ? treatment.durationChinese : treatment.duration },
                  { label: language === 'zh' ? '恢复期' : 'Downtime', value: language === 'zh' ? treatment.downtimeChinese : treatment.downtime },
                  { label: language === 'zh' ? '疗程次数' : 'Sessions', value: language === 'zh' ? treatment.sessionsChinese : treatment.sessions },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-[#e8e8e8] pb-3">
                    <span className="font-medium text-[#2a2a2a]">{item.label}</span>
                    <span className="text-[#6a7380]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - SKILL: CTA Button */}
        <div className="mt-12 text-center">
          <p className="text-[#6a7380] mb-6 leading-relaxed">
            {language === 'zh'
              ? '还不确定哪个疗程适合您？让我们的专家帮您选择。'
              : 'Still not sure which treatment is right for you? Let our experts help you choose.'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#c9a961] text-[#1a2332] rounded-md text-base font-semibold shadow-[0_4px_12px_rgba(201,169,97,0.2)] hover:bg-[#b8975a] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>{language === 'zh' ? '免费咨询' : 'Free Consultation'}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { wellnessTreatments, WellnessTreatmentData } from '@/lib/wellnessTreatmentsData';

const benefitIconMap: Record<string, JSX.Element> = {
  bolt: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L6 13.5h4.5L9 22l9-13h-4.5L15 2z" />
    </svg>
  ),
  target: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  clock: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6l3 2" />
    </svg>
  ),
  dna: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M7 4c3 2 7 2 10 0" />
      <path strokeLinecap="round" d="M7 20c3-2 7-2 10 0" />
      <path strokeLinecap="round" d="M8 6l8 12" />
      <path strokeLinecap="round" d="M8 18l8-12" />
    </svg>
  ),
  microscope: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13h4l2 3h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 4h3v7h-3z" />
      <path strokeLinecap="round" d="M6 21h12M9 9h3" />
    </svg>
  ),
  chart: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 19v-8" />
      <path strokeLinecap="round" d="M4 21h16" />
    </svg>
  ),
  leaf: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13c3-6 9-9 14-9 0 5-3 11-9 14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13c3 2 5 4 6 8" />
    </svg>
  ),
  book: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h6v14H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 5h-6v14h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
    </svg>
  ),
  user: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    </svg>
  ),
  default: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
    </svg>
  ),
};

export default function WellnessTreatmentsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(wellnessTreatments[0].id);

  const activeTreatment = wellnessTreatments.find((t) => t.id === activeTab) || wellnessTreatments[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1a2332] to-[#2d3e50]">
          <div className="absolute inset-0 opacity-15">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero-model.jpg')" }}
            />
          </div>

          <div className="container mx-auto px-8 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[13px] tracking-[0.15em] uppercase text-[#c9a961] mb-6 font-medium">
                {language === 'zh' ? '健康服务' : 'Wellness Services'}
              </p>

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

              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                {language === 'zh'
                  ? '从荷尔蒙优化到静脉营养疗法，我们提供全面的健康解决方案，帮助您实现最佳状态。基于证据、个性化、全面的护理方法。'
                  : 'From hormone optimization to IV nutrient therapy, we provide comprehensive wellness solutions to help you achieve your optimal state. Evidence-based, personalized, and holistic care.'}
              </p>

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

        <div id="tabs" className="sticky top-20 z-40 bg-white border-b border-[#e8e8e8] shadow-sm">
          <div className="container mx-auto px-8 md:px-12">
            <div className="flex justify-center">
              <div className="inline-flex gap-3 p-3">
                {wellnessTreatments.map((treatment) => (
                  <button
                    key={treatment.id}
                    onClick={() => handleTabChange(treatment.id)}
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

        <section className="py-20 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
            <WellnessTreatmentDetail treatment={activeTreatment} />
          </div>
        </section>

        <WellnessTrustSection />

        <WellnessComparisonTable treatments={wellnessTreatments} />

        <RelatedTreatmentsSection
          treatments={wellnessTreatments}
          activeTreatmentId={activeTreatment.id}
          onSelect={(id) => {
            handleTabChange(id);
            document.getElementById('tabs')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <section id="consultation-cta" className="py-20 md:py-24 bg-[#fafaf8]">
          <div className="container mx-auto px-8 md:px-12">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1a2332] to-[#2d3e50] rounded-xl p-12 md:p-16 text-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <h2 className="text-4xl md:text-5xl font-sans font-semibold mb-6 leading-tight">
                {language === 'zh' ? '准备好改变您的健康了吗？' : 'Ready to Transform Your Health?'}
              </h2>

              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                {language === 'zh'
                  ? '我们的健康专家团队将为您提供个性化咨询，帮助您选择最适合您需求和目标的治疗方案。开始您通往最佳健康的旅程。'
                  : 'Our wellness expert team will provide you with a personalized consultation to help you choose the treatments that best fit your needs and goals. Begin your journey to optimal health.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#c9a961] text-[#1a2332] rounded-md text-base font-semibold shadow-[0_4px_12px_rgba(201,169,97,0.3)] hover:bg-[#b8975a] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>{language === 'zh' ? '预约免费咨询' : 'Book Free Consultation'}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

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

        <WellnessContactSection />
      </main>
      <Footer />
    </>
  );
}

function WellnessTreatmentDetail({ treatment }: { treatment: WellnessTreatmentData }) {
  const { language } = useLanguage();
  const heroStyle = { backgroundImage: `url(${treatment.heroImage})` };

  return (
    <div className="space-y-24">
      <div className="relative rounded-xl overflow-hidden h-[400px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="absolute inset-0 bg-cover bg-center" style={heroStyle} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-10 md:p-12">
          <h2 className="text-5xl md:text-6xl font-sans font-semibold text-white mb-4 tracking-tight">
            {language === 'zh' ? treatment.nameChinese : treatment.name}
          </h2>
          <p className="text-xl font-sans font-light text-white/95">
            {language === 'zh' ? treatment.taglineChinese : treatment.tagline}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            label: language === 'zh' ? '治疗时长' : 'Treatment Length',
            value: language === 'zh' ? treatment.durationChinese : treatment.duration,
            icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
          },
          {
            label: language === 'zh' ? '恢复期' : 'Downtime',
            value: language === 'zh' ? treatment.downtimeChinese : treatment.downtime,
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
          },
          {
            label: language === 'zh' ? '疗程次数' : 'Sessions',
            value: language === 'zh' ? treatment.sessionsChinese : treatment.sessions,
            icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={metric.icon} />
              </svg>
            </div>
            <p className="text-sm text-[#6a7380] mb-2 font-medium uppercase tracking-wide">{metric.label}</p>
            <p className="text-lg font-semibold text-[#2a2a2a]">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl font-sans font-semibold mb-8 text-[#1a2332]">
            {language === 'zh' ? treatment.whatItTreats.titleChinese : treatment.whatItTreats.title}
          </h3>
          <ul className="space-y-4">
            {(language === 'zh' ? treatment.whatItTreats.itemsChinese : treatment.whatItTreats.items).map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#a8c5b8]/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-[#a8c5b8]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-[#2a2a2a] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-80 bg-[#f5f5f5] rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-0 bg-cover bg-center" style={heroStyle} />
        </div>
      </div>

      <div className="bg-white rounded-xl p-10 md:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <h3 className="text-3xl font-sans font-semibold mb-6 text-[#1a2332]">
          {language === 'zh' ? treatment.howItWorks.titleChinese : treatment.howItWorks.title}
        </h3>
        <p className="text-[#2a2a2a] leading-relaxed text-lg max-w-[800px]">
          {language === 'zh' ? treatment.howItWorks.descriptionChinese : treatment.howItWorks.description}
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-sans font-semibold mb-10 text-center text-[#1a2332]">
          {language === 'zh' ? '核心优势' : 'Key Benefits'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatment.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#a8c5b8]/20 flex items-center justify-center text-[#1a2332]">
                {benefitIconMap[benefit.icon] || benefitIconMap.default}
              </div>
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

      <div>
        <h3 className="text-3xl font-sans font-semibold mb-10 text-center text-[#1a2332]">
          {language === 'zh' ? treatment.process.titleChinese : treatment.process.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatment.process.steps.map((step, index) => (
            <div
              key={`${step.title}-${index}`}
              className="bg-white rounded-xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#e8e8e8]"
            >
              <div className="w-10 h-10 rounded-full bg-[#c9a961]/20 text-[#c9a961] flex items-center justify-center font-semibold mb-5">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold text-[#1a2332] mb-3">
                {language === 'zh' ? step.titleChinese : step.title}
              </h4>
              <p className="text-[#6a7380] leading-relaxed">
                {language === 'zh' ? step.descriptionChinese : step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-sans font-semibold mb-10 text-center text-[#1a2332]">
          {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          {treatment.faq.map((item, index) => (
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

function WellnessTrustSection() {
  const { language } = useLanguage();

  const stats = [
    {
      value: '15+',
      labelEn: 'Years Integrated Care',
      labelZh: '15+年整合医疗',
    },
    {
      value: '4.9/5',
      labelEn: 'Patient Satisfaction',
      labelZh: '4.9/5满意度',
    },
    {
      value: '9,800+',
      labelEn: 'Personalized Plans',
      labelZh: '9800+定制方案',
    },
    {
      value: '24h',
      labelEn: 'Concierge Response',
      labelZh: '24小时礼宾响应',
    },
  ];

  const testimonials = [
    {
      quoteEn:
        'My hormone optimization plan finally stabilized my energy. The phased process and lab reviews made me feel cared for every step.',
      quoteZh: '荷尔蒙优化方案终于稳定了我的能量。分阶段流程与实验室复查让我在每一步都感到被悉心照料。',
      name: 'Grace L.',
      treatmentEn: 'Hormone Optimization',
      treatmentZh: '荷尔蒙优化',
    },
    {
      quoteEn:
        'The IV therapy lounge is calm, spotless, and clinically supervised. I feel revitalized within hours after every visit.',
      quoteZh: '静脉营养治疗区宁静、洁净且由临床团队监管。每次治疗后数小时内我就能感到焕发活力。',
      name: 'Michael W.',
      treatmentEn: 'IV Therapy',
      treatmentZh: '静脉注射疗法',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center mb-14">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[#c9a961] mb-4 font-semibold">
            {language === 'zh' ? '专业实力' : 'Clinical Credibility'}
          </p>
          <h2 className="text-4xl font-sans font-semibold text-[#1a2332] mb-4">
            {language === 'zh' ? '数据与口碑双重背书' : 'Proof You Can Trust'}
          </h2>
          <p className="text-[#6a7380] max-w-3xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '认证团队、严谨评估流程以及真实患者故事，帮助您在选择疗程时更安心。'
              : 'Certified clinicians, rigorous assessments, and real patient stories ensure every treatment recommendation feels trustworthy.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="bg-[#fafaf8] rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-semibold text-[#1a2332] mb-6">
              {language === 'zh' ? '核心指标' : 'Key Indicators'}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-3xl font-semibold text-[#1a2332]">{stat.value}</p>
                  <p className="text-sm text-[#6a7380] leading-snug">
                    {language === 'zh' ? stat.labelZh : stat.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl border border-[#e8e8e8] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <svg className="w-10 h-10 text-[#c9a961] mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5 4C6.462 4 4 6.462 4 9.5c0 2.165 1.35 4.034 3.263 4.754-.173 1.478-.784 2.577-1.888 3.537-.428.366-.605.946-.413 1.492.192.547.692.917 1.271.917h.005c1.711-.011 3.22-.56 4.365-1.7 1.104-1.1 1.706-2.546 1.706-4.043V9.5C12.309 6.462 11.035 4 9.5 4zm9 0c-3.038 0-5.5 2.462-5.5 5.5 0 2.165 1.35 4.034 3.263 4.754-.173 1.478-.784 2.577-1.888 3.537-.428.366-.605.946-.413 1.492.192.547.692.917 1.271.917h.005c1.711-.011 3.22-.56 4.365-1.7 1.104-1.1 1.706-2.546 1.706-4.043V9.5C21.309 6.462 20.035 4 18.5 4z" />
                </svg>
                <p className="text-[#2a2a2a] leading-relaxed mb-6">
                  {language === 'zh' ? testimonial.quoteZh : testimonial.quoteEn}
                </p>
                <div>
                  <p className="font-semibold text-[#1a2332]">{testimonial.name}</p>
                  <p className="text-sm text-[#6a7380]">
                    {language === 'zh' ? testimonial.treatmentZh : testimonial.treatmentEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WellnessComparisonTable({ treatments }: { treatments: WellnessTreatmentData[] }) {
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
              : 'Compare our wellness pathways to identify the option that best supports your goals.'}
          </p>
        </div>

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
                  <td key={`${treatment.id}-duration`} className="py-5 px-6 text-center text-[#6a7380]">
                    {language === 'zh' ? treatment.durationChinese : treatment.duration}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#e8e8e8] bg-[#fafaf8]">
                <td className="py-5 px-6 font-medium text-[#2a2a2a]">
                  {language === 'zh' ? '恢复期' : 'Downtime'}
                </td>
                {treatments.map((treatment) => (
                  <td key={`${treatment.id}-downtime`} className="py-5 px-6 text-center text-[#6a7380]">
                    {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-5 px-6 font-medium text-[#2a2a2a]">
                  {language === 'zh' ? '疗程次数' : 'Sessions Required'}
                </td>
                {treatments.map((treatment) => (
                  <td key={`${treatment.id}-sessions`} className="py-5 px-6 text-center text-[#6a7380]">
                    {language === 'zh' ? treatment.sessionsChinese : treatment.sessions}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-6">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-2xl font-sans font-semibold mb-6 text-center text-[#1a2332]">
                {language === 'zh' ? treatment.nameChinese : treatment.name}
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: language === 'zh' ? '治疗时长' : 'Treatment Time',
                    value: language === 'zh' ? treatment.durationChinese : treatment.duration,
                  },
                  {
                    label: language === 'zh' ? '恢复期' : 'Downtime',
                    value: language === 'zh' ? treatment.downtimeChinese : treatment.downtime,
                  },
                  {
                    label: language === 'zh' ? '疗程次数' : 'Sessions',
                    value: language === 'zh' ? treatment.sessionsChinese : treatment.sessions,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-[#e8e8e8] pb-3">
                    <span className="font-medium text-[#2a2a2a]">{item.label}</span>
                    <span className="text-[#6a7380]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6a7380] mb-6 leading-relaxed">
            {language === 'zh'
              ? '还不确定哪个疗程适合您？让我们的专家帮您匹配方案。'
              : 'Still unsure which path is right for you? Our clinical team will match you with the ideal protocol.'}
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

function RelatedTreatmentsSection({
  treatments,
  activeTreatmentId,
  onSelect,
}: {
  treatments: WellnessTreatmentData[];
  activeTreatmentId: string;
  onSelect: (id: string) => void;
}) {
  const { language } = useLanguage();
  const related = treatments.filter((t) => t.id !== activeTreatmentId).slice(0, 2);

  return (
    <section className="py-20 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-8 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-sans font-semibold text-[#1a2332] mb-4">
            {language === 'zh' ? '探索更多组合' : 'Related Treatment Paths'}
          </h2>
          <p className="text-[#6a7380] max-w-2xl mx-auto leading-relaxed">
            {language === 'zh'
              ? '根据您的健康目标，我们建议搭配以下疗程，打造完整的个性化计划。'
              : 'Pair your chosen therapy with these complementary services for a complete, personalized plan.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {related.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#c9a961] mb-3 font-semibold">
                  {language === 'zh' ? '推荐组合' : 'Suggested Pairing'}
                </p>
                <h3 className="text-2xl font-semibold text-[#1a2332] mb-3">
                  {language === 'zh' ? treatment.nameChinese : treatment.name}
                </h3>
                <p className="text-[#6a7380] leading-relaxed mb-6">
                  {language === 'zh' ? treatment.taglineChinese : treatment.tagline}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#6a7380]">
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                    </svg>
                    {language === 'zh' ? treatment.durationChinese : treatment.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M6 12h12M6 17h8" />
                    </svg>
                    {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onSelect(treatment.id)}
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a2332] text-white rounded-md font-semibold transition-all hover:-translate-y-0.5"
              >
                {language === 'zh' ? '查看疗程' : 'View Details'}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WellnessContactSection() {
  const { language } = useLanguage();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[13px] tracking-[0.2em] uppercase text-[#c9a961] mb-4 font-semibold">
              {language === 'zh' ? '联系团队' : 'Connect With Our Team'}
            </p>
            <h2 className="text-4xl font-sans font-semibold text-[#1a2332] mb-6">
              {language === 'zh' ? '开启您的个性化健康计划' : 'Start Your Personalized Wellness Plan'}
            </h2>
            <p className="text-[#6a7380] leading-relaxed mb-10">
              {language === 'zh'
                ? '填写表单或致电，我们的礼宾团队将在24小时内与您联系，安排专业咨询。'
                : 'Complete the form or call us directly. Our concierge team will respond within 24 hours to arrange your consultation.'}
            </p>

            <div className="space-y-6">
              {[{
                labelEn: 'Direct Line',
                labelZh: '服务热线',
                detail: '+1 (303) 555-0102',
                href: 'tel:+13035550102',
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
              },
              {
                labelEn: 'Email',
                labelZh: '电子邮件',
                detail: 'hello@medwellness.com',
                href: 'mailto:hello@medwellness.com',
                icon: 'M4 6h16v12H4V6zm0 0l8 6 8-6',
              },
              {
                labelEn: 'Address',
                labelZh: '中心地址',
                detail: '218 Wellness Ave, Denver, CO',
                href: undefined,
                icon: 'M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z',
              }].map((item) => (
                <a
                  key={item.detail}
                  className="flex items-center gap-4"
                  href={item.href}
                >
                  <div className="w-12 h-12 rounded-full bg-[#a8c5b8]/20 flex items-center justify-center text-[#1a2332]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-[#6a7380]">
                      {language === 'zh' ? item.labelZh : item.labelEn}
                    </p>
                    <p className="text-lg font-semibold text-[#1a2332]">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#fafaf8] rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                  {language === 'zh' ? '姓名' : 'Full Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'zh' ? '请输入姓名' : 'Enter your name'}
                  className="w-full border border-[#d0d0d0] rounded-md px-4 py-3 bg-white focus:outline-none focus:border-[#1a2332] focus:ring-1 focus:ring-[#1a2332]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                  {language === 'zh' ? '联系电话' : 'Phone'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={language === 'zh' ? '请输入联系电话' : 'Best number to reach you'}
                  className="w-full border border-[#d0d0d0] rounded-md px-4 py-3 bg-white focus:outline-none focus:border-[#1a2332] focus:ring-1 focus:ring-[#1a2332]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="w-full border border-[#d0d0d0] rounded-md px-4 py-3 bg-white focus:outline-none focus:border-[#1a2332] focus:ring-1 focus:ring-[#1a2332]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                  {language === 'zh' ? '首选疗程' : 'Preferred Treatment'}
                </label>
                <select
                  className="w-full border border-[#d0d0d0] rounded-md px-4 py-3 bg-white focus:outline-none focus:border-[#1a2332] focus:ring-1 focus:ring-[#1a2332]"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    {language === 'zh' ? '请选择' : 'Choose an option'}
                  </option>
                  {wellnessTreatments.map((treatment) => (
                    <option key={treatment.id} value={treatment.id}>
                      {language === 'zh' ? treatment.nameChinese : treatment.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1a2332] mb-2">
                {language === 'zh' ? '健康目标或问题' : 'Goals or Concerns'}
              </label>
              <textarea
                rows={4}
                placeholder={
                  language === 'zh'
                    ? '简要描述您目前的健康状态以及期待的改善'
                    : 'Briefly describe your current health status and desired outcomes'
                }
                className="w-full border border-[#d0d0d0] rounded-md px-4 py-3 bg-white focus:outline-none focus:border-[#1a2332] focus:ring-1 focus:ring-[#1a2332]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1a2332] text-white rounded-md text-base font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {language === 'zh' ? '提交咨询' : 'Submit Request'}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-xs text-[#6a7380]">
              {language === 'zh'
                ? '我们尊重您的隐私，提交信息即表示您同意接收与医疗健康相关的联系。'
                : 'We respect your privacy. By submitting you agree to receive communications related to medical wellness services.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

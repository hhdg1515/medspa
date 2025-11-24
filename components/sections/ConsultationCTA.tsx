'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { siteConfig } from '@/lib/config';

export function ConsultationCTA() {
  const { language } = useLanguage();

  return (
    <section className="relative section-md overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/consultation-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B4A43]/95 to-[#5B4A43]/85" />
      </div>

      {/* Content */}
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Main CTA */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-accent">
                {language === 'zh' ? '免费咨询' : 'Free Consultation'}
              </p>
              <h2 className="text-5xl lg:text-6xl font-serif font-light leading-tight">
                {language === 'zh' ? (
                  <>
                    开始您的
                    <br />
                    <span className="italic font-light">美丽之旅</span>
                  </>
                ) : (
                  <>
                    Begin Your
                    <br />
                    <span className="italic font-light">Transformation Journey</span>
                  </>
                )}
              </h2>
              <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                {language === 'zh'
                  ? '预约免费咨询，我们的专业团队将为您量身定制完美的治疗方案。无论您是想改善面部轮廓、身体塑形，还是整体健康优化，我们都能帮助您实现目标。'
                  : 'Schedule your free consultation and let our expert team create a personalized treatment plan just for you. Whether you want to enhance your facial contours, sculpt your body, or optimize your overall wellness, we can help you achieve your goals.'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#5B4A43] rounded-full text-base font-medium hover:bg-accent hover:text-white transition-colors group"
              >
                <span>{language === 'zh' ? '预约免费咨询' : 'Book Free Consultation'}</span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full text-base font-medium hover:bg-white hover:text-[#5B4A43] transition-colors group"
              >
                <svg
                  className="mr-2 w-5 h-5"
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
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/15 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'zh' ? '专业评估' : 'Expert Assessment'}
              </h3>
              <p className="text-sm text-white/80">
                {language === 'zh'
                  ? '由经验丰富的医生进行全面的面部和身体评估'
                  : 'Comprehensive facial and body evaluation by experienced physicians'}
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/15 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'zh' ? '个性化方案' : 'Personalized Plan'}
              </h3>
              <p className="text-sm text-white/80">
                {language === 'zh'
                  ? '根据您的独特需求和目标定制治疗计划'
                  : 'Customized treatment plan tailored to your unique needs and goals'}
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/15 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'zh' ? '双语服务' : 'Bilingual Care'}
              </h3>
              <p className="text-sm text-white/80">
                {language === 'zh'
                  ? '中英文双语服务，让您倍感舒适和安心'
                  : 'English and Chinese-speaking staff for your comfort and peace of mind'}
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/15 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === 'zh' ? '灵活预约' : 'Flexible Scheduling'}
              </h3>
              <p className="text-sm text-white/80">
                {language === 'zh'
                  ? '提供多种预约时间，配合您繁忙的日程'
                  : 'Multiple appointment times available to fit your busy schedule'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

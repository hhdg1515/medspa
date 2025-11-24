'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { faceTreatments } from '@/lib/faceTreatmentsData';

export function ComparisonTable() {
  const { language } = useLanguage();

  return (
    <section className="section-md bg-background-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-4">
            {language === 'zh' ? '疗程对比' : 'Treatment Comparison'}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {language === 'zh'
              ? '对比我们的三种面部疗程，找到最适合您需求的治疗方案。'
              : 'Compare our three facial treatments to find the perfect solution for your needs.'}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#5B4A43] text-white">
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  {language === 'zh' ? '特性' : 'Feature'}
                </th>
                {faceTreatments.map((treatment) => (
                  <th
                    key={treatment.id}
                    className="py-4 px-6 text-center text-sm font-semibold uppercase tracking-wider"
                  >
                    {language === 'zh' ? treatment.nameChinese : treatment.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Treatment Time */}
              <tr className="border-b border-border">
                <td className="py-4 px-6 font-medium text-text-primary">
                  {language === 'zh' ? '治疗时长' : 'Treatment Time'}
                </td>
                {faceTreatments.map((treatment) => (
                  <td key={treatment.id} className="py-4 px-6 text-center text-text-secondary">
                    {language === 'zh' ? treatment.durationChinese : treatment.duration}
                  </td>
                ))}
              </tr>

              {/* Downtime */}
              <tr className="border-b border-border bg-background-main">
                <td className="py-4 px-6 font-medium text-text-primary">
                  {language === 'zh' ? '恢复期' : 'Downtime'}
                </td>
                {faceTreatments.map((treatment) => (
                  <td key={treatment.id} className="py-4 px-6 text-center text-text-secondary">
                    {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
                  </td>
                ))}
              </tr>

              {/* Sessions */}
              <tr className="border-b border-border">
                <td className="py-4 px-6 font-medium text-text-primary">
                  {language === 'zh' ? '疗程次数' : 'Sessions Required'}
                </td>
                {faceTreatments.map((treatment) => (
                  <td key={treatment.id} className="py-4 px-6 text-center text-text-secondary">
                    {language === 'zh' ? treatment.sessionsChinese : treatment.sessions}
                  </td>
                ))}
              </tr>

              {/* Primary Use */}
              <tr className="border-b border-border bg-background-main">
                <td className="py-4 px-6 font-medium text-text-primary">
                  {language === 'zh' ? '主要用途' : 'Primary Use'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '减少皱纹' : 'Wrinkle Reduction'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '容量恢复' : 'Volume Restoration'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '减少脂肪' : 'Fat Reduction'}
                </td>
              </tr>

              {/* Results Duration */}
              <tr className="border-b border-border">
                <td className="py-4 px-6 font-medium text-text-primary">
                  {language === 'zh' ? '效果持续' : 'Results Last'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '3-4个月' : '3-4 months'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '6-18个月' : '6-18 months'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '永久' : 'Permanent'}
                </td>
              </tr>

              {/* Best For */}
              <tr className="bg-background-main">
                <td className="py-4 px-6 font-medium text-text-primary">
                  {language === 'zh' ? '最适合' : 'Best For'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '动态皱纹' : 'Dynamic wrinkles'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '容量流失' : 'Volume loss'}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary">
                  {language === 'zh' ? '双下巴' : 'Double chin'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {faceTreatments.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-serif font-light mb-6 text-center text-text-primary">
                {language === 'zh' ? treatment.nameChinese : treatment.name}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-medium text-text-primary">
                    {language === 'zh' ? '治疗时长' : 'Treatment Time'}
                  </span>
                  <span className="text-text-secondary">
                    {language === 'zh' ? treatment.durationChinese : treatment.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-medium text-text-primary">
                    {language === 'zh' ? '恢复期' : 'Downtime'}
                  </span>
                  <span className="text-text-secondary">
                    {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="font-medium text-text-primary">
                    {language === 'zh' ? '疗程次数' : 'Sessions'}
                  </span>
                  <span className="text-text-secondary">
                    {language === 'zh' ? treatment.sessionsChinese : treatment.sessions}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text-primary">
                    {language === 'zh' ? '主要用途' : 'Primary Use'}
                  </span>
                  <span className="text-text-secondary">
                    {treatment.id === 'botox'
                      ? language === 'zh'
                        ? '减少皱纹'
                        : 'Wrinkle Reduction'
                      : treatment.id === 'dermal-filler'
                      ? language === 'zh'
                        ? '容量恢复'
                        : 'Volume Restoration'
                      : language === 'zh'
                      ? '减少脂肪'
                      : 'Fat Reduction'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">
            {language === 'zh'
              ? '还不确定哪个疗程适合您？让我们的专家帮您选择。'
              : 'Still not sure which treatment is right for you? Let our experts help you choose.'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B4A43] text-white rounded-full text-base font-medium hover:bg-accent transition-colors"
          >
            <span>{language === 'zh' ? '免费咨询' : 'Free Consultation'}</span>
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
    </section>
  );
}

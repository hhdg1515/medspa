'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { ContentCard } from '@/components/ContentCard';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { useLanguage } from '@/lib/LanguageContext';
import { faceTreatments } from '@/lib/faceTreatmentsData';

const overviewHighlights = [
  {
    titleEn: 'Personal consultations',
    titleZh: '一对一评估',
    descriptionEn: 'We pair clinical expertise with calm, attentive visits focused on your skin goals.',
    descriptionZh: '结合医学经验与温和关怀，专注倾听您的肌肤目标，提供安心建议。',
  },
  {
    titleEn: 'Tailored treatment plans',
    titleZh: '定制疗程方案',
    descriptionEn: 'Precise dosing and sequencing to keep results balanced, subtle, and harmonious.',
    descriptionZh: '通过精准剂量与步骤安排，塑造匀称、自然的效果。',
  },
  {
    titleEn: 'Comfort-first environment',
    titleZh: '舒适环境优先',
    descriptionEn: 'Gentle techniques, thoughtful aftercare, and clear guidance before every visit.',
    descriptionZh: '温和手法、细致术后指导，在每次到访前都为您说明清楚。',
  },
];

const faqItems = [
  {
    questionEn: 'How do I know which facial treatment is right for me?',
    questionZh: '我该如何判断哪种面部疗程适合自己？',
    answerEn:
      'Your provider will review your skin history, expression patterns, and comfort level, then recommend a paced plan that matches your goals.',
    answerZh: '医生会了解您的皮肤状况、表情习惯与舒适度需求，再给出符合目标的个性化节奏与方案。',
  },
  {
    questionEn: 'What does recovery usually look like?',
    questionZh: '一般恢复期是什么样的？',
    answerEn:
      'Most visits have little to no downtime. You will receive simple aftercare steps to minimize swelling and keep skin calm.',
    answerZh: '多数疗程几乎无需恢复，仅需遵循简易护理建议，帮助减轻肿胀并让肌肤保持舒缓。',
  },
  {
    questionEn: 'Can I combine treatments in one visit?',
    questionZh: '一次就诊可以组合多个项目吗？',
    answerEn:
      'Yes. We can thoughtfully pair injectables or skin therapies in the same session if it keeps results balanced and safe.',
    answerZh: '可以。在安全与平衡为前提下，我们会帮您组合注射或皮肤疗程，让效果更协调。',
  },
];

const resultMoments = [
  {
    titleEn: 'Refreshed glow',
    titleZh: '焕活光采',
    descriptionEn: 'Soft lift and smoother texture that still looks entirely like you.',
    descriptionZh: '轻盈提亮与细腻肤感，保持原本的自然气质。',
  },
  {
    titleEn: 'Confident profile',
    titleZh: '立体轮廓',
    descriptionEn: 'Balanced volume and contour so every angle feels effortless.',
    descriptionZh: '均衡的容量与线条比例，让每个角度都更从容。',
  },
  {
    titleEn: 'Calm skin days',
    titleZh: '安稳肌肤日常',
    descriptionEn: 'Gentle care plans designed to keep skin comfort steady between visits.',
    descriptionZh: '温和护理方案，帮助您在疗程间也维持稳定舒适的肌肤状态。',
  },
];

export default function FaceTreatmentsPage() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="section-md bg-gradient-to-b from-background-dark via-background-dark/80 to-background-main">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm tracking-[0.2em] uppercase text-accent">
                  {language === 'zh' ? '面部疗程' : 'Facial Treatments'}
                </p>
                <h1 className="text-5xl lg:text-6xl font-serif font-light leading-tight text-white">
                  {language === 'zh'
                    ? '柔和提升，回归本真的光采。'
                    : 'Soft rejuvenation that still feels like you.'}
                </h1>
                <p className="text-lg text-white/80 max-w-2xl">
                  {language === 'zh'
                    ? '以安稳、细致的方式，让肌肤纹理与轮廓更和谐，同时尊重您的独特气质。'
                    : 'A calm, attentive approach to smoothing lines, restoring balance, and preserving what is uniquely you.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/treatments/wellness#contact" variant="primary">
                    {language === 'zh' ? '预约面部咨询' : 'Book a facial consult'}
                  </Button>
                  <Button href="tel:+13035550102" variant="secondary">
                    {language === 'zh' ? '直接联系团队' : 'Call our team'}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ImagePlaceholder
                  aspectClass="aspect-[3/4]"
                  className="w-full"
                  label={language === 'zh' ? '柔和色调的人像占位图' : 'Portrait space reserved for hero imagery'}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-md bg-background-main">
          <div className="container-custom space-y-12">
            <div className="max-w-4xl space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-accent">
                {language === 'zh' ? '疗程概览' : 'Overview'}
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-text-primary">
                {language === 'zh' ? '细致呵护，稳稳的安心。' : 'Gentle care with reassuring detail.'}
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl">
                {language === 'zh'
                  ? '无论是肉毒杆菌、真皮填充还是光滑肤质疗程，我们都会以循序渐进的方式规划步骤，让每一次变化都自然、可控。'
                  : 'From neuromodulators to fillers and skin-smoothing therapies, we pace each step so every change feels natural and measured.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {overviewHighlights.map((item) => (
                <ContentCard key={item.titleEn} padding="md" className="h-full">
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-text-primary">
                      {language === 'zh' ? item.titleZh : item.titleEn}
                    </h3>
                    <p className="text-body text-text-secondary">
                      {language === 'zh' ? item.descriptionZh : item.descriptionEn}
                    </p>
                  </div>
                </ContentCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-md bg-background-dark/40">
          <div className="container-custom space-y-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-accent mb-3">
                  {language === 'zh' ? '疗程选择' : 'Treatment options'}
                </p>
                <h2 className="text-4xl font-serif font-light text-text-primary">
                  {language === 'zh' ? '按您的节奏选择项目' : 'Choose the path that fits your pace'}
                </h2>
              </div>
              <Button href="/treatments/wellness#contact" variant="secondary">
                {language === 'zh' ? '与专家交流' : 'Talk with a provider'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faceTreatments.map((treatment, index) => (
                <ContentCard key={treatment.id} className="flex flex-col gap-5">
                  <ImagePlaceholder
                    aspectClass="aspect-[4/3]"
                    accent={index % 2 === 0 ? 'warm' : 'cool'}
                    label={
                      language === 'zh'
                        ? `${treatment.nameChinese} 图像占位`
                        : `${treatment.name} image placeholder`
                    }
                  />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-text-primary">
                      {language === 'zh' ? treatment.nameChinese : treatment.name}
                    </h3>
                    <p className="text-text-secondary text-base">
                      {language === 'zh' ? treatment.taglineChinese : treatment.tagline}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 border border-border/70">
                        <span className="text-accent">⏱</span>
                        {language === 'zh' ? treatment.durationChinese : treatment.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 border border-border/70">
                        <span className="text-accent">🌿</span>
                        {language === 'zh' ? treatment.downtimeChinese : treatment.downtime}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button href="/treatments/wellness#contact" variant="primary" className="w-full">
                      {language === 'zh' ? '预约此疗程' : 'Book this treatment'}
                    </Button>
                  </div>
                </ContentCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section-md bg-background-main">
          <div className="container-custom space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-accent">
                {language === 'zh' ? '预期效果' : 'Results you can look forward to'}
              </p>
              <h2 className="text-4xl font-serif font-light text-text-primary">
                {language === 'zh' ? '自然、细腻、耐看的改变。' : 'Natural, refined, and quietly confident.'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resultMoments.map((result, index) => (
                <div key={result.titleEn} className="space-y-4">
                  <ImagePlaceholder
                    aspectClass="aspect-[3/2]"
                    accent={index === 1 ? 'cool' : 'warm'}
                    label={language === 'zh' ? '温和渐变占位图' : 'Soft gradient placeholder'}
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-text-primary">
                      {language === 'zh' ? result.titleZh : result.titleEn}
                    </h3>
                    <p className="text-text-secondary">
                      {language === 'zh' ? result.descriptionZh : result.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-md bg-gradient-to-r from-[#efe7e0] via-[#e3d8ce] to-[#d6c8bc]">
          <div className="container-custom">
            <ContentCard className="bg-white/80 backdrop-blur p-10 lg:p-12 flex flex-col lg:flex-row gap-8 lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-accent">
                  {language === 'zh' ? '下一步' : 'Next step'}
                </p>
                <h2 className="text-4xl font-serif font-light text-text-primary">
                  {language === 'zh' ? '准备开始温和的改变了吗？' : 'Ready for a calm, confident refresh?'}
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl">
                  {language === 'zh'
                    ? '与我们的医疗团队沟通，制定专属的面部疗程计划。预约、电话或邮件都可以轻松开始。'
                    : 'Speak with our medical team to craft a plan tailored to your facial goals. Book online, call, or email to get started with ease.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
                <Button href="/treatments/wellness#contact" variant="primary" className="flex-1">
                  {language === 'zh' ? '预约咨询' : 'Schedule a consult'}
                </Button>
                <Button href="mailto:hello@medwellness.com" variant="secondary" className="flex-1 whitespace-nowrap">
                  {language === 'zh' ? '写信给我们' : 'Email our clinic'}
                </Button>
              </div>
            </ContentCard>
          </div>
        </section>

        <section className="section-md bg-background-main">
          <div className="container-custom space-y-10">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm uppercase tracking-[0.18em] text-accent">
                {language === 'zh' ? '常见问题' : 'Frequently asked questions'}
              </p>
              <h2 className="text-4xl font-serif font-light text-text-primary">
                {language === 'zh' ? '在安心前进之前，先了解这些。' : 'Know what to expect before you begin.'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item) => (
                <ContentCard key={item.questionEn} padding="md" className="space-y-3">
                  <h3 className="text-xl font-serif text-text-primary">
                    {language === 'zh' ? item.questionZh : item.questionEn}
                  </h3>
                  <p className="text-text-secondary">
                    {language === 'zh' ? item.answerZh : item.answerEn}
                  </p>
                </ContentCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

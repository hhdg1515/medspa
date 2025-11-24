'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OurProcess } from '@/components/sections/OurProcess';
import { OurValues } from '@/components/sections/OurValues';
import { useLanguage } from '@/lib/LanguageContext';

// "Caring For the Whole Person" Section
function HolisticApproach() {
  const { language } = useLanguage();

  return (
    <section className="section-md bg-[#5B4A43] text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-8">
            {language === 'zh' ? '全人关怀' : 'Caring For the Whole Person'}
          </h2>
          <p className="text-lg leading-relaxed text-white/90 mb-6">
            {language === 'zh'
              ? '您的健康和幸福是相互关联的——从身体和性层面到心理和情感层面。这就是为什么我们团队采取全面的方法来照顾患者,通过增强幸福感的各个方面,帮助人们成为最好的自己。'
              : 'Your health and wellness are interconnected—from physical and sexual to mental and emotional. That\'s why the team at our clinic takes a comprehensive approach to patient care, helping people become the best version of themselves by enhancing every aspect of their well-being.'}
          </p>
          <p className="text-base leading-relaxed text-white/80">
            {language === 'zh'
              ? '为了确保患者处于最佳状态,我们的诊所提供最高质量的治疗、技术和专家。'
              : 'To ensure patients are at their best, our wellness center offers access to the highest quality treatments, technologies, and specialists available.'}
          </p>
        </div>
      </div>
    </section>
  );
}

// "Our History" Section
function OurHistory() {
  const { language } = useLanguage();

  return (
    <section className="section-md bg-background-main">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="space-y-6">
            <div className="relative h-72 bg-background-dark rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/team-consultation.jpg')",
                }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em] uppercase text-accent">
              {language === 'zh' ? '我们的历史' : 'Our History'}
            </h3>
            <h2 className="text-4xl lg:text-5xl font-serif font-light">
              {language === 'zh' ? '成立于2011年' : 'Founded in 2011'}
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                {language === 'zh'
                  ? '我们诊所成立于2011年,强调预防保健和功能美学,并解决健康和健康问题的根本原因。'
                  : 'Our clinic was founded in 2011 with an emphasis on preventative health and functional aesthetics, plus addressing the root causes of health and wellness concerns.'}
              </p>
              <p>
                {language === 'zh'
                  ? '从第一天起,我们就帮助全市的人们克服了美学和身体健康挑战。这种方法使成千上万的患者取得持续成功并发挥其全部潜力。'
                  : 'From day one, we\'ve helped people across Denver and surrounding areas overcome both aesthetic and physical health challenges. The approach has allowed thousands of patients to achieve sustained success and reach their full potential.'}
              </p>
              <p>
                {language === 'zh'
                  ? '我们的使命是以安全、有效和尊重的方式集成所有技术、治疗模式,以培养更长寿、更健康、更快乐的生活。'
                  : 'It is our mission to integrate the best of all technologies, therapeutic modalities in a safe, effective and respectful manner to nurture longer, healthier, happier lives.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "Our Breadth of Services" Section
function BreadthOfServices() {
  const { language } = useLanguage();

  return (
    <section className="section-md bg-background-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-center mb-6">
            {language === 'zh' ? '我们的服务范围' : 'Our Breadth of Services'}
          </h2>
          <p className="text-xl font-serif italic text-center text-text-secondary mb-12">
            {language === 'zh'
              ? '我们通过功能美学和综合医学优先考虑内外健康的平衡。'
              : 'We prioritize the balance of inner and outer health through functional aesthetics and integrative medicine.'}
          </p>

          <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
            <p>
              {language === 'zh'
                ? '我们的执业医师在传统医学领域拥有多年的经验,为您提供最佳的护理方式——将您视为一个完整的人。'
                : 'Residing in our area, our wellness clinic endeavors to go above and beyond traditional therapies and methodology. Our practitioners possess years of experience within the traditional medical field to inform the best modality of care for you—considering you as a whole person.'}
            </p>
            <p>
              {language === 'zh'
                ? '我们相信,当我们了解身心灵的相互联系时,可以实现更好的护理。'
                : 'We believe that better care is achieved when we understand the interconnectedness of mind, spirit, and body.'}
            </p>
            <p>
              {language === 'zh'
                ? '这就是为什么我们了解每一位患者,这就是为什么我们提供广泛的服务——健康不仅仅是单一的治疗或单一的感觉。它始于理解您和您的提供者之间的关系。'
                : 'That\'s why we get to know every patient, and that\'s why we offer a wide range of services—wellness is more than a single treatment or a single feeling. It\'s something that starts with an understanding relationship between you and your provider.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// "Meet the Team" Section
function MeetTheTeam() {
  const { language } = useLanguage();

  return (
    <section className="section-md bg-background-main">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 bg-background-dark rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/team-member.jpg')",
              }}
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-light">
              {language === 'zh' ? '认识我们的团队' : 'Meet the Aria Health Integrative Team'}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {language === 'zh'
                ? '我们团队的每一位成员都致力于您的成功。从前台工作人员到训练有素的多学科提供者以及介于两者之间的所有人员,我们的多样化专业知识将帮助您优化护理并帮助您成为最好的自己。'
                : 'Every member of our team is committed to your success. From our front desk staff to our highly trained, multi-disciplined providers and everywhere in between, our diversity of expertise will help us optimize your care and help you become the best version of yourself.'}
            </p>
            <div className="pt-4">
              <a
                href="/team"
                className="inline-flex items-center gap-2 text-accent hover:text-text-primary transition-colors group"
              >
                <span className="font-medium uppercase tracking-wider text-sm">
                  {language === 'zh' ? '查看我们的团队' : 'OUR TEAM'}
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HolisticApproach />
        <OurHistory />
        <OurProcess />
        <BreadthOfServices />
        <OurValues />
        <MeetTheTeam />
      </main>
      <Footer />
    </>
  );
}

'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';

export default function FaceSlimmingPage() {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-md bg-background-main">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-accent mb-2">
                    {language === 'zh' ? '瘦脸针 · Face Slimming Injections' : 'Face Slimming Injections'}
                  </p>
                </div>

                <h1 className="text-h1">
                  {language === 'zh'
                    ? '轮廓更干净，但仍然是你的脸。'
                    : 'A slimmer contour that still looks like you.'}
                </h1>

                <p className="text-body text-text-secondary">
                  {language === 'zh'
                    ? '通过针对性放松部分面部肌肉，在不过度改变五官的前提下，让下颌线与侧脸轮廓更利落。治疗是否适合你，将由医生在评估后决定。'
                    : 'Through targeted relaxation of certain facial muscles, achieve a more defined jawline and profile without dramatically changing your features. Whether this treatment is right for you will be determined by a physician after evaluation.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="#contact-form">
                    {language === 'zh' ? '预约瘦脸针咨询' : 'Book Face Slimming Consultation'}
                  </Button>
                  <Button variant="secondary" href="/treatments">
                    {language === 'zh' ? '返回所有项目' : 'Back to All Treatments'}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="w-full h-96 bg-background-dark rounded-lg flex items-center justify-center">
                  <span className="text-text-secondary">[Hero Image Placeholder]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="section-md bg-background-dark">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-80 bg-background-main rounded-lg flex items-center justify-center">
                  <span className="text-text-secondary">[Illustration Placeholder]</span>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-h2">
                  {language === 'zh' ? '瘦脸针是什么？' : 'What is face slimming?'}
                </h2>

                <div className="space-y-4 text-body text-text-secondary">
                  <p>
                    {language === 'zh'
                      ? '日常说的"瘦脸针"，通常是指通过注射特定药物，暂时性地放松面部某些肌肉，使其在一段时间内体积感略有减弱，从而让脸部轮廓看起来更精致、线条更干净。'
                      : 'Commonly known as "face slimming injections," this treatment involves injecting specific medications to temporarily relax certain facial muscles, reducing their volume over time and creating a more refined, cleaner facial contour.'}
                  </p>

                  <p>
                    {language === 'zh'
                      ? '在本诊所，瘦脸针不会被当作一个"所有人都适合"的标准项目。我们会根据你的面部结构、肌肉用力习惯和整体比例，评估是否适合进行这种治疗，以及采用何种剂量与频率。'
                      : 'At our clinic, face slimming is not treated as a one-size-fits-all procedure. We evaluate your facial structure, muscle usage patterns, and overall proportions to determine suitability, dosage, and frequency.'}
                  </p>

                  <p className="text-sm italic">
                    {language === 'zh'
                      ? '本页面内容仅用于一般性介绍，不构成对任何具体医疗决策的建议。'
                      : 'This content is for general information purposes only and does not constitute specific medical advice.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-md bg-background-main">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 mb-8 text-center">
              {language === 'zh' ? '谁可能适合瘦脸针？' : 'Who might benefit from face slimming?'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-h3 mb-4 text-accent">
                  {language === 'zh' ? '可能适合的情况' : 'May Be Suitable If:'}
                </h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>
                      {language === 'zh'
                        ? '你主要在意咬肌较突出，正面或侧面看觉得下颌偏宽'
                        : 'You\'re concerned about prominent masseter muscles making your jawline appear wide'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>
                      {language === 'zh'
                        ? '你希望轮廓更干净，但不想通过手术方式改变骨骼结构'
                        : 'You want a cleaner contour without surgical bone structure changes'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>
                      {language === 'zh'
                        ? '你可以接受效果是逐渐显现、维持时间有限的方式'
                        : 'You understand results are gradual and temporary'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h3 mb-4 text-red-600">
                  {language === 'zh' ? '需谨慎或暂不适合' : 'Caution or Not Suitable:'}
                </h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    <span>
                      {language === 'zh'
                        ? '有某些神经肌肉相关疾病史'
                        : 'History of neuromuscular conditions'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    <span>
                      {language === 'zh'
                        ? '正在怀孕或处于哺乳期'
                        : 'Currently pregnant or breastfeeding'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">!</span>
                    <span>
                      {language === 'zh'
                        ? '对相关药物有过敏或严重不良反应史'
                        : 'History of allergies or adverse reactions to similar medications'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-center text-body text-text-secondary italic">
              {language === 'zh'
                ? '是否适合瘦脸针，只能在充分了解你的病史、用药情况、生活方式以及面部评估之后，由持牌医疗专业人员给出个体化建议。'
                : 'Suitability can only be determined by a licensed medical professional after comprehensive review of your medical history, medications, lifestyle, and facial assessment.'}
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-md bg-background-dark">
          <div className="container-custom max-w-5xl">
            <h2 className="text-h2 mb-12 text-center">
              {language === 'zh' ? '治疗前、中、后，你可以预期什么？' : 'What to expect before, during, and after'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: '1',
                  titleZh: '诊前评估',
                  titleEn: 'Consultation & Assessment',
                  descZh: '我们会先了解你的主要诉求、既往病史和用药情况，并对面部肌肉、轮廓比例和表情习惯做细致评估。',
                  descEn: 'We\'ll understand your concerns, review medical history, and carefully assess facial muscles, proportions, and expressions.',
                },
                {
                  number: '2',
                  titleZh: '治疗当日',
                  titleEn: 'Treatment Day',
                  descZh: '在确认适合且你也充分理解风险与预期之后，由专业人员在医生监督下完成注射治疗。',
                  descEn: 'After confirming suitability and full understanding, trained professionals perform injections under physician supervision.',
                },
                {
                  number: '3',
                  titleZh: '恢复与日常',
                  titleEn: 'Recovery',
                  descZh: '多数人可以很快恢复日常工作和社交活动。少数人可能会在局部出现短暂红肿、酸胀或轻微淤青。',
                  descEn: 'Most can quickly resume normal activities. Some may experience temporary redness, swelling, or minor bruising.',
                },
                {
                  number: '4',
                  titleZh: '效果显现与维持',
                  titleEn: 'Results & Maintenance',
                  descZh: '效果通常会在一段时间内逐渐显现，并维持一段周期，具体因个体差异、用量与肌肉特性而不同。',
                  descEn: 'Results gradually appear and last for a period, varying based on individual factors, dosage, and muscle characteristics.',
                },
              ].map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent text-background-main flex items-center justify-center text-2xl font-semibold">
                    {step.number}
                  </div>
                  <h3 className="text-h3">
                    {language === 'zh' ? step.titleZh : step.titleEn}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {language === 'zh' ? step.descZh : step.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Risks */}
        <section className="section-md bg-background-main">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 mb-8 text-center">
              {language === 'zh' ? '安全与可能风险' : 'Safety & Potential Risks'}
            </h2>

            <div className="card space-y-6">
              <p className="text-body text-text-secondary">
                {language === 'zh'
                  ? '与所有注射类医疗程序一样，瘦脸针也存在潜在风险和不确定性。在本诊所，我们将安全放在首位：'
                  : 'Like all injectable medical procedures, face slimming carries potential risks and uncertainties. At our clinic, safety is our top priority:'}
              </p>

              <ul className="space-y-3 text-body text-text-secondary">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    {language === 'zh'
                      ? '所有注射均由经培训的专业人员在医生监督下进行'
                      : 'All injections performed by trained professionals under physician supervision'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    {language === 'zh'
                      ? '治疗前会与你充分沟通适应症、禁忌人群和常见不适'
                      : 'Comprehensive pre-treatment discussion of indications, contraindications, and common side effects'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>
                    {language === 'zh'
                      ? '我们不会出于"赶流行"或者"做活动"的理由，去推荐不适合你的治疗'
                      : 'We never recommend unsuitable treatments based on trends or promotions'}
                  </span>
                </li>
              </ul>

              <div className="border-t border-border pt-6">
                <h4 className="text-h3 mb-4">
                  {language === 'zh' ? '可能出现的轻微不适包括：' : 'Possible Minor Side Effects:'}
                </h4>
                <p className="text-body text-text-secondary">
                  {language === 'zh'
                    ? '注射部位短暂红肿、酸胀或轻微疼痛感；局部淤青或紧绷感。这些情况多数会在接下来几天至一段时间内逐渐缓解。'
                    : 'Brief redness, swelling, or mild discomfort at injection sites; localized bruising or tightness. Most symptoms gradually resolve within days.'}
                </p>
              </div>

              <p className="text-sm text-text-secondary italic border-t border-border pt-6">
                {language === 'zh'
                  ? '本页面内容无法穷举所有情况，也不能替代专业医疗建议。如出现任何让你担心或不确定的症状，请及时联系医疗专业人员。'
                  : 'This content cannot cover all scenarios and does not replace professional medical advice. Contact a medical professional if you experience concerning symptoms.'}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-md bg-background-dark">
          <div className="container-custom max-w-4xl">
            <h2 className="text-h2 mb-12 text-center">
              {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
            </h2>

            <div className="space-y-4">
              {[
                {
                  questionZh: '注射瘦脸针会很痛吗？',
                  questionEn: 'Is face slimming injection painful?',
                  answerZh: '大部分人觉得不适感是可以接受的，通常是短暂的针刺与轻微酸胀。具体感受因人而异。如有需要，我们可以在治疗前采取一定的镇静或舒缓措施。',
                  answerEn: 'Most find the discomfort tolerable - typically brief needle sensation and mild aching. Experience varies by individual. We can provide calming measures if needed.',
                },
                {
                  questionZh: '多久能看到效果？',
                  questionEn: 'How soon will I see results?',
                  answerZh: '效果通常是逐渐显现的，而不是"当天立刻完全变小"。具体起效时间会因个体差异、用量和肌肉特性而不同。在面诊时，我们会结合你的情况给出更贴近现实的预期范围。',
                  answerEn: 'Results appear gradually, not immediately. Timing varies based on individual factors, dosage, and muscle characteristics. We\'ll provide realistic expectations during consultation.',
                },
                {
                  questionZh: '效果能维持多久？需要多久复做一次？',
                  questionEn: 'How long do results last? How often do I need treatments?',
                  answerZh: '维持时间会受到多种因素影响，包括个人代谢、生活方式、用量和设计方案等。因此我们不会承诺统一、固定的维持时间。在随访时，我们会根据你的反馈和实际效果一起讨论。',
                  answerEn: 'Duration varies based on metabolism, lifestyle, dosage, and treatment plan. We don\'t promise fixed timeframes. We\'ll discuss based on your feedback and results during follow-up.',
                },
                {
                  questionZh: '价格是多少？',
                  questionEn: 'What is the pricing?',
                  answerZh: '瘦脸针的费用取决于所需用量、整体设计和是否与其他项目联合规划。我们在首次咨询中会提供清晰透明的价格范围。我们不使用"钓鱼价"或隐藏收费。',
                  answerEn: 'Cost depends on required dosage, overall design, and whether combined with other treatments. We provide clear, transparent pricing during initial consultation. No hidden fees or bait pricing.',
                },
              ].map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-start"
                  >
                    <h3 className="text-h3 pr-4">
                      {language === 'zh' ? faq.questionZh : faq.questionEn}
                    </h3>
                    <span className="text-2xl text-accent flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 text-body text-text-secondary">
                      {language === 'zh' ? faq.answerZh : faq.answerEn}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact-form" className="section-md bg-background-main">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-h2 mb-6">
              {language === 'zh' ? '想知道瘦脸针是否适合你？' : 'Want to know if face slimming is right for you?'}
            </h2>

            <p className="text-body text-text-secondary mb-8">
              {language === 'zh'
                ? '有些人是因为上镜工作需要，有些人只是希望自己在照片里更精神一点。无论你的起点是什么，判断是否适合瘦脸针，都应该从一次负责任的咨询开始。'
                : 'Whether for on-camera work or simply wanting to look more refreshed in photos, determining suitability should start with a responsible consultation.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/#contact">
                {language === 'zh' ? '预约咨询' : 'Book Consultation'}
              </Button>
              <Button variant="secondary" href="tel:XXXXXXXXXX">
                {language === 'zh' ? '直接致电' : 'Call Now'}
              </Button>
            </div>

            <p className="mt-8 text-sm text-text-secondary italic">
              {language === 'zh'
                ? '本页面信息仅为一般介绍，不构成个体化医疗建议。任何治疗前，请务必与持牌医疗专业人员进行一对一评估与沟通。'
                : 'This information is for general purposes only and does not constitute individualized medical advice. Always consult with a licensed medical professional before any treatment.'}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

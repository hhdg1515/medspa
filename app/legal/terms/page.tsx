'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsOfServicePage() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-background-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              {language === 'en' ? 'Terms of Service' : '服务条款'}
            </h1>
            <p className="text-text-secondary">
              {language === 'en'
                ? 'Effective Date: January 1, 2025'
                : '生效日期：2025年1月1日'}
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">

              {language === 'en' ? (
                // English Version
                <>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-text-secondary leading-relaxed">
                      By scheduling an appointment, receiving treatments, or utilizing any services provided by our medical aesthetics practice
                      (referred to as "we," "us," or "our clinic"), you acknowledge that you have reviewed, understood, and agree to be bound
                      by these Terms of Service. If you do not agree with any portion of these terms, please refrain from using our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">2. Services Provided</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      Our clinic offers physician-supervised medical aesthetic procedures, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Injectable treatments for facial contouring and slimming</li>
                      <li>Medical weight management programs</li>
                      <li>Anti-aging and cosmetic enhancement procedures</li>
                      <li>Skin rejuvenation therapies</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      All treatments are performed by licensed healthcare professionals under the supervision of our medical director.
                      A thorough consultation and medical assessment are required prior to any procedure.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">3. Appointment Scheduling and Cancellation</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Scheduling:</strong> Appointments may be scheduled by phone, email, or through our online booking system.
                      We recommend booking in advance to secure your preferred time slot.
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Cancellation Policy:</strong> We understand that circumstances change. We request at least 24 hours advance notice
                      for cancellations or rescheduling. Appointments cancelled with less than 24 hours notice or missed appointments (no-shows)
                      may be subject to a cancellation fee of up to 50% of the scheduled service cost.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>Late Arrivals:</strong> Please arrive on time for your appointment. Arrivals more than 15 minutes late may need
                      to be rescheduled, and our standard cancellation policy will apply.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">4. Payment Terms</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      Payment is due at the time of service unless alternative arrangements have been made in advance. We accept cash,
                      major credit cards, and approved financing options.
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Pricing:</strong> All prices are subject to change without prior notice. The price quoted at the time of
                      consultation will be honored for services rendered within 30 days.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>Packages and Promotions:</strong> Special offers, package deals, and promotional pricing are subject to
                      specific terms and conditions, which will be clearly communicated at the time of purchase.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">5. Medical Consultation and Informed Consent</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      All patients are required to undergo a comprehensive medical consultation before receiving any aesthetic treatment.
                      During this consultation, we will:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Review your complete medical history and current medications</li>
                      <li>Discuss your aesthetic goals and expectations</li>
                      <li>Explain the recommended treatment options, potential risks, and expected outcomes</li>
                      <li>Answer any questions you may have</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      You will be required to sign an informed consent form acknowledging that you understand the nature of the procedure,
                      its risks, benefits, and alternatives. You have the right to decline any recommended treatment.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">6. Treatment Outcomes and Disclaimers</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Individual Results:</strong> While we strive to deliver excellent outcomes, aesthetic treatment results vary
                      based on individual factors including skin type, age, lifestyle, metabolism, and adherence to post-treatment care instructions.
                      We cannot guarantee specific results or that you will be completely satisfied with your outcome.
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Risks and Complications:</strong> All medical procedures carry inherent risks. Common side effects and potential
                      complications will be discussed during your consultation. You acknowledge that you have been informed of these risks and
                      accept them by proceeding with treatment.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>Not a Substitute for Medical Care:</strong> Our services are elective cosmetic procedures and are not intended
                      to diagnose, treat, cure, or prevent any disease. They should not be considered a substitute for professional medical advice
                      or treatment.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">7. Patient Responsibilities</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      As a patient, you agree to:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Provide complete and accurate medical information, including all medications and supplements you are taking</li>
                      <li>Disclose any allergies, previous aesthetic treatments, or medical conditions</li>
                      <li>Follow all pre-treatment and post-treatment care instructions provided by our medical team</li>
                      <li>Attend all recommended follow-up appointments</li>
                      <li>Contact our office immediately if you experience any concerning symptoms or adverse reactions</li>
                      <li>Refrain from receiving similar treatments from other providers during your treatment plan without consulting us first</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">8. Photography and Documentation</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      For medical documentation and quality assurance purposes, we may take clinical photographs before and after your treatments.
                      These images become part of your medical record and are protected under HIPAA regulations.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      We will never use your photographs for marketing, social media, or promotional purposes without obtaining your separate,
                      explicit written consent through a photo release authorization form.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">9. Confidentiality and Privacy</h2>
                    <p className="text-text-secondary leading-relaxed">
                      We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance
                      with the Health Insurance Portability and Accountability Act (HIPAA) and California state privacy laws, including the
                      California Consumer Privacy Act (CCPA). Please refer to our Privacy Policy for detailed information about how we collect,
                      use, and protect your personal and medical information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">10. Intellectual Property</h2>
                    <p className="text-text-secondary leading-relaxed">
                      All content on our website, including text, graphics, logos, images, and treatment protocols, is the exclusive property
                      of our practice and is protected by United States and international copyright, trademark, and other intellectual property laws.
                      Unauthorized use, reproduction, or distribution of this content is strictly prohibited.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">11. Limitation of Liability</h2>
                    <p className="text-text-secondary leading-relaxed">
                      To the maximum extent permitted by California law, our liability for any claims arising from your use of our services is
                      limited to the amount you paid for the specific service giving rise to the claim. We shall not be liable for any indirect,
                      incidental, consequential, or punitive damages, including but not limited to lost income, emotional distress, or loss of
                      business opportunities.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">12. Dispute Resolution</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Governing Law:</strong> These Terms of Service are governed by and construed in accordance with the laws of the
                      State of California, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>Arbitration:</strong> Any disputes arising from or relating to these terms or the services provided shall be resolved
                      through binding arbitration in Los Angeles County, California, in accordance with the rules of the American Arbitration Association.
                      Both parties waive the right to a jury trial.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>Exceptions:</strong> Either party may seek injunctive or other equitable relief in court to protect intellectual
                      property rights or confidential information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">13. Modifications to Terms</h2>
                    <p className="text-text-secondary leading-relaxed">
                      We reserve the right to modify, update, or replace these Terms of Service at any time. Material changes will be communicated
                      via email to patients with scheduled appointments or posted prominently on our website. Your continued use of our services
                      following any changes constitutes acceptance of those modifications.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">14. Severability</h2>
                    <p className="text-text-secondary leading-relaxed">
                      If any provision of these Terms of Service is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction,
                      the remaining provisions shall continue in full force and effect.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">15. Contact Information</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
                    </p>
                    <div className="text-text-secondary leading-relaxed">
                      <p><strong>Phone:</strong> (XXX) XXX-XXXX</p>
                      <p><strong>Email:</strong> contact@yourdomain.com</p>
                      <p><strong>Address:</strong> Los Angeles, CA</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-text-secondary">
                      By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                  </div>
                </>
              ) : (
                // Chinese Version
                <>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">1. 接受条款</h2>
                    <p className="text-text-secondary leading-relaxed">
                      通过预约、接受治疗或使用我们医美诊所提供的任何服务（以下简称"我们"、"本诊所"），即表示您已阅读、理解并同意遵守本服务条款。
                      如果您不同意本条款的任何部分，请勿使用我们的服务。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">2. 提供的服务</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      本诊所在医生监督下提供医学美容项目，包括但不限于：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>面部轮廓塑形及瘦脸注射治疗</li>
                      <li>医学体重管理方案</li>
                      <li>抗衰老及美容提升项目</li>
                      <li>皮肤焕活治疗</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      所有治疗均由持证医疗专业人员在我们医疗主任的监督下进行。任何项目前均需进行全面咨询及医学评估。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">3. 预约与取消政策</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>预约方式：</strong>可通过电话、电子邮件或在线预约系统进行预约。建议提前预约以确保您首选的时间段。
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>取消政策：</strong>我们理解情况会有变化。我们要求至少提前24小时通知取消或改约。少于24小时通知的取消
                      或未到场（no-show）可能会收取最高达预约服务费用50%的取消费。
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>迟到：</strong>请准时到达预约。迟到超过15分钟可能需要重新预约，并将适用我们的标准取消政策。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">4. 付款条款</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      除非事先另有安排，否则服务费用需在服务时支付。我们接受现金、主要信用卡和经批准的融资选项。
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>定价：</strong>所有价格如有变动恕不另行通知。咨询时报出的价格将在30天内提供服务时有效。
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>套餐和促销：</strong>特别优惠、套餐及促销定价受特定条款和条件约束，将在购买时明确告知。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">5. 医学咨询与知情同意</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      所有患者在接受任何美容治疗之前都必须进行全面的医学咨询。在此次咨询中，我们将：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>审查您的完整病史和当前用药情况</li>
                      <li>讨论您的美容目标和期望</li>
                      <li>解释推荐的治疗方案、潜在风险和预期效果</li>
                      <li>回答您的任何问题</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      您需要签署知情同意书，确认您理解项目的性质、风险、益处和替代方案。您有权拒绝任何推荐的治疗。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">6. 治疗效果与免责声明</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>个体差异：</strong>虽然我们努力提供优质效果，但美容治疗结果因个人因素而异，包括肤质、年龄、生活方式、
                      代谢以及术后护理指导的遵守情况。我们无法保证特定结果或您将完全满意。
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>风险与并发症：</strong>所有医疗项目都有固有风险。常见副作用和潜在并发症将在咨询时讨论。
                      您确认已被告知这些风险，并通过接受治疗来接受它们。
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>非医疗替代品：</strong>我们的服务是选择性美容项目，不用于诊断、治疗、治愈或预防任何疾病。
                      它们不应被视为专业医疗建议或治疗的替代品。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">7. 患者责任</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      作为患者，您同意：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>提供完整准确的医疗信息，包括您正在服用的所有药物和补充剂</li>
                      <li>披露任何过敏、以前的美容治疗或医疗状况</li>
                      <li>遵循我们医疗团队提供的所有治疗前和治疗后护理指导</li>
                      <li>参加所有推荐的复诊预约</li>
                      <li>如出现任何令人担忧的症状或不良反应，请立即联系我们的诊所</li>
                      <li>在治疗计划期间，未经我们同意不得从其他医疗机构接受类似治疗</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">8. 摄影与文档记录</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      出于医疗记录和质量保证目的，我们可能会在您治疗前后拍摄临床照片。这些图像成为您医疗记录的一部分，
                      受HIPAA法规保护。
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      未经您通过照片发布授权表单单独明确的书面同意，我们绝不会将您的照片用于营销、社交媒体或促销目的。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">9. 保密与隐私</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们致力于根据《健康保险流通与责任法案》(HIPAA)和加州隐私法（包括《加州消费者隐私法》CCPA）保护您的隐私
                      并维护您医疗信息的保密性。有关我们如何收集、使用和保护您的个人和医疗信息的详细信息，请参阅我们的隐私政策。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">10. 知识产权</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们网站上的所有内容，包括文字、图形、标志、图像和治疗方案，均为本诊所的专有财产，受美国和国际版权、
                      商标及其他知识产权法保护。未经授权使用、复制或分发此内容严格禁止。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">11. 责任限制</h2>
                    <p className="text-text-secondary leading-relaxed">
                      在加州法律允许的最大范围内，我们对因您使用我们服务而产生的任何索赔的责任仅限于您为引起索赔的特定服务支付的金额。
                      我们不对任何间接、附带、后果性或惩罚性损害承担责任，包括但不限于收入损失、情感困扰或业务机会损失。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">12. 争议解决</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>适用法律：</strong>本服务条款受加利福尼亚州法律管辖并据此解释，不考虑其法律冲突条款。
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      <strong>仲裁：</strong>因本条款或所提供服务引起或相关的任何争议应根据美国仲裁协会的规则在加州洛杉矶县
                      通过具有约束力的仲裁解决。双方放弃陪审团审判的权利。
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      <strong>例外：</strong>任何一方可在法院寻求禁令或其他衡平法救济以保护知识产权或机密信息。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">13. 条款修改</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们保留随时修改、更新或替换本服务条款的权利。重大变更将通过电子邮件通知有预约的患者或在我们的网站上显著发布。
                      您在任何更改后继续使用我们的服务即表示接受这些修改。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">14. 可分割性</h2>
                    <p className="text-text-secondary leading-relaxed">
                      如果本服务条款的任何条款被有管辖权的法院认定为无效、非法或不可执行，其余条款应继续完全有效。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">15. 联系信息</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      如果您对本服务条款有任何疑问、疑虑或要求，请联系我们：
                    </p>
                    <div className="text-text-secondary leading-relaxed">
                      <p><strong>电话：</strong>(XXX) XXX-XXXX</p>
                      <p><strong>邮箱：</strong>contact@yourdomain.com</p>
                      <p><strong>地址：</strong>加州洛杉矶</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-text-secondary">
                      使用我们的服务即表示您确认已阅读、理解并同意受本服务条款的约束。
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

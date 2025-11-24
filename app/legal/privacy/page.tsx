'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-background-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              {language === 'en' ? 'Privacy Policy' : '隐私政策'}
            </h1>
            <p className="text-text-secondary">
              {language === 'en'
                ? 'Effective Date: January 1, 2025'
                : '生效日期：2025年1月1日'}
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">

              {language === 'en' ? (
                // English Version
                <>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">Introduction</h2>
                    <p className="text-text-secondary leading-relaxed">
                      At our medical aesthetics practice, we are deeply committed to safeguarding your privacy and protecting your personal
                      and medical information. This Privacy Policy explains how we collect, use, disclose, and protect your information in
                      compliance with the Health Insurance Portability and Accountability Act (HIPAA), the California Consumer Privacy Act
                      (CCPA), the California Privacy Rights Act (CPRA), and other applicable privacy regulations.
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      By using our services, scheduling appointments, or visiting our website, you consent to the practices described in
                      this Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">1. Information We Collect</h2>

                    <h3 className="text-xl font-semibold mb-3 mt-4">1.1 Protected Health Information (PHI)</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      As a healthcare provider, we collect Protected Health Information as defined by HIPAA, including:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Personal identifiers (name, date of birth, address, phone number, email)</li>
                      <li>Medical history, current health conditions, and medication information</li>
                      <li>Treatment records, clinical notes, and procedure documentation</li>
                      <li>Clinical photographs taken before, during, and after treatments</li>
                      <li>Payment and billing information related to medical services</li>
                      <li>Insurance information (if applicable)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Personal Information</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We also collect personal information for administrative and communication purposes:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Contact details for appointment reminders and follow-up communications</li>
                      <li>Emergency contact information</li>
                      <li>Marketing preferences and communication choices</li>
                      <li>Website usage data and online interactions</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Technical Information</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      When you visit our website, we automatically collect certain technical information:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>IP address and geographic location data</li>
                      <li>Browser type, device information, and operating system</li>
                      <li>Pages visited, time spent on site, and navigation patterns</li>
                      <li>Referring website and search terms used to find our site</li>
                      <li>Cookie data and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">2. How We Use Your Information</h2>

                    <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Treatment and Medical Care</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Providing, coordinating, and managing your aesthetic treatments and medical care</li>
                      <li>Conducting medical consultations and assessments</li>
                      <li>Monitoring treatment outcomes and patient safety</li>
                      <li>Coordinating care with other healthcare providers when necessary</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Healthcare Operations</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Quality assurance and improvement of our services</li>
                      <li>Staff training and performance evaluation</li>
                      <li>Conducting internal audits and compliance reviews</li>
                      <li>Business planning and administrative functions</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Payment and Billing</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Processing payments and managing billing activities</li>
                      <li>Verifying insurance coverage and processing claims (if applicable)</li>
                      <li>Managing payment plans and financial assistance programs</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Communication</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Sending appointment reminders and confirmations</li>
                      <li>Providing post-treatment care instructions and follow-up</li>
                      <li>Responding to your inquiries and requests</li>
                      <li>Sending practice updates and important notices</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.5 Marketing (With Your Consent)</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Sending promotional materials about new treatments and special offers</li>
                      <li>Sharing educational content and wellness information</li>
                      <li>Inviting you to events or loyalty programs</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-2 text-sm italic">
                      Note: You may opt out of marketing communications at any time without affecting your treatment.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">3. How We Share Your Information</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We respect your privacy and do not sell your personal information. We may share your information only in the
                      following limited circumstances:
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-4">3.1 With Your Consent</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We will obtain your explicit written authorization before using your PHI or photographs for marketing purposes,
                      testimonials, or any use not covered by this Privacy Policy.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Healthcare Providers</h3>
                    <p className="text-text-secondary leading-relaxed">
                      We may share your medical information with other healthcare professionals involved in your care, such as referring
                      physicians, consulting specialists, or laboratories conducting necessary tests.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Business Associates</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We work with trusted third-party service providers who assist with our operations. These may include:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>Electronic medical records (EMR) systems and cloud storage providers</li>
                      <li>Payment processors and billing services</li>
                      <li>Appointment scheduling platforms</li>
                      <li>IT support and cybersecurity services</li>
                      <li>Professional consultants (legal, accounting, compliance)</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      All business associates are required to sign HIPAA-compliant Business Associate Agreements ensuring they protect
                      your information and use it only as permitted.
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.4 Legal Requirements</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We may disclose your information when required or permitted by law, including:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>In response to valid court orders, subpoenas, or legal processes</li>
                      <li>To comply with mandatory reporting requirements (e.g., suspected abuse, certain communicable diseases)</li>
                      <li>For public health and safety purposes</li>
                      <li>To law enforcement in limited circumstances as permitted by HIPAA</li>
                      <li>In connection with legal proceedings or disputes</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.5 Business Transactions</h3>
                    <p className="text-text-secondary leading-relaxed">
                      In the event of a merger, acquisition, sale of assets, or other business transaction, your information may be
                      transferred to the successor entity, subject to the same privacy protections.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">4. Your Privacy Rights</h2>

                    <h3 className="text-xl font-semibold mb-3 mt-4">4.1 HIPAA Rights</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      Under HIPAA, you have the following rights regarding your Protected Health Information:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>Right to Access:</strong> Request copies of your medical records (some fees may apply)</li>
                      <li><strong>Right to Amend:</strong> Request corrections to your medical records if you believe they contain errors</li>
                      <li><strong>Right to an Accounting:</strong> Receive a list of certain disclosures we&rsquo;ve made of your PHI</li>
                      <li><strong>Right to Request Restrictions:</strong> Ask us to limit how we use or share your information (we are not required to agree to all restrictions)</li>
                      <li><strong>Right to Confidential Communications:</strong> Request that we communicate with you in a specific way or at a specific location</li>
                      <li><strong>Right to a Paper Copy:</strong> Receive a paper copy of this Privacy Policy upon request</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">4.2 California Privacy Rights (CCPA/CPRA)</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      If you are a California resident, you have additional rights under the CCPA and CPRA:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>Right to Know:</strong> Request information about the personal data we&rsquo;ve collected, used, disclosed, or sold about you</li>
                      <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
                      <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information (Note: We do not sell personal information)</li>
                      <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                      <li><strong>Right to Non-Discrimination:</strong> Exercise your privacy rights without receiving discriminatory treatment</li>
                      <li><strong>Right to Limit Use of Sensitive Information:</strong> Limit our use of sensitive personal information to purposes necessary for services</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">4.3 How to Exercise Your Rights</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      To exercise any of these rights, please contact us at:
                    </p>
                    <ul className="list-none text-text-secondary space-y-1 ml-6">
                      <li><strong>Phone:</strong> (XXX) XXX-XXXX</li>
                      <li><strong>Email:</strong> privacy@yourdomain.com</li>
                      <li><strong>Mail:</strong> Los Angeles, CA</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      We will respond to your request within the timeframes required by applicable law (typically 30 days for HIPAA
                      requests and 45 days for CCPA requests). We may need to verify your identity before processing your request.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">5. Data Security</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We implement comprehensive administrative, technical, and physical safeguards to protect your information from
                      unauthorized access, use, or disclosure:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>Technical Safeguards:</strong> Encryption of data in transit and at rest, secure firewalls, intrusion detection systems, and regular security updates</li>
                      <li><strong>Physical Safeguards:</strong> Restricted access to facilities where PHI is stored, locked filing cabinets, and secure disposal of paper records</li>
                      <li><strong>Administrative Safeguards:</strong> Staff training on privacy and security, access controls limiting who can view patient information, and regular security risk assessments</li>
                      <li><strong>Incident Response:</strong> Protocols for detecting, responding to, and reporting security incidents or data breaches</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      While we use industry-standard security measures, no method of transmission or storage is 100% secure. We
                      continuously update our security practices to protect your information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">6. Data Retention</h2>
                    <p className="text-text-secondary leading-relaxed">
                      We retain your medical records and personal information in accordance with California law, HIPAA requirements, and
                      professional standards. Generally, we maintain medical records for a minimum of 7 years from the date of last treatment,
                      or longer if required by law. Some information may be retained indefinitely for legal, compliance, or legitimate business purposes.
                      When information is no longer needed, we securely destroy it using methods that prevent unauthorized access.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      Our website uses cookies and similar technologies to enhance your browsing experience and analyze site usage:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>Essential Cookies:</strong> Necessary for website functionality, including security and accessibility features</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve user experience</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., language selection)</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      You can control cookie settings through your browser preferences. Note that disabling certain cookies may limit
                      website functionality. We do not use cookies to collect PHI or track your browsing on other websites.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">8. Third-Party Links</h2>
                    <p className="text-text-secondary leading-relaxed">
                      Our website may contain links to third-party websites for your convenience and information. We are not responsible
                      for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any
                      third-party websites you visit.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">9. Children&rsquo;s Privacy</h2>
                    <p className="text-text-secondary leading-relaxed">
                      Our services are intended for adults aged 18 and older. We do not knowingly collect personal information from minors
                      without parental consent. If you believe we have inadvertently collected information from a minor, please contact us
                      immediately, and we will take steps to delete that information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">10. Breach Notification</h2>
                    <p className="text-text-secondary leading-relaxed">
                      In the unlikely event of a data breach involving your Protected Health Information, we will notify you and any
                      required regulatory authorities in accordance with HIPAA Breach Notification Rules and California data breach
                      notification laws. Notifications will be provided without unreasonable delay and will include information about
                      the breach, steps we are taking, and actions you can take to protect yourself.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">11. Changes to This Privacy Policy</h2>
                    <p className="text-text-secondary leading-relaxed">
                      We reserve the right to modify this Privacy Policy at any time to reflect changes in our practices, technology,
                      legal requirements, or other factors. Material changes will be posted on our website and, when appropriate,
                      communicated directly to you. The &ldquo;Effective Date&rdquo; at the top of this policy indicates when it was last updated.
                      Changes apply to information collected after the effective date of the revision.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">12. Notice of Privacy Practices</h2>
                    <p className="text-text-secondary leading-relaxed">
                      This Privacy Policy serves as our Notice of Privacy Practices as required by HIPAA. You have the right to receive
                      a paper copy of this notice upon request, even if you have agreed to receive it electronically. We will provide
                      you with a copy during your first visit and make it available on our website for your reference.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">13. Contact Us</h2>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact:
                    </p>
                    <div className="bg-background-secondary p-6 rounded-lg">
                      <p className="text-text-secondary mb-2"><strong>Privacy Officer</strong></p>
                      <p className="text-text-secondary">Phone: (XXX) XXX-XXXX</p>
                      <p className="text-text-secondary">Email: privacy@yourdomain.com</p>
                      <p className="text-text-secondary">Address: Los Angeles, CA</p>
                    </div>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      If you believe your privacy rights have been violated, you have the right to file a complaint with:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2 mt-3">
                      <li>Our Privacy Officer using the contact information above</li>
                      <li>The U.S. Department of Health and Human Services Office for Civil Rights</li>
                      <li>The California Attorney General&rsquo;s Office</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      You will not be penalized or retaliated against for filing a complaint.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-text-secondary italic">
                      This Privacy Policy is effective as of the date listed above and supersedes all previous versions. Your continued
                      use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                    </p>
                  </div>
                </>
              ) : (
                // Chinese Version
                <>
                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">引言</h2>
                    <p className="text-text-secondary leading-relaxed">
                      在我们的医美诊所，我们深深致力于保护您的隐私并保护您的个人和医疗信息。本隐私政策解释了我们如何收集、使用、
                      披露和保护您的信息，以符合《健康保险流通与责任法案》(HIPAA)、《加州消费者隐私法》(CCPA)、《加州隐私权法案》
                      (CPRA)及其他适用的隐私法规。
                    </p>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      通过使用我们的服务、预约或访问我们的网站，即表示您同意本隐私政策中描述的做法。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">1. 我们收集的信息</h2>

                    <h3 className="text-xl font-semibold mb-3 mt-4">1.1 受保护的健康信息(PHI)</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      作为医疗服务提供者，我们收集HIPAA定义的受保护健康信息，包括：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>个人识别信息（姓名、出生日期、地址、电话号码、电子邮件）</li>
                      <li>病史、当前健康状况和用药信息</li>
                      <li>治疗记录、临床笔记和项目文档</li>
                      <li>治疗前、治疗中和治疗后拍摄的临床照片</li>
                      <li>与医疗服务相关的支付和账单信息</li>
                      <li>保险信息（如适用）</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">1.2 个人信息</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      我们还收集个人信息用于行政和通信目的：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>预约提醒和后续沟通的联系方式</li>
                      <li>紧急联系信息</li>
                      <li>营销偏好和沟通选择</li>
                      <li>网站使用数据和在线互动</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">1.3 技术信息</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      当您访问我们的网站时，我们会自动收集某些技术信息：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>IP地址和地理位置数据</li>
                      <li>浏览器类型、设备信息和操作系统</li>
                      <li>访问的页面、在网站上花费的时间和导航模式</li>
                      <li>引荐网站和用于查找我们网站的搜索词</li>
                      <li>Cookie数据和类似的跟踪技术</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">2. 我们如何使用您的信息</h2>

                    <h3 className="text-xl font-semibold mb-3 mt-4">2.1 治疗和医疗护理</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>提供、协调和管理您的美容治疗和医疗护理</li>
                      <li>进行医疗咨询和评估</li>
                      <li>监控治疗效果和患者安全</li>
                      <li>必要时与其他医疗服务提供者协调护理</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.2 医疗运营</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>质量保证和服务改进</li>
                      <li>员工培训和绩效评估</li>
                      <li>进行内部审计和合规审查</li>
                      <li>业务规划和行政职能</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.3 支付和账单</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>处理支付和管理账单活动</li>
                      <li>验证保险覆盖范围和处理索赔（如适用）</li>
                      <li>管理付款计划和财务援助计划</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.4 沟通</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>发送预约提醒和确认</li>
                      <li>提供治疗后护理指导和随访</li>
                      <li>回复您的询问和请求</li>
                      <li>发送诊所更新和重要通知</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">2.5 营销（需经您同意）</h3>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>发送有关新治疗和特别优惠的宣传材料</li>
                      <li>分享教育内容和健康信息</li>
                      <li>邀请您参加活动或忠诚度计划</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-2 text-sm italic">
                      注意：您可以随时选择退出营销通讯，而不会影响您的治疗。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">3. 我们如何共享您的信息</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      我们尊重您的隐私，不会出售您的个人信息。我们仅在以下有限情况下共享您的信息：
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-4">3.1 经您同意</h3>
                    <p className="text-text-secondary leading-relaxed">
                      在将您的PHI或照片用于营销目的、推荐或本隐私政策未涵盖的任何用途之前，我们将获得您的明确书面授权。
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.2 医疗服务提供者</h3>
                    <p className="text-text-secondary leading-relaxed">
                      我们可能会与参与您护理的其他医疗专业人员共享您的医疗信息，例如转诊医生、咨询专家或进行必要检测的实验室。
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.3 业务合作伙伴</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      我们与协助我们运营的值得信赖的第三方服务提供商合作。这些可能包括：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>电子病历(EMR)系统和云存储提供商</li>
                      <li>支付处理商和账单服务</li>
                      <li>预约安排平台</li>
                      <li>IT支持和网络安全服务</li>
                      <li>专业顾问（法律、会计、合规）</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      所有业务合作伙伴都必须签署符合HIPAA的业务合作伙伴协议，确保他们保护您的信息并仅按允许的方式使用。
                    </p>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.4 法律要求</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      当法律要求或允许时，我们可能会披露您的信息，包括：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li>响应有效的法院命令、传票或法律程序</li>
                      <li>遵守强制性报告要求（例如，疑似虐待、某些传染病）</li>
                      <li>用于公共卫生和安全目的</li>
                      <li>在HIPAA允许的有限情况下向执法部门披露</li>
                      <li>与法律诉讼或争议相关</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">3.5 业务交易</h3>
                    <p className="text-text-secondary leading-relaxed">
                      在合并、收购、资产出售或其他业务交易的情况下，您的信息可能会转移给继任实体，但受相同的隐私保护约束。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">4. 您的隐私权利</h2>

                    <h3 className="text-xl font-semibold mb-3 mt-4">4.1 HIPAA权利</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      根据HIPAA，您对受保护的健康信息拥有以下权利：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>访问权：</strong>请求您医疗记录的副本（可能收取一些费用）</li>
                      <li><strong>修改权：</strong>如果您认为您的医疗记录包含错误，可以请求更正</li>
                      <li><strong>记录权：</strong>接收我们对您的PHI进行的某些披露的列表</li>
                      <li><strong>限制请求权：</strong>要求我们限制使用或共享您的信息的方式（我们不需要同意所有限制）</li>
                      <li><strong>保密沟通权：</strong>要求我们以特定方式或在特定位置与您沟通</li>
                      <li><strong>纸质副本权：</strong>应要求接收本隐私政策的纸质副本</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">4.2 加州隐私权(CCPA/CPRA)</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      如果您是加州居民，您在CCPA和CPRA下拥有额外权利：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>知情权：</strong>请求我们收集、使用、披露或出售的有关您的个人数据信息</li>
                      <li><strong>删除权：</strong>请求删除您的个人信息（受某些例外情况限制）</li>
                      <li><strong>选择退出权：</strong>选择退出个人信息的出售或共享（注意：我们不出售个人信息）</li>
                      <li><strong>更正权：</strong>请求更正不准确的个人信息</li>
                      <li><strong>非歧视权：</strong>行使您的隐私权而不受歧视性待遇</li>
                      <li><strong>限制敏感信息使用权：</strong>限制我们对敏感个人信息的使用，仅用于服务所需目的</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">4.3 如何行使您的权利</h3>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      要行使这些权利中的任何一项，请通过以下方式联系我们：
                    </p>
                    <ul className="list-none text-text-secondary space-y-1 ml-6">
                      <li><strong>电话：</strong>(XXX) XXX-XXXX</li>
                      <li><strong>邮箱：</strong>privacy@yourdomain.com</li>
                      <li><strong>邮寄：</strong>加州洛杉矶</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      我们将在适用法律要求的时间范围内（HIPAA请求通常为30天，CCPA请求为45天）回复您的请求。
                      在处理您的请求之前，我们可能需要验证您的身份。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">5. 数据安全</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      我们实施全面的行政、技术和物理保障措施来保护您的信息免受未经授权的访问、使用或披露：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>技术保障：</strong>传输和静态数据加密、安全防火墙、入侵检测系统和定期安全更新</li>
                      <li><strong>物理保障：</strong>限制访问存储PHI的设施、锁定文件柜和安全处理纸质记录</li>
                      <li><strong>行政保障：</strong>隐私和安全方面的员工培训、限制谁可以查看患者信息的访问控制以及定期安全风险评估</li>
                      <li><strong>事件响应：</strong>检测、响应和报告安全事件或数据泄露的协议</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      虽然我们使用行业标准的安全措施，但没有任何传输或存储方法是100%安全的。我们持续更新我们的安全实践以保护您的信息。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">6. 数据保留</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们根据加州法律、HIPAA要求和专业标准保留您的医疗记录和个人信息。通常，我们从最后治疗之日起至少保留医疗记录7年，
                      或法律要求的更长时间。某些信息可能会出于法律、合规或合法业务目的而无限期保留。当不再需要信息时，
                      我们会使用防止未经授权访问的方法安全销毁它。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">7. Cookie和跟踪技术</h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      我们的网站使用Cookie和类似技术来增强您的浏览体验并分析网站使用情况：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2">
                      <li><strong>必要Cookie：</strong>网站功能所必需的，包括安全性和可访问性功能</li>
                      <li><strong>分析Cookie：</strong>帮助我们了解访问者如何与我们的网站互动以改进用户体验</li>
                      <li><strong>偏好Cookie：</strong>记住您的设置和偏好（例如，语言选择）</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      您可以通过浏览器偏好设置控制Cookie设置。请注意，禁用某些Cookie可能会限制网站功能。
                      我们不使用Cookie收集PHI或跟踪您在其他网站上的浏览。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">8. 第三方链接</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们的网站可能包含指向第三方网站的链接，以方便您并提供信息。我们不对这些外部网站的隐私实践或内容负责。
                      我们鼓励您查看您访问的任何第三方网站的隐私政策。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">9. 儿童隐私</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们的服务适用于18岁及以上的成年人。未经父母同意，我们不会故意收集未成年人的个人信息。
                      如果您认为我们无意中收集了未成年人的信息，请立即联系我们，我们将采取措施删除该信息。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">10. 违规通知</h2>
                    <p className="text-text-secondary leading-relaxed">
                      在涉及您受保护健康信息的数据泄露的不太可能情况下，我们将根据HIPAA违规通知规则和加州数据泄露通知法
                      通知您和任何所需的监管机构。通知将在没有不合理延迟的情况下提供，并将包括有关违规的信息、我们正在采取的步骤
                      以及您可以采取的保护自己的措施。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">11. 本隐私政策的更改</h2>
                    <p className="text-text-secondary leading-relaxed">
                      我们保留随时修改本隐私政策的权利，以反映我们实践、技术、法律要求或其他因素的变化。
                      重大变更将发布在我们的网站上，并在适当时直接与您沟通。本政策顶部的&ldquo;生效日期&rdquo;表示上次更新的时间。
                      更改适用于修订生效日期之后收集的信息。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">12. 隐私实践通知</h2>
                    <p className="text-text-secondary leading-relaxed">
                      本隐私政策作为HIPAA要求的隐私实践通知。即使您已同意以电子方式接收，您也有权应要求接收本通知的纸质副本。
                      我们将在您第一次就诊时向您提供副本，并在我们的网站上提供以供您参考。
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif font-semibold mb-4">13. 联系我们</h2>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      如果您对本隐私政策或我们的隐私实践有疑问、疑虑或请求，请联系：
                    </p>
                    <div className="bg-background-secondary p-6 rounded-lg">
                      <p className="text-text-secondary mb-2"><strong>隐私官</strong></p>
                      <p className="text-text-secondary">电话：(XXX) XXX-XXXX</p>
                      <p className="text-text-secondary">邮箱：privacy@yourdomain.com</p>
                      <p className="text-text-secondary">地址：加州洛杉矶</p>
                    </div>
                    <p className="text-text-secondary leading-relaxed mt-4">
                      如果您认为您的隐私权受到侵犯，您有权向以下机构提出投诉：
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary space-y-2 mt-3">
                      <li>使用上述联系信息联系我们的隐私官</li>
                      <li>美国卫生与公众服务部民权办公室</li>
                      <li>加州总检察长办公室</li>
                    </ul>
                    <p className="text-text-secondary leading-relaxed mt-3">
                      您不会因提出投诉而受到惩罚或报复。
                    </p>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-text-secondary italic">
                      本隐私政策自上述日期起生效，并取代所有以前的版本。在任何更改后继续使用我们的服务表示您接受更新的隐私政策。
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

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 mb-8">Privacy Policy</h1>

            <div className="space-y-8 text-body text-text-secondary">
              <section>
                <h2 className="text-h2 text-text-primary mb-4">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth</li>
                  <li><strong>Medical Information:</strong> Health history, treatment records, medications</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details</li>
                  <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time spent on pages</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">2. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>To provide medical services and treatments</li>
                  <li>To schedule appointments and send reminders</li>
                  <li>To process payments</li>
                  <li>To communicate with you about your care</li>
                  <li>To improve our services and website</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">3. HIPAA Compliance</h2>
                <p>
                  We are committed to protecting your medical information in accordance with the Health Insurance Portability and Accountability Act (HIPAA). Your protected health information (PHI) will only be used and disclosed as permitted by HIPAA regulations.
                </p>
                <p className="mt-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Access and obtain copies of your medical records</li>
                  <li>Request amendments to your medical records</li>
                  <li>Receive an accounting of disclosures</li>
                  <li>Request restrictions on certain uses and disclosures</li>
                  <li>File a complaint if you believe your privacy rights have been violated</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">4. Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With medical professionals involved in your care</li>
                  <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal and medical information from unauthorized access, use, alteration, or disclosure. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits</li>
                  <li>Staff training on privacy and security</li>
                  <li>Access controls and authentication</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">6. Cookies and Tracking</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Note that disabling cookies may limit certain website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">8. Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors without parental consent.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">9. Your Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">10. California Privacy Rights</h2>
                <p>
                  California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information (note: we do not sell personal information).
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &ldquo;Last Updated&rdquo; date.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">12. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us through the contact information provided on our website.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border text-sm italic">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">This policy complies with HIPAA, CCPA, and other applicable privacy laws.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

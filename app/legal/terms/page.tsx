import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 mb-8">Terms of Service</h1>

            <div className="space-y-8 text-body text-text-secondary">
              <section>
                <h2 className="text-h2 text-text-primary mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">2. Use of Website</h2>
                <p>
                  This website is provided for informational purposes only. The content on this site does not constitute medical advice and should not be used as a substitute for professional medical consultation, diagnosis, or treatment.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">3. Medical Services</h2>
                <p>
                  All medical procedures and treatments offered through our clinic are subject to individual assessment and approval by licensed medical professionals. Results may vary, and we make no guarantees regarding specific outcomes.
                </p>
                <p className="mt-4">
                  California law requires that all medical aesthetic procedures be performed by or under the supervision of a licensed physician. All procedures discussed on this website comply with California Medical Board regulations.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">4. Appointment and Cancellation Policy</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Appointments must be cancelled at least 24 hours in advance</li>
                  <li>Late cancellations may be subject to a fee</li>
                  <li>We reserve the right to refuse service to anyone</li>
                  <li>All consultations are by appointment only</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">5. Pricing and Payment</h2>
                <p>
                  All prices are subject to change without notice. Payment is due at the time of service unless other arrangements have been made in advance. We accept various payment methods as indicated at our clinic.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">6. Privacy and Confidentiality</h2>
                <p>
                  We are committed to protecting your privacy and maintaining the confidentiality of your medical information in accordance with HIPAA regulations. Please see our Privacy Policy for more details.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">7. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of our clinic or its content suppliers and is protected by copyright laws.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">8. Limitation of Liability</h2>
                <p>
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or any services provided.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us through the contact information provided on our website.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-border text-sm italic">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">These terms are subject to California law and regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

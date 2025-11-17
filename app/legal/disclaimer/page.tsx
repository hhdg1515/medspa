import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Medical Disclaimer',
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 mb-8">Medical Disclaimer</h1>

            <div className="space-y-8 text-body text-text-secondary">
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
                <p className="font-semibold text-text-primary">
                  IMPORTANT: This website provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </div>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">1. Not Medical Advice</h2>
                <p>
                  The content on this website, including text, graphics, images, and other materials, is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">2. No Doctor-Patient Relationship</h2>
                <p>
                  Use of this website and the information contained herein does not create a doctor-patient relationship. A doctor-patient relationship is only established when you visit our clinic in person and are examined by a licensed medical professional.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">3. Individual Results May Vary</h2>
                <p>
                  Results from aesthetic treatments vary significantly from person to person. Factors that may affect results include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Individual anatomy and physiology</li>
                  <li>Age and overall health status</li>
                  <li>Lifestyle factors (diet, exercise, smoking, etc.)</li>
                  <li>Compliance with pre- and post-treatment instructions</li>
                  <li>Genetic factors</li>
                  <li>Previous treatments or procedures</li>
                </ul>
                <p className="mt-4 font-semibold text-text-primary">
                  We make no guarantees regarding specific outcomes or results. Before and after photos represent individual results and do not constitute a promise or guarantee of similar outcomes for all patients.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">4. California Medical Requirements</h2>
                <p>
                  In accordance with California law, all medical aesthetic procedures offered at our clinic are:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Performed by or under the direct supervision of a licensed physician</li>
                  <li>Conducted in compliance with California Medical Board regulations</li>
                  <li>Subject to informed consent requirements</li>
                  <li>Performed only after appropriate medical evaluation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">5. Risks and Complications</h2>
                <p>
                  All medical procedures, including minimally invasive aesthetic treatments, carry inherent risks and potential complications. Common risks may include, but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Bruising, swelling, or redness at treatment sites</li>
                  <li>Pain or discomfort</li>
                  <li>Infection</li>
                  <li>Allergic reactions</li>
                  <li>Unsatisfactory aesthetic results</li>
                  <li>Need for additional treatments</li>
                </ul>
                <p className="mt-4">
                  Specific risks will be discussed during your consultation. It is important to disclose your complete medical history, current medications, and any allergies to your provider.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">6. Not Suitable for Everyone</h2>
                <p>
                  Not all treatments are suitable for all individuals. Contraindications may include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Pregnancy or breastfeeding</li>
                  <li>Certain medical conditions</li>
                  <li>Use of specific medications</li>
                  <li>Active infections or skin conditions</li>
                  <li>History of allergic reactions to treatment ingredients</li>
                  <li>Unrealistic expectations</li>
                </ul>
                <p className="mt-4">
                  A thorough medical evaluation is required to determine suitability for any treatment.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">7. Emergency Medical Situations</h2>
                <p>
                  If you are experiencing a medical emergency, do not rely on information from this website. Call 911 immediately or go to the nearest emergency room.
                </p>
                <p className="mt-4">
                  If you experience unexpected symptoms or complications following a treatment, contact your provider immediately or seek emergency medical care.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">8. Third-Party Content</h2>
                <p>
                  This website may reference or link to third-party products, services, or websites. We do not endorse, guarantee, or assume responsibility for any third-party content, products, or services.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">9. Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information, medical knowledge is constantly evolving. Information on this website may not reflect the most current research or clinical practices. We do not guarantee the accuracy, completeness, or usefulness of any information provided.
                </p>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">10. Professional Consultation Required</h2>
                <p>
                  Before undergoing any aesthetic treatment:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Schedule an in-person consultation</li>
                  <li>Discuss your medical history thoroughly</li>
                  <li>Ask questions and express concerns</li>
                  <li>Review and understand informed consent documents</li>
                  <li>Understand all risks, benefits, and alternatives</li>
                  <li>Ensure you have realistic expectations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h2 text-text-primary mb-4">11. Regulatory Compliance</h2>
                <p>
                  Our clinic operates in full compliance with:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>California Medical Board regulations</li>
                  <li>FDA guidelines for medical devices and medications</li>
                  <li>HIPAA privacy requirements</li>
                  <li>State and federal health and safety regulations</li>
                </ul>
              </section>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="bg-red-50 border border-red-200 p-6 rounded">
                  <h3 className="font-semibold text-text-primary mb-2">Liability Disclaimer</h3>
                  <p className="text-sm">
                    By using this website, you acknowledge and agree that you assume full responsibility for any decisions made based on the information provided. We disclaim all liability for any damages, losses, or injuries arising from your use of this website or reliance on its content.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-sm italic">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">This disclaimer is subject to change. Please review regularly.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedTreatments } from '@/components/sections/FeaturedTreatments';
import { WhyUs } from '@/components/sections/WhyUs';
import { PatientTestimonials } from '@/components/sections/PatientTestimonials';
import { ServiceCategories } from '@/components/sections/ServiceCategories';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ContactForm } from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturedTreatments />
        <WhyUs />
        <PatientTestimonials />
        <ServiceCategories />
        <ConsultationCTA />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

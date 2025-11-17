import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedTreatments } from '@/components/sections/FeaturedTreatments';
import { WhyUs } from '@/components/sections/WhyUs';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ContactForm } from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedTreatments />
        <WhyUs />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

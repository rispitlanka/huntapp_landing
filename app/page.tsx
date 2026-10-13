import Nav from '@/components/Nav';
import ReadyProvider from '@/components/ReadyProvider';
import Band from '@/components/sections/Band';
import Business from '@/components/sections/Business';
import Creators from '@/components/sections/Creators';
import Features from '@/components/sections/Features';
import FinalCta from '@/components/sections/FinalCta';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Questions from '@/components/sections/Questions';
import WalletSection from '@/components/sections/WalletSection';

export default function Home() {
  return (
    <ReadyProvider>
      <Nav />
      <main>
        <Hero />
        <Band />
        <HowItWorks />
        <Features />
        <WalletSection />
        <Creators />
        <Business />
        <Questions />
        <FinalCta />
      </main>
      <Footer />
    </ReadyProvider>
  );
}

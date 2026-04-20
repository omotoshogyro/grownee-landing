import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import LearnAnalyze from "@/components/LearnAnalyze";
import Learns from "@/components/Learns";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcf9]">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <LearnAnalyze />
      <Learns />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}

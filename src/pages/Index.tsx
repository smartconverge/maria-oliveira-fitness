import Navbar from "@/components/Navbar";
import CredBar from "@/components/CredBar";
import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import ResultsSection from "@/components/ResultsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <main style={{ minHeight: '100vh', background: '#FAF6F1' }}>
    <Navbar />
    <CredBar />
    <HeroSection />
    <PlansSection />
    <ResultsSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;

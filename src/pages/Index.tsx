import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    <HeroSection />

    <ServicesSection />

    

    <HowItWorksSection />

    <AboutSection />

    <CTASection />

    <Footer />

    <WhatsAppButton />
  </div>
);

export default Index;
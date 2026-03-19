import { FaWhatsapp } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_URL =
  "https://wa.me/5555991463614?text=Olá! Gostaria de saber mais sobre os serviços.";

const CTASection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
    </div>

    <div className="container relative mx-auto px-6">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Pronto para <span className="text-gradient">modernizar</span> seu negócio?
        </h2>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Fale conosco e descubra como podemos ajudar sua empresa a crescer com tecnologia.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground font-bold text-lg px-10 py-5 rounded-xl hover:opacity-90 transition-opacity shadow-glow"
        >
          <FaWhatsapp size={24} />
          Falar no WhatsApp
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
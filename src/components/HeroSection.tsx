import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.png";

const WHATSAPP_URL = "https://wa.me/5555991463614?text=Olá! Gostaria de solicitar um orçamento.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />
    </div>

    <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Soluções digitais inteligentes
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transformamos ideias em{" "}
            <span className="text-gradient">presença digital</span> e{" "}
            <span className="text-gradient">inteligência para seu negócio</span>.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
           Sites profissionais, identidade visual e assistentes de IA para WhatsApp que ajudam empresas a atrair clientes e crescer na internet.
          </p>

          <div className="flex justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              Solicitar orçamento
              <ArrowRight size={18} />
            </a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <img
            src={heroImage}
            alt="Ilustração de tecnologia e automação com inteligência artificial"
            className="w-full max-w-lg mx-auto animate-float rounded-2xl"
          />
        </motion.div>

      </div>
    </div>
  </section>
);

export default HeroSection;
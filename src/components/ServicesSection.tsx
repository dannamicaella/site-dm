import { Globe, Palette, CreditCard, MapPin, Bot } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Globe, title: "Criação de Sites", desc: "Sites profissionais, rápidos e responsivos que aumentam a presença digital da sua empresa.", featured: true },
  { icon: Bot, title: "Assistentes de IA para WhatsApp", desc: "Chatbots inteligentes que respondem clientes automaticamente, qualificam leads e ajudam a aumentar as vendas.", featured: true },
  { icon: Palette, title: "Criação de Logotipos", desc: "Identidade visual profissional que fortalece a marca e transmite credibilidade.", featured: true },
  { icon: CreditCard, title: "Cartões de Visita Digitais", desc: "Cartões digitais clicáveis com integração direta com WhatsApp, redes sociais e localização.", featured: true },
  { icon: MapPin, title: "Google Meu Negócio", desc: "Criação e otimização do perfil da empresa no Google para aumentar a visibilidade local.", featured: false },
];

const ServicesSection = () => (
  <section className="py-24 relative" id="servicos">
    <div className="container mx-auto px-6">
      
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Soluções completas para transformar sua presença digital e automatizar seu negócio.
        </p>
      </AnimatedSection>

      {/* Featured services */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {services.filter(s => s.featured).map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="group bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-glow transition-all duration-500 h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <s.icon size={24} className="text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Other services */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
        {services.filter(s => !s.featured).map((s, i, arr) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div
              className={`group bg-gradient-card border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-glow hover:scale-[1.02] transition-all duration-300 ${
                i === arr.length - 1 ? "md:col-span-2 max-w-2xl mx-auto" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon size={22} className="text-primary-foreground" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;
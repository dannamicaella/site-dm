import { Zap, Settings, Brain, PenTool, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: Zap, title: "Atendimento rápido", desc: "Respostas ágeis e suporte dedicado em todas as etapas." },
  { icon: Settings, title: "Soluções personalizadas", desc: "Cada projeto é único e desenvolvido sob medida." },
  { icon: Brain, title: "Automação inteligente", desc: "Tecnologia de ponta para automatizar processos." },
  { icon: PenTool, title: "Design profissional", desc: "Visual moderno que fortalece sua marca." },
  { icon: Target, title: "Foco em resultados", desc: "Estratégias pensadas para gerar conversão." },
];

const DifferentialsSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 bg-muted/20" />
    <div className="container relative mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Por que nos <span className="text-gradient">escolher</span>?
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-gradient-glow border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;

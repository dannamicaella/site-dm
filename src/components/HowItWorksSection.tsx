import { MessageSquare, Search, Code, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, num: "01", title: "Contato inicial", desc: "Entre em contato pelo WhatsApp e conte sobre seu projeto." },
  { icon: Search, num: "02", title: "Entendimento do projeto", desc: "Analisamos suas necessidades e definimos a melhor estratégia." },
  { icon: Code, num: "03", title: "Desenvolvimento", desc: "Criamos a solução com qualidade e atenção aos detalhes." },
  { icon: Rocket, num: "04", title: "Entrega e suporte", desc: "Entregamos o projeto finalizado com suporte contínuo." },
];

const HowItWorksSection = () => (
  <section className="py-24" id="como-funciona">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Como <span className="text-gradient">funciona</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.1}>
            <div className="relative text-center">
              <span className="font-display text-5xl font-bold text-primary/10 absolute -top-4 left-1/2 -translate-x-1/2">
                {step.num}
              </span>
              <div className="relative pt-8">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <step.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

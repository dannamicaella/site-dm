import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { name: "Mariana Silva", role: "CEO, Studio Criativo", text: "A equipe entregou um site incrível que superou todas as nossas expectativas. O atendimento foi impecável do início ao fim." },
  { name: "Carlos Oliveira", role: "Diretor, Oliveira Consultoria", text: "O chatbot de IA para WhatsApp transformou nosso atendimento. Hoje respondemos clientes 24h e aumentamos as vendas em 40%." },
  { name: "Ana Beatriz", role: "Fundadora, AB Moda", text: "O logotipo e a identidade visual ficaram perfeitos. Minha marca agora transmite toda a credibilidade que eu precisava." },
];

const TestimonialsSection = () => (
  <section className="py-24" id="depoimentos">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          O que nossos clientes <span className="text-gradient">dizem</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="bg-gradient-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 150, suffix: "+", label: "Empresas atendidas" },
  { value: 300, suffix: "+", label: "Projetos entregues" },
  { value: 50, suffix: "+", label: "Automações criadas" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-gradient font-display text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
};

const ResultsSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 bg-muted/20" />
    <div className="container relative mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Resultados</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;

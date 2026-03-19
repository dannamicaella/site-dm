import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="sobre" className="py-24 relative">
    <div className="container mx-auto px-6">

      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Sobre <span className="text-gradient">nós</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          A DM Soluções Digitais nasceu com o objetivo de ajudar empresas a
          crescer na internet através de tecnologia, design e inteligência
          digital. Criamos soluções modernas que fortalecem a presença online
          e melhoram o relacionamento com clientes.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">

        <AnimatedSection delay={0.1}>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-glow hover:scale-[1.02] transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Inovação
            </h3>

            <p className="text-sm text-muted-foreground">
              Utilizamos tecnologias modernas para criar soluções digitais
              eficientes e preparadas para o futuro.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-glow hover:scale-[1.02] transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Atendimento próximo
            </h3>

            <p className="text-sm text-muted-foreground">
              Cada projeto é desenvolvido com atenção aos detalhes e
              acompanhamento direto com o cliente.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-glow hover:scale-[1.02] transition-all duration-300">
            <h3 className="font-semibold text-lg mb-2">
              Foco em resultados
            </h3>

            <p className="text-sm text-muted-foreground">
              Nosso objetivo é ajudar empresas a atrair mais clientes
              e crescer de forma consistente no digital.
            </p>
          </div>
        </AnimatedSection>

      </div>

    </div>
  </section>
);

export default AboutSection;
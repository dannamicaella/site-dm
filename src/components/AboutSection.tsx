import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="sobre" className="py-24 relative">
    <div className="container mx-auto px-6">

      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Sobre <span className="text-gradient">nós</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Nosso time conta com profissionais de tecnologia e inteligência artificial com mais de 10 anos de experiência, atuando em projetos como detecção de objetos em vídeo com drones, automação de consulta de leis e casos jurídicos para advogados e resolução de tickets para empresas do Canadá e Estados Unidos. Ao longo dessa jornada, desenvolvemos soluções que unem estratégia, automação e presença digital para impulsionar resultados de verdade. 
          <br />
Também contamos com especialistas em design digital e gráfico, com mais de 10 anos de experiência, responsáveis pela criação de logotipos, identidades visuais, interfaces, materiais digitais, sempre focados em transmitir a essência de cada marca de forma única e memorável. 
          <br />
Nosso propósito é simples: ajudar empresas a se destacarem no digital de forma profissional, inteligente e acessível. <br />
Mais do que serviços, entregamos presença, autoridade e crescimento.
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

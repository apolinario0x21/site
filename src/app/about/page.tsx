// app/about/page.tsx
import PageSection from "@/components/PageSection";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function About() {
  return (
    <PageSection
      title="Sobre"
      subtitle="Desenvolvedor apaixonado por tecnologia e segurança"
    >
      <div className="prose prose-lg prose-gray max-w-none">
        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
          Profissional com sólida experiência em redes e infraestrutura de TI,
          com interesse genuíno em cibersegurança e programação competitiva.
          Trabalha principalmente em projetos utilizando{" "}
          <strong className="text-white">Java</strong> e{" "}
          <strong className="text-white">Golang</strong>.
        </p>

        <p className="text-gray-300 leading-relaxed mb-12 text-lg">
          Graduado em Sistemas de Informação pela Universidade São Judas Tadeu
          (USJT), onde recebeu honrarias acadêmicas em reconhecimento ao seu
          desempenho.
        </p>
      </div>

      <TechnicalSkills />
    </PageSection>
  );
}

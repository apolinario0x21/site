// app/experiences/page.tsx
import PageSection from "@/components/PageSection";
import ExperienceCard from "@/components/ExperienceCard";
import { experiencesData } from "@/app/data/experiences";

export default function Experiences() {
  return (
    <PageSection 
      title="Experiências" 
      subtitle="Minha trajetória profissional e principais conquistas"
    >
      <ul className="space-y-6">
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </ul>
    </PageSection>
  );
}
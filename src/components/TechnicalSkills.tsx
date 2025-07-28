// components/TechnicalSkills.tsx
import { skillsData } from "@/app/data/skill";

export default function TechnicalSkills() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-white">Technical Skills</h2>
      <div className="space-y-10">
        {skillsData.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">
              {category.title}
            </h3>
            <div className="grid gap-3">
              {category.skills.map((skill) => (
                <div key={skill.label} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <h4 className="text-white font-medium mb-2">{skill.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
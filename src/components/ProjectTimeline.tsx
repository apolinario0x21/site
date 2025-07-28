// components/ProjectTimeline.tsx
import { projectsData } from "@/app/data/projects";
import { Project } from "@/app/types";
import ProjectCard from "./ProjectCard";

export default function ProjectTimeline() {
  const groupedProjects = projectsData.reduce((acc, project) => {
    (acc[project.year] = acc[project.year] || []).push(project);
    return acc;
  }, {} as Record<number, Project[]>);

  const sortedYears = Object.keys(groupedProjects)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="space-y-16">
      {sortedYears.map((year) => (
        <section key={year} className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-6 top-12 h-full w-px bg-gradient-to-b from-blue-500 to-transparent hidden lg:block"></div>

          {/* Cabeçalho do Ano */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <h2 className="text-3xl font-bold text-white bg-gray-900 pr-6 relative z-10">
                {year}
              </h2>
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 hidden lg:block"></div>
            </div>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>

          {/* Lista de Projetos do Ano */}
          <div className="space-y-8 lg:pl-16">
            {groupedProjects[year].map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
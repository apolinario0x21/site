// app/projects/page.tsx
import PageSection from "@/components/PageSection";
import ProjectTimeline from "@/components/ProjectTimeline";

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Uma jornada através de desafios, soluções e crescimento contínuo no desenvolvimento de software.
        </p>
      </div>

      <ProjectTimeline />
    </div>
  );
}
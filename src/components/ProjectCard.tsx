// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/types';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/50">
      {/* Imagem */}
      <div className="lg:w-1/3">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={`Screenshot do projeto ${project.title}`}
            fill
            className="object-cover border border-gray-600 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="lg:w-2/3">
        <Link 
          href={project.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group inline-block mb-3"
        >
          <h3 className="text-xl font-bold text-white inline-flex items-center gap-2 group-hover:text-blue-400 transition-colors">
            {project.title}
            <FaArrowUpRightFromSquare className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </h3>
        </Link>
        
        <div className="text-gray-300 leading-relaxed">
          <p className="mb-3">{project.description.join(' ')}</p>
          
          {project.description.length > 1 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                Principais funcionalidades:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {project.description.slice(1).map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

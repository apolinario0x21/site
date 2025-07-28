// components/ExperienceCard.tsx
import { Experience } from "@/app/types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <li className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
          <p className="text-md text-blue-400 font-medium">{experience.company}</p>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-4">
          <p className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full whitespace-nowrap">
            {experience.startDate} – {experience.endDate}
          </p>
        </div>
      </div>
      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        {experience.description}
      </div>
    </li>
  );
}
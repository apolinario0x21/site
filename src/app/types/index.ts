// types/index.ts
export interface Project {
  year: number;
  title: string;
  description: string[];
  image: string;
  href: string;
}

export interface SkillItem {
  label: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  title: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
}
export type ProjectScale = 'hero' | 'large' | 'medium' | 'small';

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  url: string;
  focus: string;
  filters: string[];
  scale: ProjectScale;
  featured: boolean;
  /** Replace with a real screenshot URL when available. Falsy renders the placeholder frame. */
  image?: string;
  /** Only set when the hosting platform is evident from the live URL. */
  deployment?: string;
}

export interface EngineeringProject {
  id: string;
  title: string;
  type?: string;
  technologies?: string[];
  description: string;
  features?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  year: string;
  responsibilities: string[];
  focus: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  period: string;
  current?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  caption: string;
  skills: string[];
}

export interface TechNode {
  name: string;
  description: string;
  group: 'language' | 'framework' | 'data' | 'cloud';
}

export interface BuildCapability {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStage {
  id: string;
  index: string;
  title: string;
  description: string;
}
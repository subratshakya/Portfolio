import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  tags: string[];
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Achievement {
  title: string;
  platform: string;
  description: string;
  link: string | null;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  link: string | null;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface NavLink {
  id: string;
  title: string;
}
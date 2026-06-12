/**
 * Contratos TypeScript das traduções.
 * Ao adicionar novos textos, atualize esta interface + pt.ts + en.ts.
 */
export type Locale = "pt" | "en";

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  note?: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    summary: string;
    ctaContact: string;
    ctaExperience: string;
    location: string;
    logoAlt: string;
  };
  about: {
    title: string;
    highlights: string;
    items: string[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  experience: {
    title: string;
    current: string;
    jobs: Job[];
  };
  education: {
    title: string;
    educationLabel: string;
    certificationsLabel: string;
    languagesLabel: string;
    items: EducationItem[];
    certifications: string[];
    languages: LanguageItem[];
  };
  contact: {
    title: string;
    description: string;
  };
  projects: {
    backHome: string;
    eyebrow: string;
    title: string;
    description: string;
    loadError: string;
    liveDemo: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  language: {
    switchToEn: string;
    switchToPt: string;
  };
}

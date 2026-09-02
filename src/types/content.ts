/**
 * Tipos do conteúdo do site. Cada módulo em `src/content/` exporta dados
 * tipados por uma destas interfaces, e os componentes em `src/components/`
 * consomem esses dados sem redeclarar shapes.
 */

export interface NavItem {
  method: string;
  route: string;
  href: string;
}

export interface StackGroup {
  group: string;
  items: string[];
}

export interface RadarSkill {
  /** 1 ou 2 linhas — usado para quebrar rótulos longos no radar. */
  label: string[];
  value: number;
}

export interface CoreSkill {
  title: string;
  badge: string;
  items: string;
}

export interface WorkingStyleItem {
  title: string;
  description: string;
  tags: string[];
}

export interface ProblemSolved {
  title: string;
  description: string;
}

export interface CriticalDomain {
  sector: string;
  short: string;
  companies: string;
  detail: string;
  highlights: string[];
}

export interface Project {
  name: string;
  method: string;
  route: string;
  description: string;
  stack: string[];
  request: string;
  response: string;
  href: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  role: string;
  company: string;
  notes: string[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
}

export interface StatusInfo {
  status: string;
  stack: string[];
  experience_time: string;
  available_for: string;
}

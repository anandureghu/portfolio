import {
  TechnologiesEnum,
  ProjectsTypeEnum,
  DomainEnum,
  ProjectStatusEnum,
} from "./enum";

// Define the Skill type
export interface Skill {
  name: string;
  icon: string; // public URL path
}

export interface Project {
  title: string;
  description: string;
  link: string;
  logo: string;
  technologies: TechnologiesEnum[];
  type: ProjectsTypeEnum[];
  domain: DomainEnum[];
  status: ProjectStatusEnum[];
}

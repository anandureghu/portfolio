import { Project } from "@/types/common";
import {
  TechnologiesEnum,
  ProjectsTypeEnum,
  DomainEnum,
  ProjectStatusEnum,
} from "@/types/enum";

export const projectsData: Project[] = [
  {
    title: "GrandisPly",
    description:
      "A modern and minimal logo design crafted for GrandisPly, a premium plywood manufacturer. The design blends the essence of strength and natural elegance, reflecting the durability and reliability of the brand while maintaining a clean, professional identity.",
    link: "https://instagram.com/grandisply",
    logo: "/svg/projects/grandis-ply.svg",
    technologies: [TechnologiesEnum.Figma],
    type: [ProjectsTypeEnum.LogoDesign],
    domain: [DomainEnum.Branding],
    status: [ProjectStatusEnum.Completed],
  },
  {
    title: "Kalayil Latex & Traders",
    description:
      "A custom mobile application built for Kalayil Latex & Traders to streamline inventory and order management. Designed with an intuitive UI/UX in Figma and developed using Expo, React Native, and Supabase with PostgreSQL for a reliable, scalable backend.",
    link: "https://github.com/anandureghu/canman",
    logo: "/svg/projects/kalayil-traders.svg",
    technologies: [
      TechnologiesEnum.Expo,
      TechnologiesEnum.ReactNative,
      TechnologiesEnum.Supabase,
      TechnologiesEnum.PostgreSQL,
      TechnologiesEnum.Figma,
    ],
    type: [ProjectsTypeEnum.MobileApp, ProjectsTypeEnum.UIUXDesign],
    domain: [DomainEnum.InventoryManagement],
    status: [ProjectStatusEnum.WIP, ProjectStatusEnum.V2],
  },
  {
    title: "Payzo Payroll",
    description:
      "UI/UX design for Payzo Payroll, a payroll and employee management platform. The system supports organization management, employee onboarding, salary processing, tax compliance, and attendance tracking — designed in Figma with a focus on clarity, efficiency, and modern HR workflows.",
    link: "",
    logo: "/svg/projects/payzo-payroll.svg",
    technologies: [TechnologiesEnum.Figma],
    type: [ProjectsTypeEnum.UIUXDesign, ProjectsTypeEnum.Web],
    domain: [DomainEnum.Payroll],
    status: [ProjectStatusEnum.Completed],
  },
  {
    title: "PiCOMiNDS",
    description:
      "Company website for PiCOMiNDS, a tech-driven firm specializing in web design, app development, UI/UX, and innovative digital products. Designed in Figma and developed with Next.js, React, Tailwind CSS, and Three.js to showcase the brand’s services with a modern, interactive landing experience.",
    link: "https://picominds.vercel.app",
    logo: "/svg/projects/picominds.svg",
    technologies: [
      TechnologiesEnum.Figma,
      TechnologiesEnum.React,
      TechnologiesEnum.NextJS,
      TechnologiesEnum.TailwindCSS,
      TechnologiesEnum.Figma,
      TechnologiesEnum.ThreeJS,
    ],
    type: [
      ProjectsTypeEnum.UIUXDesign,
      ProjectsTypeEnum.Web,
      ProjectsTypeEnum.Landingpage,
    ],
    domain: [DomainEnum.Portfolio, DomainEnum.Branding],
    status: [ProjectStatusEnum.WIP],
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built to showcase my projects, skills, and experience. Designed in Figma and developed using Next.js, React, and Tailwind CSS with a modern, responsive layout. More features and case studies will be added as the portfolio evolves.",
    link: "https://anandureghu.vercel.app",
    logo: "/svg/projects/portfolio.svg",
    technologies: [
      TechnologiesEnum.React,
      TechnologiesEnum.NextJS,
      TechnologiesEnum.TailwindCSS,
      TechnologiesEnum.Figma,
    ],
    type: [ProjectsTypeEnum.Web, ProjectsTypeEnum.Landingpage],
    domain: [DomainEnum.Portfolio],
    status: [ProjectStatusEnum.WIP],
  },
];

import ProjectDetails from "@/components/project";
import { projectsData } from "@/lib/projects.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="mt-[100px]" id="projects">
      <div className="flex items-center justify-between mb-3">
        <h1 className="uppercase text-gray-700 font-bold">Featured Projects</h1>
        <Link href={"/projects"}>
          <button className="flex items-center gap-1 text-xs text-gd-cyan cursor-pointer font-secondary font-semibold">
            All Projects{" "}
            <Image
              src={"/svg/redirect.svg"}
              width={20}
              height={20}
              alt="arrow-right"
            />
          </button>
        </Link>
      </div>
      <div>
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectDetails key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

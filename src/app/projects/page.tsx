import ProjectDetails from "@/components/project";
import { projectsData } from "@/lib/projects.const";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="pt-[50px] pb-[100px]">
      <h1 className="text-5xl font-highlight font-semibold mb-3">
        Lab of Ideas
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        Dive into a collection of projects where creativity meets functionality.
        Explore interactive demos, discover the technologies behind each build,
        and see how ideas transform into real-world solutions. Each project
        tells a story—click, interact, and get inspired!
      </p>
      {projectsData.map((project, index) => (
        <ProjectDetails key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;

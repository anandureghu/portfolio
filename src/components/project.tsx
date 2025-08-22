import { Project } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectAttributes = ({
  title,
  values,
}: {
  title: string;
  values: string[];
}) => {
  return (
    <div className="flex items-center gap-2 font-medium mt-2 ">
      <h4>{title}: </h4>
      <div className="flex items-center gap-1 mt-1">
        {values.map((value, valueIndex) => (
          <span
            key={valueIndex}
            className="text-xs bg-gray-50/10 rounded-full px-2 py-1"
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.link || "#"}
      target="_blank"
      className="mb-3 py-2 flex items-start gap-3 cursor-pointer"
    >
      <Image
        src={project.logo}
        alt={`${project.title} logo`}
        width={50}
        height={50}
        className="rounded-xl"
      />
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <div className="text-gray-400">
            <div className="flex items-center gap-2">
              {project.status.map((status, statusIndex) => (
                <span
                  key={statusIndex}
                  className="text-xs bg-gray-50/10 rounded-full px-2 py-1"
                >
                  {status}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500">{project.description}</p>
        <div className="text-gray-400">
          <ProjectAttributes
            title="Technologies"
            values={project.technologies}
          />
          <ProjectAttributes title="Type" values={project.type} />
          <ProjectAttributes title="Domain" values={project.domain} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectDetails;

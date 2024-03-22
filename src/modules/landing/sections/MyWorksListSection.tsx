import { ForwardedRef, forwardRef, useState } from "react";
import "./MyWorksListSection.scss";
import { projects } from "../consts";
import { IProject } from "../types";

const MyWorksListSection = forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    console.log(props);

    return (
      <div className="myWorksList" ref={ref}>
        <div className="myWorksList__content">
          <div className="myWorksList__content--title">Featured Works</div>
        </div>
        <div className="myWorksList__projects">
          {projects.map((project: IProject, i: number) => {
            return (
              <a
                href={
                  project.productionLink
                    ? project.productionLink
                    : project.sourceCodeLink
                }
                target="_blank"
                className="myWorksList__projects--project"
                key={`myProjectsList-project-${i + 1}`}
                onMouseOver={() => setActiveProject(i)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* <div
                  className="myWorksList__projects--project-img"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                  }}
                /> */}
                <div className="myWorksList__projects--project-img-wrapper">
                  <img
                    className={`myWorksList__projects--project-img ${
                      activeProject === i ? "active" : ""
                    }`}
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <h2 className="myWorksList__projects--project-title">
                  {project.title}
                </h2>
                <h4 className="myWorksList__projects--project-subtitle">
                  {project.type}
                </h4>
                <div className="myWorksList__projects--project-tags">
                  {project.tags.map((tag) => {
                    return (
                      <p className="myWorksList__projects--project-tags-tag">
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
);

export default MyWorksListSection;

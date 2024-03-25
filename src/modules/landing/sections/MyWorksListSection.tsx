import { ForwardedRef, forwardRef, useState } from "react";
import "./MyWorksListSection.scss";
import { PROJECT_TAGS, projects } from "../consts";
import { IProject, IProjectTags } from "../types";

const MyWorksListSection = forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [projectsList, setProjectsList] = useState(projects);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSwitch = (tab: IProjectTags) => {
      let filteredProjects = projects;
      if (tab !== "all")
        filteredProjects = projects.filter((project) =>
          project.tags.includes(tab)
        );
      setProjectsList(filteredProjects);
    };

    return (
      <div className="myWorksList" ref={ref}>
        <div className="myWorksList__content">
          <div className="myWorksList__content--title">Featured Works</div>
        </div>
        <div className="myWorksList__tabs">
          <div
            className={`myWorksList__tabs-tab ${
              activeTab == 0 ? "active" : ""
            }`}
            key={`my-works-list-tab-${0}`}
            onClick={() => {
              handleTabSwitch("all");
              setActiveTab(0);
            }}
          >
            {"All"}
          </div>
          {Object.values(PROJECT_TAGS).map((tag, i) => {
            return (
              <div
                className={`myWorksList__tabs-tab ${
                  activeTab == i + 1 ? "active" : ""
                }`}
                key={`my-works-list-tab-${i + 1}`}
                onClick={() => {
                  handleTabSwitch(tag);
                  setActiveTab(i + 1);
                }}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div className="myWorksList__projects">
          {projectsList.map((project: IProject, i: number) => {
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
                  {project.tags.map((tag, i) => {
                    return (
                      <p
                        className="myWorksList__projects--project-tags-tag"
                        key={`myWorksList__projects--project-tags-tag-${i + 1}`}
                      >
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

import { workList } from "../consts";
import { IWork } from "../types";
import "./WorkSection.scss";

const WorkSection = () => {
  return (
    <div className="work">
      <div className="work__img">
        <img src="/assets/images/work.jpg" alt="work-background" />
      </div>
      <div className="work__content">
        <h1 className="work__content--title">WORK EXPERIENCE</h1>
        {workList.map((work: IWork) => {
          return (
            <div className="work__content--work">
              <h3 className="work__content--work-organization">
                <a href={work.link} target="_blank">
                  {work.organization}
                </a>
              </h3>
              <div className="work__content--work-details">
                <span className="work__content--work-details-designation">
                  {work.designation}
                </span>
                <span className="work__content--work-details-startYear">
                  {work.startingYear}
                </span>

                {work.startingYear !== work.endYear && (
                  <>
                    {work.endYear && <span>-</span>}
                    <span className="work__content--work-details-endYear">
                      {work.endYear}
                    </span>
                  </>
                )}

                {!work.endYear && (
                  <>
                    <span>-</span>
                    <span className="work__content--work-details-present">
                      Present
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSection;

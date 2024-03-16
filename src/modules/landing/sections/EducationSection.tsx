import { educationList } from "../consts";
import { IEducation } from "../types";
import "./EducationSection.scss";

const EducationSection = () => {
  return (
    <div className="education">
      <div className="education__content">
        <h1 className="education__content--title">EDUCATION</h1>
        {educationList.map((education: IEducation, i: number) => {
          return (
            <div
              className="education__content--education"
              key={`eduation-item-${i + 1}`}
            >
              <h3 className="education__content--education-course">
                {education.course} ({education.mark} {education.markType})
              </h3>
              <div className="education__content--education-details">
                <span className="education__content--education-details-institution">
                  {education.institution}, {education.location}
                </span>
                <span className="education__content--education-details-startYear">
                  {education.startingYear}
                </span>

                {education.startingYear !== education.endYear && (
                  <>
                    <span>-</span>
                    <span className="education__content--education-details-endYear">
                      {education.endYear}
                    </span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="education__img">
        <img src="/assets/images/education.jpg" alt="education-background" />
      </div>
    </div>
  );
};

export default EducationSection;

import AboutMeSection from "../sections/AboutMeSection";
import EducationSection from "../sections/EducationSection";
import HeaderSection from "../sections/HeaderSection";
import WorkSection from "../sections/WorkSection";

const LandingPage = () => {
  return (
    <div className="landing">
      <HeaderSection />
      <AboutMeSection />
      <EducationSection />
      <WorkSection />
    </div>
  );
};

export default LandingPage;

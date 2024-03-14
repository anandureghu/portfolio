import AboutMeSection from "../sections/AboutMeSection";
import EducationSection from "../sections/EducationSection";
import HeaderSection from "../sections/HeaderSection";

const LandingPage = () => {
  return (
    <div className="landing">
      <HeaderSection />
      <AboutMeSection />
      <EducationSection />
    </div>
  );
};

export default LandingPage;

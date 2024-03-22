import { useRef } from "react";
import AboutMeSection from "../sections/AboutMeSection";
import HeaderSection from "../sections/HeaderSection";
import MyWorksSection from "../sections/MyWorksSection";
import MyWorksListSection from "../sections/MyWorksListSection";
import ContactSection from "../sections/ContactSection";

const LandingPage = () => {
  const myWorksListSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToMyWorks = () => {
    myWorksListSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing">
      <HeaderSection />
      <AboutMeSection />
      <MyWorksSection scrollToMyWorksList={scrollToMyWorks} />
      <MyWorksListSection ref={myWorksListSectionRef} />
      <ContactSection />
    </div>
  );
};

export default LandingPage;

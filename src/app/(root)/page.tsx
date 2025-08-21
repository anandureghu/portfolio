import Contact from "@/sections/root/contact";
import Experience from "@/sections/root/experience";
import HeaderSection from "@/sections/root/header";
import Skills from "@/sections/root/skills";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

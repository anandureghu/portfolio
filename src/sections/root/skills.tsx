import SkillsSlider from "@/components/skills-slider";
import { getSkills } from "@/lib/utils";
import React from "react";

const Skills = async () => {
  const skills = await getSkills();
  return (
    <div className="">
      <SkillsSlider skills={skills} />
    </div>
  );
};

export default Skills;

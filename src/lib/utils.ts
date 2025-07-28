import { Skill } from "@/types/common";
import { readdir } from "fs/promises";
import path from "path";

// Function to fetch skills
export const getSkills = async (): Promise<Skill[]> => {
  const skillsDirectory = path.join(process.cwd(), "public", "svg", "skills");

  try {
    const files: string[] = await readdir(skillsDirectory);

    const skills: Skill[] = files
      .filter((file) => file.endsWith(".svg"))
      .map((file) => ({
        name: file.replace(".svg", ""),
        icon: `/svg/skills/${file}`,
      }));

    return skills;
  } catch (err) {
    console.error("Could not list the directory.", err);
    return [];
  }
};

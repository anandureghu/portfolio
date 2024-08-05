"use client";
import React from "react";
import HeaderSection from "./(sections)/HeaderSection";
import ProjectsSection from "./(sections)/ProjectsSection";

const page = () => {
  return (
    <main className="bg-black ">
      <HeaderSection />
      <ProjectsSection />
    </main>
  );
};

export default page;

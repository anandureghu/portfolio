"use client";
import React from "react";
import HeaderSection from "./(sections)/HeaderSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import ContactSection from "./(sections)/ContactSection";

const page = () => {
  return (
    <main className="bg-black ">
      <HeaderSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default page;

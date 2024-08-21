"use client";
import React from "react";
import HeaderSection from "./(sections)/HeaderSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import ContactSection from "./(sections)/ContactSection";
import FooterSection from "./(sections)/FooterSection";

const page = () => {
  return (
    <main className="bg-black ">
      <HeaderSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default page;

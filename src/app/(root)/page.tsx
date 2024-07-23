"use client";
import React from "react";
import HeaderSection from "./(sections)/HeaderSection";
import AboutSection from "./(sections)/AboutSection";

const page = () => {
  return (
    <main className="bg-black ">
      <HeaderSection />
      <AboutSection />
    </main>
  );
};

export default page;

import {
  Body,
  HighlightedTitle,
  Title,
} from "@/app/components/styled/typography";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-32 px-[5%] flex items-center justify-center flex-col"
    >
      <Title className="mx-auto text-center">
        The <HighlightedTitle>Journey</HighlightedTitle> So Far
      </Title>
      <Body className="mt-8 text-center max-w-screen-lg mx-auto">
        Results-driven React developer with close to 3 years of experience in
        building and scaling high- quality web applications. Proficient in
        React, Redux, Node.js, and Golang. Strong understanding of ES6, OOPS,
        and front-end development. Adept at backend development, working with
        APIs and databases. Proficient in containerization with Docker, GCP
        deployment, and CI/CD pipelines. Excellent problem-solving skills and a
        collaborative team player with a creative and analytical approach.
        Excited about leveraging strong programming skills and innovative
        thinking to contribute to cutting-edge solutions.
      </Body>
    </section>
  );
};

export default AboutSection;

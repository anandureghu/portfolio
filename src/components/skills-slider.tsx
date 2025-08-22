"use client";

import { Skill } from "@/types/common";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SkillsSliderProps {
  skills: Skill[];
}

interface SkillsListProps {
  skills: Skill[];
  className?: React.ComponentProps<"div">["className"];
}

const SkillsList = ({ skills, className }: SkillsListProps) => {
  return (
    <div className="flex items-center gap-5 no-scrollbar w-fit py-2 whitespace-nowrap">
      {skills?.map((skill) => (
        <div key={skill.name}>
          <Image
            src={skill.icon}
            width={50}
            height={50}
            className={`object-contain min-w-[50px] min-h-[50px] cursor-pointer ${className}`}
            alt={skill.name}
          />
        </div>
      ))}
    </div>
  );
};

const SkillsSlider = ({ skills }: SkillsSliderProps) => {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    if (!firstRef.current || !secondRef.current || !slider.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const animation = () => {
      if (!firstRef.current || !secondRef.current) return;

      if (xPercent <= -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;

      gsap.set(firstRef.current, { xPercent });
      gsap.set(secondRef.current, { xPercent });

      xPercent += 0.05 * direction;
      requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "0px",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={slider}
      className="relative overflow-y-auto flex gap-5 whitespace-nowrap no-scrollbar"
    >
      <div ref={firstRef} className="pr-5">
        <SkillsList skills={skills} />
      </div>
      <div ref={secondRef} className="absolute translate-x-full">
        <SkillsList skills={skills} />
      </div>
    </div>
  );
};

export default SkillsSlider;

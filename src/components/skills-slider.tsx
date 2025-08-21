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
      {skills?.map((skill) => {
        return (
          <div key={skill.name} className="">
            <Image
              src={skill.icon}
              width={50}
              height={50}
              className={`object-contain min-w-[50px] min-h-[50px] cursor-pointer ${className}`}
              alt={skill.name}
            />
          </div>
        );
      })}
    </div>
  );
};

const SkillsSlider = ({ skills }: SkillsSliderProps) => {
  const fistRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(fistRef.current, { xPercent: xPercent });
    gsap.set(secondRef.current, { xPercent: xPercent });

    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div
      ref={slider}
      className="relative overflow-y-auto flex gap-5 whitespace-nowrap no-scrollbar"
    >
      <div ref={fistRef} className="pr-5">
        <SkillsList skills={skills} className="" />
      </div>
      <div ref={secondRef} className="absolute transform translate-x-full">
        <SkillsList skills={skills} className="" />
      </div>
    </div>
  );
};

export default SkillsSlider;

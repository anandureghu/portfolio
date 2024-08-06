"use client";
import { BackgroundBeams } from "@/app/components/beams/BackgroundBeams";
import Button from "@/app/components/button/Button";
import GlowingButton from "@/app/components/button/GlowingButton";
import VanishInput from "@/app/components/input/VanishInput";
import { Body, HighlightedTitle } from "@/app/components/styled/typography";
import React, { useRef, useState } from "react";

function ContactSection() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % 1);
    }, 3000);
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold flex items-end gap-3">
          <HighlightedTitle className="text-lg md:text-7xl ">
            Reach
          </HighlightedTitle>
          Out to Me
        </h1>
        <p></p>
        <Body className="text-neutral-400 max-w-lg mx-auto my-2 text-center relative z-10">
          Have questions, opportunities, or just want to say hello? Don&apos;t
          hesitate to get in touch. I&apos;m always open to connecting with
          like-minded individuals and potential collaborators.
        </Body>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <VanishInput
              placeholders={["Name"]}
              onChange={() => {}}
              intervalRef={intervalRef}
              currentPlaceholder={currentPlaceholder}
              startAnimation={startAnimation}
            />
            <VanishInput
              placeholders={["example@mail.com"]}
              onChange={() => {}}
              intervalRef={intervalRef}
              currentPlaceholder={currentPlaceholder}
              startAnimation={startAnimation}
            />
          </div>
          <VanishInput
            placeholders={["Message"]}
            onChange={() => {}}
            as={"textarea"}
            backgroundStyles={"h-[100px] rounded-[30px] py-3"}
            intervalRef={intervalRef}
            currentPlaceholder={currentPlaceholder}
            startAnimation={startAnimation}
          />
          <GlowingButton className="py-3 text-xl" onClick={startAnimation}>
            Connect
          </GlowingButton>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ContactSection;

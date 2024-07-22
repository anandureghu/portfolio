"use client";
import { HeroHighlight } from "@/app/components/highlight/HeroHighlight";
import { Highlight } from "@/app/components/highlight/Highlight";
import { motion } from "framer-motion";

function HeaderSection() {
  return (
    <HeroHighlight containerClassName="h-screen">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=""
      >
        <p className="text-lg px-4 md:text-2xl lg:text-3xl font-medium text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto lowercase">
          Hey There 👋
        </p>
        <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
          <span>I&apos;m</span> Anandu Reghu
        </h1>
        <br />
        <div className="w-fit mx-auto">
          <Highlight className="text-black dark:text-white text-lg px-4 md:text-2xl lg:text-3xl font-bold py-2 font-poppins">
            Designer & Developer
          </Highlight>
        </div>
      </motion.div>
    </HeroHighlight>
  );
}

export default HeaderSection;

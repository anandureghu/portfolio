import React from "react";
import GlimpseSVG from "@/icons/glimpse.svg?url";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-[100px]">
      <p className="text-center text-sm text-gray-500 flex items-center gap-1 w-fit mx-auto">
        © {new Date().getFullYear()} anandureghu{" "}
        <Image
          src={GlimpseSVG as string}
          width={10}
          height={10}
          alt="glimpse-icon"
          className="mt-1 grayscale"
        />
        Anandu Reghu
      </p>
    </footer>
  );
};

export default Footer;

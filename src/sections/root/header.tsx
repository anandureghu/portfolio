import Image from "next/image";
import Link from "next/link";
import React from "react";
import Instagram from "@/icons/instagram.svg?url";
import LinkedIn from "@/icons/linkedin.svg?url";
import Github from "@/icons/github.svg?url";

const HeaderSection = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "https://www.github.com/anandureghu/",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anandureghu/",
      icon: LinkedIn,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/theanandureghu/",
      icon: Instagram,
    },
  ];
  return (
    <>
      <main className="flex items-center justify-center pt-[120px] pb-[100px]">
        <div className="">
          <div className="text-5xl max-md:text-3xl font-highlight">
            <div className="max-md:flex max-md:flex-row max-md:items-center max-md:gap-1 max-sm:flex-wrap">
              <span className="flex items-center gap-5 font-light">
                <h1>Hi, I&apos;m</h1>
                <span className="flex items-center gap-2">
                  <Image
                    src="/assets/profile.jpeg"
                    width={50}
                    height={50}
                    className="object-cover rounded-full max-md:w-[35px] max-md:h-[35px]"
                    alt="anandureghu"
                  />
                  <h1 className="font-semibold">Anandu Reghu,</h1>
                </span>
              </span>

              <h2 className="">
                founder <span className="font-sign">&</span> wizard at
              </h2>
            </div>
            <h1 className="font-body text-7xl font-semibold text-gd-secondary mt-1">
              PiCOMiNDS.
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-5 mt-5">
              {socialLinks.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className="text-white opacity-30 hover:opacity-100 transition-opacity duration-150 flex items-center gap-2 hover:animate-bounce "
                  >
                    <Image
                      src={link.icon as string}
                      alt={link.name}
                      width={20}
                      height={20}
                    />
                    <span className="">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="text-xl mt-5 font-body">
            A wizard who loves design and code. I tell stories through my
            designs and illustrations. I spend most of my time designing for
            brands and creating design resources and tools. And now, making my
            own game.
          </p>
          <h3 className="text-xl mt-5 font-body text-gray-600">
            Building what I love at{" "}
            <Link
              href={"https://picominds.vercel.app"}
              target="_blank"
              className="text-gd-highlight"
            >
              @picominds
            </Link>
          </h3>
        </div>
      </main>
    </>
  );
};

export default HeaderSection;

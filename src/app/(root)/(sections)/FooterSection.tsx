import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const FooterSection = () => {
  const items = [
    {
      name: "Github",
      link: "https://github.com/anandureghu",
      icon: <BsGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/anandureghu",
      icon: <BsLinkedin />,
    },
  ];
  return (
    <footer className="text-white py-10 px-[5%] bg-black flex justify-around items-center">
      <p className="font-semibold text-xl w-fit">anandureghu</p>
      {items.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.link}
            target="_blank"
            className="flex items-center gap-3 hover:text-violet-300"
          >
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </Link>
        );
      })}
    </footer>
  );
};

export default FooterSection;

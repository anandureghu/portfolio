"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      if (
        !target.closest("nav-links") &&
        target.id !== "nav-links-button" &&
        isOpen
      ) {
        setIsOpen(false);
      }
    });
    return () => {
      document.removeEventListener("click", () => {});
    };
  }, [isOpen]);

  return (
    <div className="hidden max-sm:block relative">
      <span
        className={`mx-1 text-sm opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 ease-in py-2 px-2 max-sm:px-0 max-sm:py-0 ${
          isOpen ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        id="nav-links-button"
      >
        links{" "}
        <Image
          src={"/svg/arrow-down.svg"}
          width={15}
          height={15}
          alt="arrow-down"
          className="inline-block"
        />
      </span>

      <div
        className={`absolute top-7 right-0 z-50  rounded-sm p-0 min-w-20 h-0 ${
          isOpen
            ? "h-auto p-4 py-3 bg-glass bg-black/75 backdrop-blur-lg"
            : "bg-transparent"
        } transition-all duration-300 ease-in-out overflow-hidden`}
        id="nav-links"
      >
        <div className="flex flex-col items-start justify-start">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mb-1 w-full text-sm text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200 ease-in py-2 px-2 border-b border-b-white/10 last:border-b-0"
              scroll={true}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;

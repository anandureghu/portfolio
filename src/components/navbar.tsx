import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative top-[20px] left-1/2 transform -translate-x-1/2 w-full app-container px-[30px] py-[10px] rounded-full glass z-50">
      <div className="app-container flex items-center justify-between">
        <div className="relative w-fit">
          <h1 className="font-sign text-4xl transform -translate-y-[5px] font-semibold -rotate-2 w-fit relative z-1">
            anandureghu
          </h1>
          <Image
            src="/svg/underline.svg"
            width={60}
            height={20}
            className="object-contain absolute bottom-2 left-1/2 transform -translate-x-1/2"
            alt="underline"
          />
        </div>
        <div className="flex items-center justify-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mx-1 text-sm text-gray-400 hover:text-gray-50 cursor-pointer transition-colors duration-200 ease-in py-5 px-2 max-sm:px-0"
              scroll={true}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

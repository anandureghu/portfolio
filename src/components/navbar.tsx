import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative top-[20px] left-1/2 transform -translate-x-1/2 w-full app-container px-[30px] py-[10px] rounded-full glass">
      <div className="app-container">
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
      </div>
    </div>
  );
};

export default Navbar;

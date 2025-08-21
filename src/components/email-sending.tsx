import Image from "next/image";
import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const EmailSending = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    timeline
      .to("#sending", {
        x: 15,
        scale: 2,
        duration: 1,
        ease: "power1.out",
      })
      .to("#sending", {
        x: 45,
        scale: 1,
        duration: 1,
        ease: "power1.in",
      });
  });
  return (
    <div className="h-fit w-fit animate-bounce relative">
      <Image src={"/svg/email.svg"} width={100} height={100} alt="email" />
      <div className="w-[50px] h-[50px] bg-yellow-100 border-3 border-yellow-400 absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 rounded-full">
        <div className="h-full w-full bg-red relative overflow-hidden">
          <Image
            id="sending"
            src={"/svg/sending.svg"}
            width={15}
            height={15}
            alt="email"
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSending;

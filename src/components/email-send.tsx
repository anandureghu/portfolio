import Image from "next/image";
import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const EmailSend = () => {
  const tick = React.useRef<SVGSVGElement>(null);
  const tickPath = React.useRef<SVGPathElement>(null);

  useGSAP(() => {
    const tickLength = tickPath.current?.getTotalLength() || 0;

    gsap.set(tickPath.current, { strokeDasharray: tickLength });

    const timeline = gsap.timeline();
    timeline
      .to("#circle", {
        borderColor: "oklch(62.7% 0.194 149.214)",
        duration: 1,
      })
      .to(
        "#success-circle",
        {
          width: 44,
          height: 44,
          backgroundColor: "oklch(79.2% 0.209 151.711)",
          x: 30,
          y: -30,
          duration: 1,
          opacity: 1,
          borderRadius: "50%",
          ease: "power1.inOut",
        },
        "<"
      )
      .fromTo(
        tickPath.current,
        {
          strokeDashoffset: tickLength,
        },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=0.7"
      );
  });
  return (
    <div className="h-fit w-fit relative">
      <Image src={"/svg/email.svg"} width={100} height={100} alt="email" />
      <div
        id="circle"
        className="w-[50px] h-[50px] bg-yellow-100 border-3 border-yellow-400 absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 rounded-full overflow-hidden"
      >
        <div className="h-full w-full bg-red relative overflow-hidden">
          <div
            id="success-circle"
            className="absolute -bottom-[30px] -left-[30px] rounded-full opacity-0"
          >
            {" "}
          </div>

          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={tick}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
          >
            <path
              d="M3 15.5L11 22L29.5 2.5"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              ref={tickPath}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EmailSend;

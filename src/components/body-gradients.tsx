import React from "react";

interface BodyGradientProps {
  className?: React.ComponentProps<"div">["className"];
}

const BodyGradient = ({ className }: BodyGradientProps) => {
  return (
    <div
      className={`min-w-[900px] min-md:max-w-[600px] min-sm:max-w-[400px] fixed min-h-[15vw] rounded-full bg-gradient-to-r from-indigo-600/30 to-pink-500/30 blur-3xl ${className}`}
    ></div>
  );
};

const BodyGradients = () => {
  return (
    <>
      <BodyGradient className="top-[0px] left-1/2 transform -translate-1/2" />
      <BodyGradient className="bottom-[0px] left-1/2 transform -translate-x-1/2 translate-y-[13vw]" />
    </>
  );
};

export default BodyGradients;

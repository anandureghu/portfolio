import React from "react";

interface BodyGradientProps {
  className?: React.ComponentProps<"div">["className"];
}

const BodyGradients = ({ className }: BodyGradientProps) => {
  return (
    <div
      className={`min-w-[900px] max-md:min-w-[600px] max-sm:min-w-full min-h-[15vw] max-md:min-h-[5vw] max-sm:min-h-[200px] absolute rounded-full bg-gradient-to-r from-indigo-600/30 to-pink-500/30 blur-3xl ${className}`}
    ></div>
  );
};

export default BodyGradients;

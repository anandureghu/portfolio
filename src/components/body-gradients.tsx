import React from "react";

interface BodyGradientProps {
  className?: React.ComponentProps<"div">["className"];
}

const BodyGradients = ({ className }: BodyGradientProps) => {
  return (
    <div
      className={`min-w-[900px] min-md:max-w-[600px] min-sm:max-w-[400px] min-h-[15vw] absolute rounded-full bg-gradient-to-r from-indigo-600/30 to-pink-500/30 blur-3xl ${className}`}
    ></div>
  );
};

export default BodyGradients;

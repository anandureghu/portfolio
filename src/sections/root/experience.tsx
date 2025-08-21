import Image from "next/image";
import Link from "next/link";
import React from "react";

const experienceData = [
  {
    title: "Freelancer",
    company: "PiCOMiNDS",
    duration: "May 2025 - Present",
    description: "Developing web applications using React and Node.js.",
    logo: "/svg/company/picominds.jpg",
    link: "https://picominds.vercel.app",
  },
  {
    title: "Senior Software Engineer",
    company: "KeyValue Software Systems",
    duration: "Mar 2025 - May 2025",
    description: "Developing web applications using React and Node.js.",
    logo: "/svg/company/keyvalue.svg",
    link: "https://keyvalue.systems",
  },
  {
    title: "Senior Software Engineer",
    company: "QBurst",
    duration: "Oct 2020 - Mar 2025",
    description:
      "Worked on UI/UX design and implementation for various projects.",
    logo: "/svg/company/qburst.png",
    link: "https://qburst.com",
  },
];

const Experience = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="uppercase text-gray-700 font-semibold">Experience</h1>
      <div className="mt-4">
        {experienceData.map((exp, index) => (
          <Link
            href={exp.link}
            target="_blank"
            key={index}
            className="mb-3 py-2 flex items-center gap-3 cursor-pointer"
          >
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={50}
              height={50}
              className="rounded-xl"
            />
            <div>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <div className="flex items-center gap-2 font-medium">
                <h2 className="text-xl">{exp.title}</h2>
                <span className="">@</span>
                <h3 className="text-lg ">{exp.company}</h3>
                <Image
                  src="/svg/redirect.svg"
                  alt="arrow right"
                  width={20}
                  height={20}
                  className="opacity-50"
                />
              </div>
            </div>
            {/* <p className="mt-2 text-gray-700">{exp.description}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;

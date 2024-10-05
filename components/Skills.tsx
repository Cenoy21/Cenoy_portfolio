import React from "react";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiFramer,
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";


const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaBootstrap size={140} />, label: "Bootstrap" },
  { icon: <RiTailwindCssFill size={140} />, label: "Tailwind CSS" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },
  { icon: <FaReact size={110} />, label: "React.js" },
  { icon: <RiNextjsFill size={110} />, label: "Next.js" },
  { icon: <SiRedux size={130} />, label: "Redux" },
  { icon: <SiMui size={110} />, label: "Material UI" },
  { icon: <SiFramer size={130} />, label: "Framer Motion" },
  { icon: <FaNode size={130} />, label: "Node.js" },
  { icon: <SiExpress size={130} />, label: "Express.js" },
  { icon: <SiMongodb size={130} />, label: "MongoDB" },
  { icon: <SiMysql size={130} />, label: "MySQL" },
  { icon: <SiPostman size={130} />, label: "Postman" },
  { icon: <IoLogoGithub size={130} />, label: "Git" },
];

const Skills = () => {
  return (
    <div
      className="bg-gradient-to-b from-black to-[#381a5f_80%] py-32"
      style={{
        backgroundImage: "linear-gradient(to bottom, #000, #381a5f 80%)",
      }}
      id="skills"
    >
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div
              className="h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl"
              key={index}
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

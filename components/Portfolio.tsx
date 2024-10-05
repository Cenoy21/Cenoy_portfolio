"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pranavam from "../assets/pranavam.png";
import crm from "../assets/crm.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Pranavam (HMS)",
    description:
      "The Hospital Management System (HMS) is designed to streamline outpatient services, featuring two primary modules: Admin and Doctor. The system allows administrators to manage patients and doctors efficiently by adding, editing, and deleting records, scheduling appointments, and handling billing. Doctors have access to daily patient lists, consultation tools, and can manage prescriptions, track visit histories, and upload important medical documents. This system enhances the overall healthcare workflow, improving patient satisfaction and operational efficiency.",
    devStack: "React.js | Bootstrap | Python | Django",
    link: "https://pranavam-beta.foxa.in",
    git: "#",
    src: pranavam,
  },
  {
    title: "CRM",
    description:
      "Contributed as a frontend developer to the development of a CRM system designed for efficient lead, staff, task, customer, and call management. The project aimed to enhance business processes with seamless user interfaces and smooth integrations. Collaborated with the team to implement frontend features and integrate Meta for automated lead generation.",
    devStack: "React.js | Bootstrap | Python | Django",
    link: "https://crm-beta.vozlead.in/register",
    git: "#",
    src: crm,
  },
  {
    title: "Portfolio",
    description:
      "Developed a personal portfolio website from scratch to showcase my skills, projects, and experience. Built with a responsive design, optimized for all devices, and crafted with a clean, modern user interface to highlight my work as a developer and trainer.",
    devStack: "React.js | Next.js | Framer Motion | Tailwind CSS",
    link: "#",
    git: "#",
    src: portfolio,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52 pb-20"
      id="projects"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Project <span className="text-orange-400">Contributions</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 === 1
                ? "md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.description}
              </p>
              <p className="text-xl text-orange-500 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-fill border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div
      className="py-24 relative overflow-clip bg-gradient-to-b from-black to-[#DBAF6E]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)",
      }}
    >
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
      bg-[radial-gradient(closest-side,_#000_80%,_#2B1942)]"
      ></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Cenoy</h1>
        </div>
        <motion.div className="hidden md:block absolute left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="hidden md:block absolute right-[220px] top-[20px]" drag>
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 ">
          I am a full-stack developer focused on creating websites that provides
          the best experience for users.
        </p>
        <Image
          src={profilepic}
          alt="profile"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div variants={slideInFromLeft(0.5)}>
        <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Skills
        </h1>
      </motion.div>
    </div>
  );
};

export default SkillText;

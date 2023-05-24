import React from "react";
import { motion } from "framer-motion";
import {
  CSS,
  Git,
  HTML,
  Javascript,
  ReactJS,
  Tailwind,
  Firebase,
  NextJs,
} from "./Icons";

/*
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-5 shadow-dark absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
    >
      {name}
    </motion.div>
  );
}
*/

const Skills = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" font-bold text-8xl mt-64 mb-32 w-full text-center text-dark"
      >
        Skills
      </motion.h2>

      <div className="w-full h-[20vh] flex items-center justify-between mt-10  ">
        <motion.div
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <CSS className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">CSS</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
        >
          <HTML className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">HTML</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
        >
          <Javascript className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">Javascript</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-500 ease-linear"
        >
          <Git className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">Git</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
        >
          <ReactJS className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">React</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
        >
          <Tailwind className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">Tailwind</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
        >
          <Firebase className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">Firebase</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear"
        >
          <NextJs className="w-24 h-24 m-4" />
          <h2 className="text-2xl font-bold text-dark/75">Next.JS</h2>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;

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
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="m-16 lg:m-8 md:m-4 sm:m-2 xs:m-1">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" font-bold text-8xl mt-64 mb-32 w-full text-center  text-dark dark:text-light
        lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 md:mt-32 uppercase "
      >
        {t("Skills.title")}
      </motion.h2>

      <div className="w-full h-auto flex items-center justify-center mt-10 flex-wrap xl:justify-center  ">
        <motion.div
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <CSS className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            CSS
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
        >
          <HTML className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            HTML
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
        >
          <Javascript className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            Javascript
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-500 ease-linear m-4"
        >
          <Git className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            Git
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
        >
          <ReactJS className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            React
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
        >
          <Tailwind className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            Tailwind
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
        >
          <Firebase className="w-24 h-24 m-4 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            Firebase
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center hover:animate-bounce duration-200 ease-linear m-4"
        >
          <NextJs className="w-24 h-24 m-4 dark:fill-white lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10" />
          <h2 className="text-2xl font-bold text-dark/75 dark:text-light md:text-base sm:text-sm">
            Next.JS
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons referece={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ durantion: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl">
          {position}
          {""}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary dark:text-primaryDark  capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 ">
          {time} | {address}
        </span>
        <p className=" font-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" font-bold text-8xl mb-64 w-full text-center text-dark dark:text-light"
      >
        Education & Experience
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-[35px] top-1 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Software Engineer"}
            company={"Google"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Google"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Google"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Google"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"Google"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
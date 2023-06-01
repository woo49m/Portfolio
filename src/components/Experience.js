import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcons referece={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ durantion: 0.5, type: "spring" }}
      >
        <h3 className="mb-2 capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary dark:text-primaryDark  capitalize"
          >
            {company}
          </a>
        </h3>
        <span className=" capitalize font-medium  text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <div className="text-lg mt-2 font-medium w-full md:text-sm ">
          {work}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 lg:my-56 sm:my-36">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" font-bold text-8xl mb-40 mt-32 w-full text-center text-dark dark:text-light
        lg:!text-7xl sm:!text-6xl xs:!text-4xl uppercase lg:mb-32 sm:mb-20 "
      >
        Learning & Project Experience
      </motion.h2>
      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[100%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-[35px] top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2xp] md:left-[28px] xs:left-[18px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Front End Developer"}
            company={""}
            time={"After Graduated"}
            address={"Jan 2023 - Present"}
            work={
              <ul className=" list-disc pl-5">
                <li>
                  Possess basic web development abilities in <b>Javascript</b>
                  ,&nbsp; <b>HTML</b>, and <b>CSS</b>
                </li>
                <li>
                  Use <b>React</b> framework and related kits to develop
                  websites
                </li>
                <li>
                  Use <b>CRA</b>, <b>Vite</b>, <b>Next.js</b> as React
                  development frameworks
                </li>
                <li>
                  Use <b>Firebase</b> as the backend database for API connection
                </li>
                <li>
                  Basic knowledge of <b>Git</b>
                </li>
                <li>Accumulated so far 5 web related works</li>
              </ul>
            }
          />
          <Details
            position={"Start up a business"}
            company={" @TIDera"}
            time={"After Graduated"}
            address={"Sep 2022 - Dec 2022"}
            work={
              <ul className="list-disc pl-5">
                <li>
                  TIDera is a team consisted of three people. We spent about a
                  year discussing startup projects and content, and executed the
                  project for three months
                </li>
                <li>Responsible for AI training and user app development</li>
                <li>
                  The project was eventually halted due to one of the team
                  members choosing to leave the team
                </li>
              </ul>
            }
          />
          <Details
            position={"Acting a short Film - It's raining "}
            company={"@Beijing"}
            time={"Graduated"}
            address={"August 2022 - Sep 2022"}
            work={
              <ul className="list-disc pl-5">
                <li>The leading actor in the play</li>
                <li>Finalized for various film festivals and won awards</li>
              </ul>
            }
          />
          <Details
            position={"Thesis project development"}
            company={" @NCKU"}
            time={"Master Degree"}
            address={"Jan 2022 - July 2022"}
            work={
              <ul>
                <li>
                  <b>Project Detail : </b>
                  <ul className=" list-square pl-5">
                    <li>
                      <b>Title : </b> Application of MR and AI to Develop an
                      Opening Safety Inspection System
                    </li>
                    <li>
                      <b>Purpose : </b> Through the use of MR equipment and the
                      combination of artificial intelligence, the problems of
                      missing and redundant operation information of security
                      personnel on construction sites in the past have been
                      improved
                    </li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>Skills : </b>
                  <ul className=" list-outsude list-square  pl-5">
                    <li>
                      Use C# language to program in Unity development
                      environment and create user interface
                    </li>
                    <li>
                      Establish a Mask-RCNN artificial intelligence model using
                      Python language for image recognition and segmentation
                    </li>
                    <li>
                      Use Python language and Scikit-Learn package to assist in
                      the development of security judgment algorithms
                    </li>
                    <li>Use Firebase Database to store information</li>
                  </ul>
                </li>
              </ul>
            }
          />
          <Details
            position={"TSMC project"}
            company={" @NCKU & TSMC"}
            time={"Master Degree"}
            address={"May 2021 - Dec 2021"}
            work={
              <ul>
                <li>
                  <b>Project Detail : </b>
                  <ul className=" list-square pl-5">
                    <li>
                      <b>Title : </b> Intelligent security detection system
                    </li>
                    <li>
                      <b>Purpose : </b> Through the collection of point cloud of
                      daily new construction progress, the project system will
                      automatically doing safety inspection
                    </li>
                    <li>
                      <b>Others : </b> Weekly project meetings with owner for
                      progress reports and requirements adjustments
                    </li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>Skills : </b>
                  <ul className=" list-outsude list-square  pl-5">
                    <li>
                      Establishing Security Decision Algorithms and Guidelines
                      Using Python
                    </li>
                    <li>Use C# language to develop user interface in Unity </li>
                    <li>
                      Use Python language and Scikit-Learn package to assist in
                      the development of security judgment algorithms
                    </li>
                    <li>Point cloud data processing capability</li>
                  </ul>
                </li>
              </ul>
            }
          />
          <Details
            position={"Building Infotmation Model project"}
            company={" @NCKU"}
            time={"Master Degree"}
            address={"Nov 2020 - May 2022"}
            work={
              <ul>
                <li>
                  <b>Project Detail : </b>
                  <ul className=" list-square pl-5">
                    <li>
                      <b>Title : </b> Establish Mechanical, electrical, and
                      plumbing (MEP) 3D element.
                    </li>
                    <li>
                      <b>Purpose : </b> The completed MEP model will be combined
                      with XR equipment to enhance the practical application
                      value
                    </li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>Skills : </b>
                  <ul className=" list-outsude list-square  pl-5">
                    <li>Using Hololens 2 as MR device to apply in project</li>
                    <li>
                      Use C# language to develop interaction between reality
                      object and virtual object in Unity
                    </li>
                    <li>Use firebase database to store information</li>
                  </ul>
                </li>
              </ul>
            }
          />
          <Details
            position={"Learn from the past project knowledge of the laboratory"}
            company={" @NCKU"}
            time={"Master Degree"}
            address={"sep 2020 - Nov 2020"}
            work={
              <ul className=" list-disc pl-5">
                <li>Learn Python, C# basic language</li>
                <li>Learn about the application of AI CNN predictive models</li>
                <li>Learn Blockchain Concepts</li>
                <li>Learn Unity to develop XR applications</li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

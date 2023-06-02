import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Skills from "@/components/Skills";

import Experience from "@/components/Experience";
import HireMe from "@/components/HireMe";
import {
  motionValue,
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Ian | About Page</title>
        <meta name="description" content="anu description"></meta>
      </Head>
      <TransitionEffect />
      <HireMe />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Biography"}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="flex flex-col w-full items-center justify-center ">
            <div className="w-2/3 xl:w-3/4 md:w-4/5 sm:w-5/6 xs:w-full rounded-md bg-dark/75 dark:bg-gradient-to-tr from-gradient1 via-gradient2 to-gradient1 p-1 lg:p-[2px] shadow-md ">
              <div
                className="dark:bg-dark bg-light w-full rounded-md flex flex-col items-center justify-center p-10 md:p-5
               
             md:order-2 "
              >
                <h2 className="mb-1 text-2xl lg:text-xl font-bold  text-dark/75 dark:text-light/90">
                  Bechelor Degree
                </h2>
                <p className="text-xl lg:text-lg md:text-base sm:text-sm font-medium text-justify ">
                  Hi, My name is Ian. I am a lively and easy-going person, and
                  actively participate in many club activities during my
                  college. Due to my appeal and influence, I often serve as the
                  general convener or main cadre that make me have a lot of
                  experience in event planning and executing.
                </p>
                <h2 className="mb-1 mt-8 text-2xl lg:text-xl font-bold  text-dark/75 dark:text-light/90">
                  Master Degree
                </h2>
                <p className="text-xl lg:text-lg md:text-base sm:text-sm font-medium text-justify ">
                  In this two year, I have learned C#, Python, and written code
                  for two years. Ultimately, I developed two software related
                  projects and had experience in meeting project requirements
                  with owners. My fast learning ability and logical thinking
                  enable me to plan orderly and execute when even facing with
                  non-professional related projects. I have In the face of many
                  difficulties, I am not afraid of any challenges, and I am
                  willing to break through myself. During the process, I found
                  it very interesting and attractive to produce productive
                  things through logical knowledge and programming. and it
                  sparked my interest in information Engineering, which made me
                  finally choose to dedicate to it.
                </p>

                <h2 className="mb-1  mt-8 text-2xl lg:text-xl font-bold  text-dark/75 dark:text-light/90">
                  Graduated
                </h2>
                <p className="text-xl lg:text-lg md:text-base sm:text-sm font-medium  text-justify ">
                  At present, I have been self-studying front end web pages for
                  about five months. I am capable of front end languages, React
                  frameworks, CRA, Vite, Next.JS, TailwindCSS and other
                  development kits such as Rdeux, Router, etc. In the future, I
                  will not only keep learning more basic theory, back end
                  knowledge, and development tools, but also cultivate
                  development experience and design programming in order to
                  become an excellent web developer!
                </p>
              </div>
            </div>

            <div
              className=" mt-20 flex w-2/3 xl:w-3/4 md:w-4/5 sm:w-5/6 xs:w-full  justify-between
             xl:items-center md:order-3
            "
            >
              <div className="flex mx-2 flex-col justify-center items-end xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
                  Programming Year
                </h2>
              </div>
              <div className="flex mx-2 flex-col justify-center items-end xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex mx-2 flex-col justify-center items-end xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm">
                  web applications
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;

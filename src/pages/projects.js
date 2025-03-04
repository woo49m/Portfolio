import amazon from "../../public/images/projects/amazon.jpg";
import netflix from "../../public/images/projects/netflex.jpg";
import gpt from "../../public/images/projects/gpt.jpg";
import weather from "../../public/images/projects/weather.jpg";
import portfolio from "../../public/images/projects/portfolio.jpg";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon2 } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { useTranslation } from "react-i18next";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  const { t } = useTranslation();
  return (
    <article
      className="w-full flex items-center justify-between
     rounded-3xl  bg-light shadow-2xl p-12 relative dark:bg-dark
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={title}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
      ) : (
        <div className="w-1/2 overflow-hidden rounded-lg lg:w-full opacity-50 cursor-not-allowed">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      )}

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className={" hover:underline underline-offset-2 "}
        >
          <h2 className=" my-2 w-full text-left text-4xl font-bold sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="my-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon2 className=" hover:scale-125 hover:-translate-y-1 transition-all duration-100 " />
          </Link>
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg border-2 bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 
    text-lg font-semibold hover:bg-light hover:text-dark hover:border-dark hover:border-2
    hover:dark:text-light hover:dark:bg-dark hover:dark:border-light transition-all duration-100
    sm:px-4 sm:text-base"
            >
              {t("Project.visit")}
            </Link>
          ) : (
            <div className="ml-4 rounded-lg border-2 bg-gray-400 text-gray-700 p-2 px-6 text-lg font-semibold cursor-not-allowed sm:px-4 sm:text-base">
              尚未部署
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      bg-light p-6 relative shadow-2xl dark:bg-dark xs:p-4 "
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 dark:text-light">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full my-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold  hover:scale-105 hover:-translate-y-0.5 transition-all duration-100
            md:text-base
            "
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon2
              className={
                " hover:scale-125 hover:-translate-y-1 transition-all duration-100  "
              }
            />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Ian | Projects Page</title>
        <meta name="description" content="anu description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={t("Project.title")}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <motion.div
              className=" col-span-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <FeatureProject
                title={t("Project.Project1.title")}
                summary={t("Project.Project1.summary")}
                link="https://portfolio-dusky-kappa-49.vercel.app/"
                type={t("Project.Project1.type")}
                github="https://github.com/woo49m/Portfolio/tree/main"
                img={portfolio}
              />
            </motion.div>
            <motion.div
              className=" col-span-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <FeatureProject
                title={t("Project.Project2.title")}
                summary={t("Project.Project2.summary")}
                link="" //"https://netflix-clone-project-two.vercel.app/"
                type={t("Project.Project2.type")}
                github="https://github.com/woo49m/netflix_clone_project"
                img={netflix}
              />
            </motion.div>
            <motion.div
              className=" col-span-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <FeatureProject
                title={t("Project.Project3.title")}
                summary={t("Project.Project3.summary")}
                link={"https://clone-amazon-delta.vercel.app/"}
                type={t("Project.Project3.type")}
                github="https://github.com/woo49m/clone_amazon"
                img={amazon}
              />
            </motion.div>

            {/* <motion.div
              className=" col-span-12 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <FeatureProject
                title={t("Project.Project4.title")}
                summary={t("Project.Project4.summary")}
                link="https://realtime-weather-app-five.vercel.app/"
                type={t("Project.Project4.type")}
                github="https://github.com/woo49m/realtime-weather-app"
                img={weather}
              />
            </motion.div> */}
            <motion.div
              className=" col-span-12 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <FeatureProject
                title={t("Project.Project5.title")}
                summary={t("Project.Project5.summary")}
                link="https://layout-demo-gpt-3.vercel.app/"
                type={t("Project.Project5.type")}
                github="https://github.com/woo49m/Layout_Demo_GPT3/tree/main"
                img={gpt}
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

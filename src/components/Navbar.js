import React, { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  GithubIcon,
  GithubIcon2,
  Insta,
  Insta2,
  LanguageIcon,
  MoonIcon,
  SunIcon,
  Mail,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import { useTranslation } from "react-i18next";
import HireMe from "./HireMe";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} ${
        router.asPath === href
          ? "bg-dark text-light dark:bg-light p-3 dark:!text-dark dark:hover:bg-light/90 "
          : "dark:bg-dark dark:!text-light"
      } rounded-full relative group`}
    >
      {title}

      <span
        className={`h-[3px] bg-dark dark:bg-light
        absolute inline-block left-0 w-0 rounded-full -bottom-0.5  transition-all ease-linear duration-300
        ${router.asPath === href ? "" : "group-hover:w-full"} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleCLick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-4 `}
      onClick={() => handleCLick()}
    >
      {title}

      <span
        className={`h-[3px] dark:bg-dark bg-light
        absolute inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const [langisOpen, setlangisOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className=" w-full px-32 py-8 lg:py-16 md:py-[42px] md:px-8 font-medium flex 
    items-center justify-between dark:text-light relative z-10 lg:px-16 md:px12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={() => handleClick()}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-in-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink
            href="/"
            title={t("Footer.Home")}
            className="text-xl font-semibold mr-4"
          />
          <CustomLink
            href="/about"
            title={t("Footer.About")}
            className="text-xl font-semibold mx-4"
          />
          <CustomLink
            href="/projects"
            title={t("Footer.Project")}
            className="text-xl font-semibold mx-4"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            title="Github"
            href="https://github.com/woo49m"
            target={"_blank"}
            className="w-[50px] mr-6 flex items-center justify-center "
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon2 className="w-12 h-12" />
          </motion.a>
          <motion.a
            title="Facebook"
            href="https://www.facebook.com/profile.php?id=100006633998705"
            target={"_blank"}
            className="w-12 mr-6 flex items-center justify-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon className="w-12 h-12" />
          </motion.a>
          <motion.a
            title="Instagram"
            href="https://www.instagram.com/woo49m1128/"
            target={"_blank"}
            className="w-[50px] mr-6 flex items-center justify-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Insta2 />
          </motion.a>
          <motion.a
            title="Mail"
            href="mailto:woo49m@gmail.com"
            target={"_blank"}
            className="w-12 mr-6 flex items-center   justify-center "
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-12 h-12 dark:fill-light" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 w-11 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark w-12 h-12 "} />
            ) : (
              <MoonIcon className={"fill-dark w-12 h-12"} />
            )}
          </button>
          <div className="flex flex-col font-bold ">
            <div className="flex flex-row justify-center items-center ">
              <div
                className=" relative bg-gray-500 rounded-full mt-[0px] ml-6 mr-1 
            md:bg-gray-500 md:hover:bg-gray-400 p-[3px]
             dark:md:hover:bg-gray-400 dark:bg-light/75
            dark:hover:bg-light/75  hover:bg-dark/50 transition-all ease-in-out duration-100"
                onClick={() => setlangisOpen(!langisOpen)}
              >
                <div className=" w-full bg-dark rounded-full">
                  <LanguageIcon className=" cursor-pointer fill-light md:w-[38px]    w-[44px] translate-y-[4px] h-auto "></LanguageIcon>
                  <div
                    className={`ease-in-out transition-all duration-500  ${
                      langisOpen ? "flex flex-col" : "hidden"
                    } items-center justify-center absolute translate-y-2 left-[50%] -translate-x-[50%] `}
                  >
                    <button
                      className="w-10 hover:underline hover:underline-offset-2 transition-all ease-in duration-100"
                      onClick={() => changeLng("en")}
                    >
                      {t("Footer.EN")}
                    </button>
                    <button
                      className="w-10 hover:underline hover:underline-offset-2 transition-all ease-in duration-100"
                      onClick={() => changeLng("zh")}
                    >
                      {t("Footer.ZH")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="absolute hidden md:right-4 right-12 lg:flex lg:flex-col font-bold ">
        <div className="flex flex-row justify-center items-center ">
          <div
            className=" relative bg-gray-500 rounded-full mt-[0px] ml-6 mr-1 
            md:bg-gray-500 md:hover:bg-gray-400 p-[3px]
              dark:md:hover:bg-gray-400 dark:bg-light/75 
            dark:hover:bg-light/75  hover:bg-dark/50 transition-all ease-in-out duration-100"
            onClick={() => setlangisOpen(!langisOpen)}
          >
            <div className=" w-full bg-dark rounded-full">
              <LanguageIcon className=" cursor-pointer fill-light md:w-[38px]  w-[44px] translate-y-[4px] h-auto "></LanguageIcon>
              <div
                className={`ease-in-out transition-all duration-500  ${
                  langisOpen ? "flex flex-col" : "hidden"
                } items-center justify-center absolute translate-y-2 left-[50%] -translate-x-[50%] `}
              >
                <button
                  className="w-10 mt-1 text-xs hover:underline hover:underline-offset-2 transition-all ease-in duration-100"
                  onClick={() => changeLng("en")}
                >
                  {t("Footer.EN")}
                </button>
                <button
                  className="w-10 mt-1 text-xs hover:underline hover:underline-offset-2 transition-all ease-in duration-100"
                  onClick={() => changeLng("zh")}
                >
                  {t("Footer.ZH")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30
       bg-dark/90 dark:bg-light/70 rounded-lg backdrop-blur-md pt-32 pb-16 
       fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:pt-28 sm:pb-12
        "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={t("Footer.Home")}
              className="text-xl font-semibold"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={t("Footer.About")}
              className="text-xl font-semibold"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={t("Footer.Project")}
              className="text-xl font-semibold"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4 ">
            <motion.a
              title="Github"
              href="https://github.com/woo49m"
              target={"_blank"}
              className="w-12 sm:w-9 xs:mr-4 mr-6 flex items-center justify-center bg-light dark:bg-dark rounded-full "
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon2 />
            </motion.a>
            <motion.a
              title="Facebook"
              href="https://www.facebook.com/profile.php?id=100006633998705"
              target={"_blank"}
              className="w-12 sm:w-9 xs:mr-4 mr-6 flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              title="Instagram"
              href="https://www.instagram.com/woo49m1128/"
              target={"_blank"}
              className="w-12 sm:w-9 mr-6 xs:mr-4 flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Insta2 />
            </motion.a>
            <motion.a
              title="Mail"
              href="mailto:woo49m@gmail.com"
              target={"_blank"}
              className="w-12 sm:w-9  flex items-center   justify-center "
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-12 h-12 fill-light dark:fill-dark" />
            </motion.a>
          </nav>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={` absolute top-8 mt-6 flex items-center justify-center rounded-full p-1 w-11 sm:w-9 sm:top-5 ${
              mode === "dark" ? "bg-dark text-light " : "bg-light text-dark "
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={" fill-dark w-12 h-12 "} />
            ) : (
              <MoonIcon className={"fill-dark w-12 h-12"} />
            )}
          </button>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;

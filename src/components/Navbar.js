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
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[3px] bg-dark dark:bg-light
        absolute inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" w-full px-32 py-8 lg:py-16 md:py-8 md:px-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px12 sm:px-8">
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
            title={"Home"}
            className="text-xl font-semibold mr-4"
          />
          <CustomLink
            href="/about"
            title={"About"}
            className="text-xl font-semibold mx-4"
          />
          <CustomLink
            href="/projects"
            title={"Projects"}
            className="text-xl font-semibold mx-4"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://github.com/woo49m"
            target={"_blank"}
            className="w-12 mr-6 flex items-center justify-center "
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon2 className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100006633998705"
            target={"_blank"}
            className="w-12 mr-6 flex items-center justify-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/woo49m1128/"
            target={"_blank"}
            className="w-[50px] mr-6 flex items-center justify-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Insta2 />
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
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30
       bg-dark/90 dark:bg-light/70 rounded-lg backdrop-blur-md pt-32 pb-16 
       fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:pt-24 sm:pb-12
        "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className="text-xl font-semibold"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              className="text-xl font-semibold"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              className="text-xl font-semibold"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4 ">
            <motion.a
              href="https://github.com/woo49m"
              target={"_blank"}
              className="w-12 sm:w-10 mr-6 flex items-center justify-center bg-light dark:bg-dark rounded-full "
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon2 />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=100006633998705"
              target={"_blank"}
              className="w-12 sm:w-10 mr-6 flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/woo49m1128/"
              target={"_blank"}
              className="w-12 sm:w-10 flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Insta2 />
            </motion.a>
          </nav>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={` absolute top-8 mt-6 flex items-center justify-center rounded-full p-1 w-11 sm:w-9 sm:top-5 ${
              mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark w-12 h-12 "} />
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

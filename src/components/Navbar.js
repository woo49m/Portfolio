import React from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  GithubIcon,
  GithubIcon2,
  Insta,
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
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className=" w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav className="flex items-center justify-center ">
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
          className="w-12 mr-6 flex items-center justify-center"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Insta className="w-12 h-12" />
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
    </header>
  );
};

export default Navbar;

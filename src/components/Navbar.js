import React from "react";
import Link from "next/link";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { FacebookIcon, GithubIcon, Insta } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[3px] bg-dark 
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
  return (
    <header className=" w-full px-32 py-8 font-medium flex items-center justify-between">
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

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/woo49m"
          target={"_blank"}
          className="w-12 mr-6 flex items-center justify-center"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/profile.php?id=100006633998705"
          target={"_blank"}
          className="w-12 mr-6 flex items-center justify-center"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon className="w-12 h-12" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/woo49m1128/"
          target={"_blank"}
          className="w-12 mr-6 flex items-center justify-center"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Insta className="w-12 h-12" />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;

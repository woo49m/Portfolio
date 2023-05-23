import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center rounded-full text-2xl font-bold justify-center transition ease-linear duration-300 hover:bg-stone-600 hover:translate-y-0.5"
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;

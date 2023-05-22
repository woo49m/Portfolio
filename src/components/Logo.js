import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center rounded-full text-2xl font-bold justify-center transition ease-linear duration-100"
        whileHover={{
          backgroundColor: [
            "rgba(33, 33, 32, 1)",
            "rgba(100, 100, 96, 1)",
            "rgba(157, 157, 150, 1)",
            "rgba(100, 100, 96, 1)",
            "rgba(33, 33, 32, 1)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;

import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HireMe = () => {
  const { t } = useTranslation();

  return (
    <div className=" z-30 fixed xl:left-[88px] left-28 bottom-4 flex items-center justify-center overflow-hidden lg:absolute lg:left-[50%]  -translate-x-[50%] lg:top-0 lg:bottom-auto ">
      <div className="md:w-24 xl:w-36  w-48 h-auto flex items-center justify-center relative">
        <CircularText className=" w-full fill-dark dark:fill-light animate-spin-slow" />

        <Link
          href={"mailto:i861128@gmail.com"}
          className=" flex items-center justify-center absolute left-1/2 top-1/2
           -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid text-base
            border-dark w-20 h-20 rounded-full  hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
             md:w-8 md:h-8 md:text-[2px] xl:w-14 xl:h-14 font-bold
            "
        >
          {"W"}
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

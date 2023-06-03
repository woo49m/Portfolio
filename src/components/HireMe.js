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
           -translate-x-1/2 -translate-y-1/2 bg-light text-dark shadow-md border-solid xl:text-lg md:text-base
            border-dark w-16 h-16 rounded-full  hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light hover:dark:bg-gradient-to-tl from-gradient1 to-gradient2 hover:dark:text-dark hover:dark:border-light
             md:w-8 md:h-8 md:text-[2px] xl:w-14 xl:h-14  font-bold transition-all duration-500 ease-linear
            "
        >
          <span className="xl: text-2xl lg:text-lg md:text-base sm:text-sm font-semibold">
            W
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

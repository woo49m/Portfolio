import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import HireMe from "./HireMe";
import lightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className=" py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With
          <span className=" text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href={"/"}
            className=" underline underline-offset-2"
            target="_blank"
          >
            CodeBucks
          </Link>
        </div>
        <Link href={"/"}>hello</Link>
      </Layout>

      <HireMe />

      <div className=" absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBuld} alt="CodeBuck" className="w-full h-auto"></Image>
      </div>
    </footer>
  );
};

export default Footer;

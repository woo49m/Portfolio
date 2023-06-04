import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";
import { useTranslation } from "react-i18next";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  id,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      id={id}
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcons referece={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ durantion: 0.5, type: "spring" }}
      >
        <h3 className="mb-2 capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary dark:text-primaryDark  capitalize"
          >
            {company}
          </a>
        </h3>
        <span className=" capitalize font-medium  text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <div className="text-lg mt-2 font-medium w-full md:text-sm ">
          {work}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 lg:my-56 sm:my-36">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" font-bold text-8xl mb-40 mt-32 w-full text-center text-dark dark:text-light
        lg:!text-7xl sm:!text-6xl xs:!text-4xl uppercase lg:mb-32 sm:mb-20 "
      >
        {t("Experience.title")}
      </motion.h2>
      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[100%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-[35px] top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2xp] md:left-[28px] xs:left-[18px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={t("Experience.Detail_Front.position")}
            company={""}
            time={t("Experience.Detail_Front.period")}
            address={t("Experience.Detail_Front.time")}
            work={
              <ul className=" list-disc pl-5">
                <li>{t("Experience.Detail_Front.content1")}</li>
                <li>{t("Experience.Detail_Front.content2")} </li>
                <li>{t("Experience.Detail_Front.content3")}</li>
                <li>{t("Experience.Detail_Front.content4")}</li>
                <li>{t("Experience.Detail_Front.content5")}</li>
                <li>{t("Experience.Detail_Front.content6")}</li>
              </ul>
            }
          />
          {/* <Details
            position={"Start up a business"}
            company={" @TIDera"}
            time={"After Graduated"}
            address={"Sep 2022 - Dec 2022"}
            work={
              <ul className="list-disc pl-5">
                <li>
                  TIDera is a team consisted of three people. We spent about a
                  year discussing startup projects and content, and executed the
                  project for three months
                </li>
                <li>Responsible for AI training and user app development</li>
                <li>
                  The project was eventually halted due to one of the team
                  members choosing to leave the team
                </li>
              </ul>
            }
          /> */}
          {/* <Details
            position={"Acting a short Film - It's raining "}
            company={"@Beijing"}
            time={"Graduated"}
            address={"August 2022 - Sep 2022"}
            work={
              <ul className="list-disc pl-5">
                <li>The leading actor in the play</li>
                <li>Finalized for various film festivals and won awards</li>
              </ul>
            }
          />*/}

          <Details
            id="thesis"
            position={t("Experience.Detail_thesis.position")}
            company={t("Experience.Detail_thesis.company")}
            time={t("Experience.Detail_thesis.period")}
            address={t("Experience.Detail_thesis.time")}
            work={
              <ul>
                <li>
                  <b>{t("Experience.Detail_thesis.Project_Detail")}</b>
                  <ul className=" list-square pl-5">
                    <li>
                      <b>{t("Experience.Detail_thesis.Project_Title")}</b>{" "}
                      {t("Experience.Detail_thesis.content1")}
                    </li>
                    <li>
                      <b>{t("Experience.Detail_thesis.Project_Purpose")}</b>{" "}
                      {t("Experience.Detail_thesis.content2")}
                    </li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>{t("Experience.Detail_thesis.Project_Skills")}</b>
                  <ul className=" list-outsude list-square  pl-5">
                    <li>{t("Experience.Detail_thesis.content3")}</li>
                    <li>{t("Experience.Detail_thesis.content4")}</li>
                    <li>{t("Experience.Detail_thesis.content5")}</li>
                    <li>{t("Experience.Detail_thesis.content6")}</li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>{t("Experience.Detail_thesis.Project_Demo")}</b>
                  <div className="mt-2 w-full, h-[0px] relative pb-[50%]">
                    <iframe
                      src="https://streamable.com/e/w05qx1?loop=0"
                      frameborder="0"
                      width="100%"
                      height="100%"
                      allowfullscreen="true"
                      className=" w-full h-full absolute left-0 top-0 overflow-hidden"
                    ></iframe>
                  </div>
                </li>
              </ul>
            }
          />
          <Details
            id="TSMC"
            position={t("Experience.Detail_TSMC.position")}
            company={t("Experience.Detail_TSMC.company")}
            time={t("Experience.Detail_TSMC.period")}
            address={t("Experience.Detail_TSMC.time")}
            work={
              <ul>
                <li>
                  <b>{t("Experience.Detail_TSMC.Project_Detail")}</b>
                  <ul className=" list-square pl-5">
                    <li>
                      <b>{t("Experience.Detail_TSMC.Project_Title")}</b>{" "}
                      {t("Experience.Detail_TSMC.content1")}
                    </li>
                    <li>
                      <b>{t("Experience.Detail_TSMC.Project_Purpose")}</b>{" "}
                      {t("Experience.Detail_TSMC.content2")}
                    </li>
                    <li>
                      <b>{t("Experience.Detail_TSMC.Others")}</b>{" "}
                      {t("Experience.Detail_TSMC.content3")}
                    </li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>{t("Experience.Detail_TSMC.Project_Skills")}</b>
                  <ul className=" list-outsude list-square  pl-5">
                    <li>{t("Experience.Detail_TSMC.content4")}</li>
                    <li>{t("Experience.Detail_TSMC.content5")}</li>

                    <li>{t("Experience.Detail_TSMC.content6")}</li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>{t("Experience.Detail_TSMC.Project_Demo")}</b>
                  <div className="mt-2 w-full, h-[0px] relative pb-[50%]">
                    <iframe
                      src="https://streamable.com/e/ciom7j?loop=0"
                      frameborder="0"
                      width="100%"
                      height="100%"
                      allowfullscreen="true"
                      className=" w-full h-full absolute left-0 top-0 overflow-hidden"
                    ></iframe>
                  </div>
                </li>
              </ul>
            }
          />
          <Details
            position={t("Experience.Detail_BIM.position")}
            company={t("Experience.Detail_BIM.company")}
            time={t("Experience.Detail_BIM.period")}
            address={t("Experience.Detail_BIM.time")}
            work={
              <ul>
                <li>
                  <b>{t("Experience.Detail_BIM.Project_Detail")}</b>
                  <ul className=" list-square pl-5">
                    <li>
                      <b>{t("Experience.Detail_BIM.Project_Title")}</b>{" "}
                      {t("Experience.Detail_BIM.content1")}
                    </li>
                    <li>
                      <b>{t("Experience.Detail_BIM.Project_Purpose")}</b>
                      {t("Experience.Detail_BIM.content2")}
                    </li>
                  </ul>
                </li>

                <li className="mt-2">
                  <b>{t("Experience.Detail_BIM.Project_Skills")}</b>
                  <ul className=" list-outsude list-square  pl-5">
                    <li>{t("Experience.Detail_BIM.content3")}</li>
                    <li>{t("Experience.Detail_BIM.content4")}</li>
                  </ul>
                </li>
              </ul>
            }
          />
          <Details
            position={t("Experience.Detail_learn.position")}
            company={t("Experience.Detail_learn.company")}
            time={t("Experience.Detail_learn.period")}
            address={t("Experience.Detail_learn.time")}
            work={
              <ul className=" list-disc pl-5">
                <li>{t("Experience.Detail_learn.content1")}</li>
                <li>{t("Experience.Detail_learn.content2")}</li>
                <li>{t("Experience.Detail_learn.content3")}</li>
                <li>{t("Experience.Detail_learn.content4")}</li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

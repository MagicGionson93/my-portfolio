import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { useTranslation } from "react-i18next";

const Details = ({ type, time, place, info, company }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] sm:mr-2"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "scale" }}
      >
        {/* &nbsp; */}
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place} {company}
        </span>
        <p className="font-medium w-full sm:text-xl md:text-lg">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { educationTitle, educations } = t("about");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end ", "center start"],
  });
  return (
    <>
      <div className="my-64 xs:my-24">
        <h2 className="font-bold text-6xl mb-24 w-full text-center lg:!size-5xl md:!text-5xl sm:!text-3xl xs:!text-4xl">
          {educationTitle}
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
            style={{ scaleY: scrollYProgress }}
            viewport={{ once: true }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            { educations.map((ed, index) => (
              <Details key={index} type={ed.type} company={ed.company} time={ed.time} place={ed.place} info={ed.info} />
            )) }
            
          </ul>
        </div>
      </div>
    </>
  );
}
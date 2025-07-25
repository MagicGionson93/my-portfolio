import HeadHelmet from "./HeadHelmet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Image from "./Image";
import { GithubIcon } from "./icons";
import TransitionEffect from "./TransitionEffect";
import images from "../components/hooks/i18n.js";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// const FeaturedProject = ({ type, title, summary, img, link, github }) => {
//   return (
//     <article
//       className=" w-full flex items-center justify-between rounded-3xl 
//     border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
//     dark:bg-dark dark:border-light
//     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
//     >
//       <div
//         className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
//       xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]"
//       />

//       <motion.div
//         href={link}
//         target="_blank"
//         className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.2 }}
//       >
//         <Image urlImage={img} alt={title} classProp="w-full h-auto" />
//       </motion.div>
//       <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
//         <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
//           {type}
//         </span>
//         <a
//           href={link}
//           target="_blank"
//           className="hover:underline underline-offset-4"
//         >
//           <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
//             {title}
//           </h2>
//         </a>
//         <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
//           {summary}
//         </p>
//         <div className="mt-2 flex items-center">
//           <a href={github} target="_blank" className="w-10 ">
//             <GithubIcon />
//           </a>
//           <a
//             href={link}
//             target="_blank"
//             className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
//             dark:bg-light dark:text-dark
//             sm:px-4 sm:text-base"
//           >
//             Visit Project
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };

const Project = ({ title, type, img, link, summary, visit }) => {
  return (
    <article
      className="group w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div
        className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] group-hover:bg-dark group-hover:dark:bg-light rounded-br-3xl transition duration-200
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <motion.div
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg h-64 "
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image urlImage={img} alt={title} classProp="w-full h-64" />
      </motion.div>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
          rel="noopener noreferrer"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl h-16 xl:h-24 sm:h-auto md:h-auto xs:h-auto">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
            rel="noopener noreferrer"
          >
            {visit}
          </a>
          {/* <a href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </a> */}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const { t } = useTranslation();
  const { items, projectTitle, visit, notAvaible } = t("projects");

  return (
    <>
      <TransitionEffect />
      <HeadHelmet title={useLocation().pathname} />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 sm:!p-6 xs:p-5">
          <AnimatedText
            text={projectTitle}
            className="mb-16 lg:!text-[3.9rem] sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 xl:gap-y-24  lg:gap-x-8 lg:gap-y-16 md:gap-x-6 md:gap-y-24 sm:gap-x-4 xs:gap-x-0">
            {items.map((project) => (
              <div
                key={project.title}
                className="col-span-6 md:col-span-12 lg:col-span-12 sm:col-span-12"
              >
                <Project
                  title={project.title}
                  summary={project.summary}
                  link={project.link}
                  type={project.type}
                  img={images[project.imageKey]}
                  visit={ project.link === "#" ? notAvaible : visit}
                />
              </div>
            ))}

          </div>
        </Layout>
      </main>
    </>
  );
}

// FeaturedProject.propTypes = {
//   type: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
//   github: PropTypes.string.isRequired,
// };

Project.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string,
};

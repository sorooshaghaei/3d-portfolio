/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return( 
  <motion.div>
    test
  </motion.div>);
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-start">
        <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories. it reflects my ability to solve complex problems,
        work with different technologies, and manage projects effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

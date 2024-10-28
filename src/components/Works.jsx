import { motion } from "framer-motion";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";

import { textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-start">
        <p className={styles.sectionSubText}>my work</p>

        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");

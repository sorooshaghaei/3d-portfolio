/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { testimonials } from "../constants";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>what others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>
  );
};

export default SectionWrapper(Feedbacks, "");

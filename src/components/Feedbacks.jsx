/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { testimonials } from "../constants";


const Feedbacks = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>what others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>
  );
};

export default SectionWrapper(Feedbacks, "");

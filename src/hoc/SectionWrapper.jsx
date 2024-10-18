import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// This is a higher-order component (HOC) that wraps any passed component with animation and styles.
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Framer Motion's 'motion.section' allows adding animation properties to a standard <section> element.
      <motion.section
        // 'variants' define the different animation states. Here, we use the staggered animation returned by 'staggerContainer()'.
        variants={staggerContainer()}
        // 'initial' sets the starting state of the animation, in this case, 'hidden' means the section is invisible at first.
        initial="hidden"
        // 'whileInView' specifies the animation state when the section comes into the viewport, 'show' triggers the animation.
        whileInView="show"
        // 'viewport' defines when the animation should be triggered:
        // 'once: true' means the animation will only trigger once when the section enters the viewport.
        // 'amount: 0.25' means the animation will start when 25% of the section is visible in the viewport.
        viewport={{ once: true, amount: 0.25 }}
        // Applying additional styles using Tailwind CSS and the imported styles object.
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

// How motion.section Works:
// Framer Motion is a library that allows you to animate elements declaratively using motion components. Here, motion.section is used to create an animated <section> element.

// Variants (staggerContainer):

// variants={staggerContainer()} specifies the different states of the animation. The staggerContainer() function probably returns an object with predefined animation states like hidden (initial) and show (when visible).
// Initial (initial="hidden"):

// The initial="hidden" property means that the section will be invisible (or at its initial animation state) when it first renders. This state usually defines where the animation starts from, like opacity 0 or scaled down.
// While In View (whileInView="show"):

// This property tells Framer Motion to transition to the "show" animation state when the component scrolls into view. It triggers the animation when the element becomes visible in the viewport.
// Viewport:

// once: true: This ensures that the animation happens only the first time the element becomes visible. Once it's animated, it won't repeat on subsequent scrolls.
// amount: 0.25: This specifies how much of the element needs to be visible in the viewport before the animation starts. In this case, 25% of the section must be visible before the animation is triggered.

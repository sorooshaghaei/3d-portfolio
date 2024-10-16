/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          {title}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like Vue, React, Node.js, and Three.js. I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;

// options={{ max: 45, scale: 1, speed: 450 }}
// what does this do?
// options={{ max: 45, scale: 1, speed: 450 }}
// This object is configuring the behavior of the tilt effect provided by react-tilt. Here’s what each property does:

// max: 45: Sets the maximum tilt rotation in degrees. The element can tilt up to 45 degrees in any direction based on the mouse position.
// scale: 1: Defines the scaling effect when tilting. 1 means no scaling. If you wanted a slight zoom-in effect, you might set it to something like 1.1 for a 10% zoom-in.
// speed: 450: Sets the speed of the tilt animation. Higher values make the tilt movement smoother and slower, while lower values make it quicker.

// fadeIn("right", "spring", 0.5 * index, 0.75)
// what is right and spring? and why the time is multiplying to the index and what
// exactly does it do? and what is 0.75? because when I change it, nothing happens!
// fadeIn("right", "spring", 0.5 * index, 0.75)
// This is a function call that is likely creating a configuration for a motion variant (or animation) with framer-motion. Let’s go through each parameter:

// "right": This parameter indicates the direction of the fade effect. In this case, "right" means the element will appear as if it’s coming from the right side. Other values might include "left", "up", or "down".
// "spring": This defines the type of easing or transition animation. "spring" adds a spring-like effect, where the component will bounce slightly as it reaches its final position. Other options might include "easeIn", "easeOut", or "linear".
// 0.5 * index: This is the delay applied to the animation, based on the index of the component. The delay increases with each element, so they appear one after the other in sequence. This helps create a staggered animation effect.
// 0.75: This is likely the duration (in seconds) or a parameter that influences the animation timing. Lowering it would make the animation faster, while increasing it would slow it down. If you didn’t see a difference, it may mean other parameters or styling choices are overriding the effect.

// xs:w-[250px] w-full
// rounded-[20px] py-5 px-12 min-h-[280px]
// w-16 h-16
// what is the difference between w-16 and w-[280px] and when can be used ?
// Tailwind CSS Classes
// xs:w-[250px] w-full:

// xs:w-[250px]: For extra-small screens (tailored by the xs: prefix), the width is set to 250px.
// w-full: For larger screens, the width will take up the full available width of its container.
// Tailwind applies the most specific rule based on the screen size, so on small screens, xs:w-[250px] will take effect. On larger screens, it defaults to w-full.
// rounded-[20px] py-5 px-12 min-h-[280px]:

// rounded-[20px]: Gives the element rounded corners with a radius of 20px.
// py-5 and px-12: Apply padding on the y-axis (top and bottom) of 1.25rem and on the x-axis (left and right) of 3rem.
// min-h-[280px]: Sets the minimum height of the element to 280px.
// w-16 h-16:

// w-16: This sets the width to 4rem (64px).
// h-16: This sets the height to 4rem (64px).
// Difference: w-16 is a predefined width class in Tailwind (4rem). w-[280px] uses square bracket notation for custom values (like 280px). You can use predefined width values like w-16 for quick sizing or custom values when you need a specific width not available in Tailwind’s standard sizing.

// div className="mt-20 flex flex-wrap gap-10"
// what is flex-wrap and what is different from flex-block and other kinds of flex?
// and what is gap-10? and could not we use padding or margine instead of this gap??
// flex-wrap:
// When you apply flex-wrap, child items wrap onto new lines if they can’t all fit on one line. Without flex-wrap, items will overflow the container in a single row.
// Other flex properties like flex-nowrap force items onto a single row, regardless of overflow.
// gap-10:
// This sets the spacing between child elements in the flex container. gap-10 means there is a space of 40px between each item (since 10 is multiplied by 4px).
// Unlike padding or margin, which affects spacing relative to the element’s container, gap only controls spacing between flex children.
// Why use gap instead of padding or margin?
// gap is generally easier to manage for spacing between flex items, as it applies consistent spacing without adding extra padding or margin around the entire container. If you used padding or margin, you would need to set spacing individually for each child, which can be less efficient.

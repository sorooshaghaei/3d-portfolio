# React + Vite

dependencies: tailwind , material ui and these: npm i --legacy-peer-deps@react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom



# About Component Overview

# This component renders a section with a brief overview of skills and experience as well as interactive service cards that animate on hover.
# Libraries used:
# - react-tilt: for the tilt effect on hover
# - framer-motion: for handling animations

# Import necessary modules:
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

# Custom imports for styles and constants:
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

# ServiceCard Component
# - Contains an animated card with a title and icon that tilts on hover.
# - Tilt options and animation configurations are set inline for custom behavior.

const ServiceCard = ({ index, title, icon }) => {
  return (
    # Apply tilt effect to the entire card
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}  # Tilt configuration
      className="xs:w-[250px] w-full"               # Responsive width setting
    >
      # Motion wrapper for fade-in animation with staggered delay based on index
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        # Card content with icon and title
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />  # Icon settings
          {title}  # Display the title of the service
        </div>
      </motion.div>
    </Tilt>
  )
}

# About Component
# - This component introduces the developer and their skills with animated text and description.
# - It maps over the services array and renders a list of ServiceCards.

const About = () => {
  return (
    <>
      # Text animation wrapper
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      # Paragraph animation with fade-in effect
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

      # Service cards container with responsive wrapping and gap settings
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

# Export About Component for use in other parts of the application
export default About

# Configuration Notes:
# - Tilt Options:
#   - max: 45  # Maximum tilt angle in degrees.
#   - scale: 1  # No scaling effect on tilt.
#   - speed: 450  # Animation speed for tilt effect.

# - Motion Animation:
#   - fadeIn("right", "spring", 0.5 * index, 0.75)
#   - "right": Sets the direction of animation.
#   - "spring": Adds a spring easing effect for bounce.
#   - 0.5 * index: Delay per card, creating staggered entrance.
#   - 0.75: Animation duration.

# - TailwindCSS Class References:
#   - xs:w-[250px] w-full: Responsive width settings.
#   - rounded-[20px] py-5 px-12: Custom rounded corners with padding.
#   - flex flex-wrap gap-10: Flex container with wrapping and consistent gap.

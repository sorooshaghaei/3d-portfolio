/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc"; // Higher-Order Component for wrapping sections with consistent styling
import { styles } from "../styles";
import { experiences } from "../constants"; // Array containing experience data with fields like title, date, icon, etc.

import { textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Components for vertical timeline structure

// Importing CSS for the timeline
import "react-vertical-timeline-component/style.min.css"; // Required CSS for VerticalTimeline components' style

// Component for each experience card in the timeline
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    // Card's content background and text color styles
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    // Styling for the arrow pointing to the card with custom color
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date} // Date displayed for each experience entry
    iconStyle={{ background: experience.iconBg }} // Background color for the icon, passed from experience data
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon} // Source for the icon image
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain" // CSS to contain image within the icon size
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    </div>
  </VerticalTimelineElement>
);

// Main Experience component rendering the entire experience section
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I have done so far</p>

        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrapping Experience component with SectionWrapper HOC for additional section styling
export default SectionWrapper(Experience, "work");

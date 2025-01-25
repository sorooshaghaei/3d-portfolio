import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  health_hub,
  smtp_pop3,
  threejs,
  blueWhite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Data Science Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Community Manager",
    company_name: "Blue White coworking space",
    icon: blueWhite,
    iconBg: "white",
    date: "August 2022 - November 2022",
    points: [
      "Development and maintenance of front-end applications using React.js and Bootstrap.",
      "Collaboration with a team in a coworking environment, enhancing skills in responsive web design and UI/UX principles.",
      "Gained practical experience in agile methodologies and the use of version control systems for effective project management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Soroosh does.",
    name: "Keith Richards",
    designation: "Electric Guitar Player",
    company: "ROLLING STONES",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Keith-Richards-1965.jpg/340px-Keith-Richards-1965.jpg",
  },
  {
    testimonial:
      "After Soroosh optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Wong Kar-wai",
    designation: "ScreenWriter",
    company: "BLK2",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wong_Kar-wai_Berlin_cropped.jpg/440px-Wong_Kar-wai_Berlin_cropped.jpg",
  },
];

const projects = [
  {
    name: "health hub",
    description:
      "Health-Hub is a web application for healthcare management. It helps users manage patient records, schedule appointments, and visualize medical data with an intuitive dashboard. Enhance provider coordination and streamline patient information tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: health_hub,
    source_code_link: "https://github.com/sorooshaghaei/health-hub",
  },
  {
    name: "SMTP and POP3 Email App",
    description:
      "Sending emails via SMTP, receiving emails via POP3, displaying received messages in a clean interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "smtp",
        color: "green-text-gradient",
      },
      {
        name: "pop3",
        color: "pink-text-gradient",
      },
    ],
    image: smtp_pop3,
    source_code_link: "https://github.com/sorooshaghaei/smtp-pop3-with-python",
  },
];

export { services, technologies, experiences, testimonials, projects };

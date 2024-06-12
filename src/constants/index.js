import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  curtin,
  visakha,
  sliit,
  MIT,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "python",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Student",
    company_name: "Visakha Vidyalaya",
    icon: visakha,
    iconBg: "#E6DEDD",
    date: "April 2013 - Dec 2018",
    points: [
      "I did my G.C.E Ordinay Level in 2015 at Visahka Vidaylaya and got 8A's and 1B.",
      "I did my G.C.E Advanced Level in 2018 at Visakha Vidyalaya.",
    ],
  },
  {
    title: "BSc. Computer Sciene in Software Engineering Graduate",
    company_name: "Curtin",
    icon: curtin,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2023",
    points: [
      "Collaborative Development and Leadership Skills.",
      "Hands-On Project Experience.",
      "Exposure to Industry Tools and Technologies",
      "Problem-Solving and Debugging Skills.",
    ],
  },
  {
    title: "BSc. (Hons) Software Engineering Graduate",
    company_name: "SLIIT",
    icon: sliit,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - 2024",
    points: [
      "In-Depth Technical Knowledge",
      "Hands-On Project Experience",
      "User-Centered Design and User Experience (UX)",
      "Agile Methodology and Project Management",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "MIT",
    icon: MIT,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - 2024",
    points: [
      "Developing and maintaining mobile applications using React.js and other related technologies.",
      "Collaborating with team members to discuss ideas and project requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and get constructive feedback from other developers.",
    ],
  },
];

// // const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Chatzie",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/methmiranasinghe/Chatzie",
  },
  {
    name: "Chat Bot",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bard-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/methmiranasinghe/chat-ai-model",
  },
  {
    name: "Movie App",
    description:
      "Moviezilla redefines the cinematic experience through a meticulously crafted movie application using React Native Expo",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/methmiranasinghe/Movie-App",
  },
];

export { services, technologies, experiences, projects };

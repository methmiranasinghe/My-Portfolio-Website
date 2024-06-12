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
  chatbot,
  chatapp,
  movieapp,
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

const projects = [
  {
    name: "Chatzie",
    description:
      "This project focuses on developing a real-time chat application that streamlines communication. Users can exchange text messages directly, with a  convenient feature that displays a user's online status in real-time. This eliminates the frustration of sending messages to inactive users. Additionally, the app  incorporates a user discovery function, enabling you to find  who's currently online and available to chat, fostering connections and promoting real-time interaction.",
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
    image: chatapp,
    source_code_link: "https://github.com/methmiranasinghe/Chatzie",
  },
  {
    name: "Chat Bot",
    description:
      "Intelligent Chatbot project aims to create a user-friendly conversational interface that instantly and efficiently answers user queries and resolves problems by leveraging Bard API for real-time web integration. This chatbot will utilize advanced Natural Language Processing (NLP) techniques to understand and respond to questions, fetching relevant web resources and providing detailed explanations within seconds. Designed for multi-platform accessibility, it ensures accurate, contextually relevant responses and resource suggestions, enhancing user experience through quick and reliable problem-solving capabilities.",
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
    image: chatbot,
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
    image: movieapp,
    source_code_link: "https://github.com/methmiranasinghe/Movie-App",
  },
];

export { services, technologies, experiences, projects };

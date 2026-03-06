import { FaEnvelope, FaPhone } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: [
      { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
      { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
      { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
      { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
      { skill_name: "React", image: "react.png", width: 80, height: 80 },
      { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
      { skill_name: "TailwindCSS", image: "tailwind.png", width: 80, height: 80 },
      { skill_name: "Three.js", image: "threejs.svg", width: 70, height: 70 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
      { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
      { skill_name: "FastAPI", image: "fastapi.svg", width: 70, height: 70 },
      { skill_name: "Flask", image: "flask.svg", width: 70, height: 70 },
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      { skill_name: "Python", image: "python.svg", width: 70, height: 70 },
      { skill_name: "TensorFlow", image: "tensorflow.svg", width: 70, height: 70 },
      { skill_name: "PyTorch", image: "pytorch.svg", width: 70, height: 70 },
      { skill_name: "NumPy", image: "numpy.svg", width: 70, height: 70 },
      { skill_name: "Pandas", image: "pandas.svg", width: 70, height: 70 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
      { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
      { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { skill_name: "Git", image: "git.svg", width: 70, height: 70 },
      { skill_name: "GitHub", image: "github.svg", width: 70, height: 70 },
      { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
      { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
      { skill_name: "Vercel", image: "vercel.svg", width: 70, height: 70 },
    ],
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/DivyeBhatnagar",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/divyebhatnagar/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/divyebhatnagar/",
  },
] as const;

export const PROJECTS = [
  {
    title: "TITAN AI",
    description:
      "An autonomous AI system designed to act as a digital executive capable of managing tasks, automation, and intelligent decision making.",
    image: "/projects/project-1.png",
    link: "#",
    github: "https://github.com/DivyeBhatnagar",
    tech: ["Python", "AI Agents", "Automation"],
  },
  {
    title: "AI Executive System",
    description:
      "An AI-powered automation system that can help manage workflows, tasks, and business operations.",
    image: "/projects/project-2.png",
    link: "#",
    github: "https://github.com/DivyeBhatnagar",
    tech: ["Python", "Machine Learning", "FastAPI"],
  },
  {
    title: "Campus Crypto",
    description:
      "A platform designed to help students understand cryptocurrency and blockchain technologies.",
    image: "/projects/project-3.png",
    link: "#",
    github: "https://github.com/DivyeBhatnagar",
    tech: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Local LLM Backend",
    description:
      "A backend system designed to run and manage local large language models efficiently.",
    image: "/projects/project-1.png",
    link: "#",
    github: "https://github.com/DivyeBhatnagar",
    tech: ["Python", "PyTorch", "Flask"],
  },
] as const;

export const STATS = [
  { label: "Projects Built", value: "20+" },
  { label: "Technologies Used", value: "15+" },
  { label: "GitHub Repositories", value: "25+" },
  { label: "AI Experiments", value: "10+" },
] as const;

export const JOURNEY = [
  {
    title: "Started programming",
    description: "Wrote my first lines of code and discovered my passion for software development.",
    year: "2021",
  },
  {
    title: "Exploring AI and Machine Learning",
    description: "Deep dive into artificial intelligence, neural networks, and Python-based frameworks.",
    year: "2022",
  },
  {
    title: "Building full stack applications",
    description: "Mastered modern web development with React, Next.js, and scaling backend architectures.",
    year: "2023",
  },
  {
    title: "Developing intelligent systems",
    description: "Combining LLMs with modern web apps to build autonomous tools and automation systems.",
    year: "Present",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/DivyeBhatnagar",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/divyebhatnagar/",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/divyebhatnagar/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: FaEnvelope,
        link: "mailto:divyebhatnagar784@gmail.com",
      },
      {
        name: "Phone",
        icon: FaPhone,
        link: "tel:+919720365065",
      },
    ],
  },
  {
    title: "Quick Links",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:divyebhatnagar784@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/DivyeBhatnagar",
};

// import images
import Hero_person from "./assets/images/Hero/person.png";

import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import php from "./assets/images/Skills/php.png";
import nextjs from "./assets/images/Skills/nextjs.svg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/OTCA.png";
import project2 from "./assets/images/projects/GPA-Calculator.png";
import project3 from "./assets/images/projects/olapaybankapp.png";
import project4 from "./assets/images/projects/react-weatherapp.png";
import project5 from "./assets/images/projects/budget-app.png";
import project6 from "./assets/images/projects/tic-tac-toe.png";
import person_project from "./assets/images/projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Olamide",
    LastName: "Alao",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked on in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        logo: js,
      },
      {
        name: "ReactJS",
        logo: reactjs,
      },
      {
        name: "PHP",
        logo: php,
      },
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "NEXT.js",
        logo: nextjs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I offer professional web development services tailored to meet your business needs.",
        logo: services_logo1,
      },
      {
        title: "Frontend Development",
        para: "I specialize in creating modern and responsive frontend interfaces using the latest technologies.",
        logo: services_logo2,
      },
      {
        title: "Backend Development",
        para: "Need a robust backend for your application? I've got you covered with my expertise in backend development.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "E-commerce Website",
        image: project1,
        link: "https://otca2.netlify.app"
      },
      {
        title: "GPA Calculator",
        image: project2,
        link: "https://ola-gpacalculator.netlify.app"
      },
      {
        title: "Bank Application",
        image: project3,
        link: "https://ola-paybankapp.netlify.app"
      },
      {
        title: "Weather Checker",
        image: project4,
        link: "https://react-weatherapp-sooty.vercel.app"
      },
      {
        title: "Budget Application",
        image: project5,
        link: "https://budget-app-five-ochre.vercel.app"
      },
      {
        title: "Tic Tac Toe  Game",
        image: project6,
        link: "https://ibukunoluwamide.github.io/tic-tac-toe"
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm available for freelance projects. Let's discuss your project requirements and bring your ideas to life!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "olamidealao22@gmail.com",
        icon: GrMail,
        link: "mailto:olamidealao22@gmail.com",
      },
      {
        text: "+234 90 1382 0574",
        icon: MdCall,
        link: "tel:+2349013820574",
      },
      {
        text: "@olamidealao",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/olamidealao/",
      },
      {
        text: "@ibukunoluwamide",
        icon: BsGithub,
        link: "https://github.com/Ibukunoluwamide",
      },
      {
        text: "@olamidealao",
        icon: BsWhatsapp,
        link: "https://wa.me/2349157288288",
      },
    ],
  },
  Footer: {
    text: "All © Copyright Reserved 2024",
  },
};

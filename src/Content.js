// import images
import Hero_person from "./assets/images/Hero/person.png";

import js from "./assets/images/Skills/js.png";
import laravel from "./assets/images/Skills/laravel.svg";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import php from "./assets/images/Skills/php.png";
import nextjs from "./assets/images/Skills/nextjs.svg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/ims-dashboard.png";
import project1_2 from "./assets/images/Projects/ims-pos.png";
import project1_3 from "./assets/images/Projects/ims-products.png";
import project2_1 from "./assets/videos/ecommerce-demo.mp4";
import project3 from "./assets/images/Projects/admin-dashboard.png";
import project3_2 from "./assets/images/Projects/admin-users.png";
import project3_3 from "./assets/images/Projects/user-dashboard.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
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
        name: "Laravel",
        logo: laravel,
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
    subtitle: "SELECTED WORK",
    project_content: [
      {
        title: "Inventory Management System",
        description: `A full-featured inventory and stock management system built for businesses to track products, sales, and reports in real time.
Demo Login:
Email: admin@admin.com
Password: password123`, media: [
          { type: "image", src: project1 },
          { type: "image", src: project1_2 },
          { type: "image", src: project1_3 },
        ],
        link: "https://inventory.zektrack.com.ng",
        stack: ["Laravel", "MySQL", "React", "Shadcn UI"],
      },
      {
        title: "E-commerce Platform",
        description:
          "A modern e-commerce application with product management, shopping cart, and order flow.",
        media: [
          // { type: "image", src: project2 },
          { type: "video", src: project2_1 },
        ],
        // link: "https://otca2.netlify.app",
        stack: ["React", "Laravel", "MySQL", "MUI"],
      },
      {
        title: "Laravel Admin Dashboard",
        description:
          "A reusable Laravel admin dashboard starter with authentication, roles, CRUD modules, and clean UI.",
        media: [
          { type: "image", src: project3 },
          { type: "image", src: project3_2 },
          { type: "image", src: project3_3 },
        ],
        github: "https://github.com/Ibukunoluwamide",
        stack: ["Laravel", "React", "MySQL", "MUI"],
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
        link: "https://wa.me/2349013820574",
      },
    ],
  },
  Footer: {
    text: "All © Copyright Reserved 2025",
  },
};

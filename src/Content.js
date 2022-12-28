// import images
import Cover from "./assets/images/Hero/cover.png";

import fastapi from "./assets/images/Skills/fastapi.svg";
import django from "./assets/images/Skills/django.svg";
import flask from "./assets/images/Skills/flask.svg";
import react from "./assets/images/Skills/react.svg";
import javascript from "./assets/images/Skills/javascript.svg";
import python from "./assets/images/Skills/python.svg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import def from "./assets/images/Projects/default.jpg";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";

import Hire from "./assets/images/Hireme/leaf.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdOutlineOpenInNew, MdCall } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { TbHome, TbHammer } from "react-icons/tb";
import { MdOutlineContactMail, MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi"

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbHome,
    },
    {
      link: "#skills",
      icon: TbHammer,
    },
    {
      link: "#services",
      icon: MdOutlineDesignServices,
    },
    {
      link: "#projects",
      icon: HiOutlineNewspaper,
    },
    {
      link: "#contact",
      icon: MdOutlineContactMail,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "SERGIO",
    LastName: "A.S.",
    btnText: "Hire Me",
    image: Cover,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience",
      },
      {
        count: "4+",
        text: "Projects Worked in My Career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOOLS",
    skills_content: [
      {
        name: "FastAPI",
        para: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.",
        logo: fastapi,
        link: "https://fastapi.tiangolo.com/",
      },
      {
        name: "Django",
        para: "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
        logo: django,
        link: "https://www.djangoproject.com/",
      },
      {
        name: "Flask",
        para: "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.",
        logo: flask,
        link: "https://flask.palletsprojects.com/en/2.0.x/",
      },
      {
        name: "React",
        para: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        logo: react,
        link: "https://reactjs.org/",
      },
      {
        name: "Javascript",
        para: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        logo: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Python",
        para: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
        logo: python,
        link: "https://www.python.org/",
      },
    ],
    icon: MdOutlineOpenInNew,
  },
  services: {
    title: "Services",
    subtitle: "MY SERVICES",
    service_content: [
      {
        title: "Development",
        para: "Development and deployment",
        logo: services_logo1,
      },
      {
        title: "Support",
        para: "Operation and maintenance",
        logo: services_logo2,
      },
      {
        title: "Consultation",
        para: "Consulting and planning",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY WORK",
    image: person_project,
    project_content: [
      {
        title: "Creative Website",
        image: def,
        link: "",
      },
      {
        title: "Creative Website",
        image: def,
        link: "",
      },
      {
        title: "Creative Website",
        image: def,
        link: "",
      },
      {
        title: "Creative Website",
        image: def,
        link: "",
      },
      {
        title: "Creative Website",
        image: def,
        link: "",
      },
      {
        title: "Creative Website",
        image: def,
        link: "",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Very good work, I recommend it”",
        img: avatar1,
        name: "Julio",
      },
      {
        review:
          "“lovely work :)”",
        img: avatar2,
        name: "Sarah",
      },
      {
        review:
          "“The best support. Would recommend to anyone”",
        img: avatar2,
        name: "Bella",
      },
      {
        review:
          "“Fast and efficient. Great service”",
        img: avatar1,
        name: "Alexandros",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hire,
    para: "I am available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sergio-abu@pm.me",
        icon: GrMail,
        link: "mailto:sergio-abu@pm.me",
      },
      {
        text: "+55 00 00000000",
        icon: MdCall,
        link: "",
      },
      {
        text: "Message me on Telegram",
        icon: BsTelegram,
        link: "",
      },
    ],
  },
  Footer: {
    text: "© No Copyright",
  },
};

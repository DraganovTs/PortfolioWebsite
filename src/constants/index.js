import { spring } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    mysql,
    html,
    css,
    microservice,
    keycloak,
    kafka,
    maxscript,
    git,
    java,
    docker,
    ps,
    idea,
    redvertex,
    vikway,
    carrent,
    jobit,
    tripguide,
    threejs,
    postgres,
    
    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring",
      icon: microservice,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
    {
      name: "Keycloak",
      icon: keycloak,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Three",
      icon: threejs,
    },
    {
      name: "Html",
      icon: html,
    },
    {
      name: "Css",
      icon: css,
    },
    {
      name: "Maxscript",
      icon: maxscript,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    }
   
  ];
  
  const experiences = [
    {
      title: "Architect",
      company_name: "PS Design",
      icon: ps,
      iconBg: "#E6DEDD",
      date: "September 2007 - April 2015",
      points: [
        "Lead the architectural design process, creating innovative and functional building designs that meet the needs and vision of clients.",
        "Collaborate closely with cross-functional teams, including interior designers, structural engineers, project managers, and construction professionals, to bring architectural concepts to life.",
        "Maintain a commitment to high-quality architectural standards throughout all phases of the project, from design to construction.",
        "Stay updated on architectural trends, emerging technologies, and construction techniques to incorporate innovative solutions into projects",
      ],
    },
    {
      title: "Architect/3d Artist",
      company_name: "Red Vertex",
      icon: redvertex,
      iconBg: "#f02925",
      date: "Jan 2015 - Jan 2020",
      points: [
        "Specialize in creating architectural wonders for the world's largest companies.",
        "Collaborate seamlessly with diverse teams to produce high-quality architectural products.",
        "Meticulously implement client designs, ensuring perfection in every detail.",
        "Active in peer reviews, I provide constructive feedback to drive our 3D CGI art and architecture to new heights",
      ],
    },
    {
      title: "Architect/3d Artist/Interior Designer",
      company_name: "IDEA International",
      icon: idea,
      iconBg: "#ffffff",
      date: "Feb 2020 - Apr 2022",
      points: [
        "Specialize in creating awe-inspiring architectural and interior projects for privet clients.",
        "Thrive in cross-functional teams, collaborating seamlessly with designers, product managers, architects, and interior designers to produce high-quality, holistic designs",
        "Meticulously implement client designs, ensuring perfection in every architectural and interior detail.",
        "Actively engaged in peer reviews, I provide constructive feedback to elevate our 3D CGI art, architecture, and interior design to unprecedented levels of excellence",
      ],
    },
    {
      title: "Architect/3d Artist/Interior Designer",
      company_name: "Vik Way",
      icon: vikway,
      iconBg: "#192560",
      date: "May 2022 - Present",
      points: [
        "Specialize in crafting remarkable architectural and interior projects for industry-leading companies.",
        "Within multifaceted teams, I seamlessly collaborate with designers, product managers, architects, and interior designers to bring to life high-quality, integrated designs.",
        "Dedication to detail ensures that client designs are implemented with precision, achieving perfection in both architectural and interior elements.",
        "Actively contributing to peer reviews, I provide constructive feedback to elevate our 3D CGI art, architecture, and interior design, pushing the boundaries of creative excellence within the company.",
      ],
    },
  ];
  
    
  const projects = [
    {
      name: "Question app",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "postgres",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Soft Uny Final App",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "kafka",
          color: "blue-text-gradient",
        },
        {
          name: "maxscript",
          color: "green-text-gradient",
        },
        {
          name: "three",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,  projects };
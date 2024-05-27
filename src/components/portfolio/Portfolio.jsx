import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SDMS",
    img: "/sdms.png",
    desc: "Developed an application called SDMS (Strategic Sustainability Management System). This application helps organizations manage their environmental, social, and economic impacts associated with their operations and strategic decisions. My contributions included: \n" +
          "* Web Design: Participated in designing the application interface using Figma. \n" +
          "* Collaboration: Collaborated with the UI/UX team to build the application using Draw.io for the design flow and Figma for the UI. \n" +
          "* Technology Stack: Utilized Laravel, jQuery, and RESTful API for development.",
    demoLink: "https://sdms.id/",
  },
  {
    id: 2,
    title: "Notes Apps",
    img: "/Notes-app.png",
    desc: "Notes App: A user-friendly note-taking application that helps you organize your ideas, thoughts, and tasks. Its intuitive interface and powerful features make it an ideal tool for students, professionals, and anyone who wants to stay on top of their notes. The technology used is ReactJS, Framer Motion, Tailwind and we also utilize RESTful API and FIGMA for UI/UX design.",
    demoLink: "https://notes-app-iota-swart.vercel.app/",
  },
  {
    id: 3,
    title: "EVVE Apps",
    img: "/EVVE.png",
    desc: "EVVE is an online ticket sales application that makes it easy for users to buy tickets without the need to come to the location and maintain social distance because of the use of QR codes as a substitute for traditional tickets. This project uses technology from React.js and RESTful API from the Backend team.",
    demoLink: "https://evve.vercel.app/",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]); // Nilai y disesuaikan
  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 500]); // Nilai marginTop disesuaikan

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref} style={{ marginTop }}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <motion.button>See Demo</motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

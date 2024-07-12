import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SDMS",
    img: "/sdms.png",
    desc:
      "Developed an application called SDMS (Strategic Sustainability Management System). This application helps organizations manage their environmental, social, and economic impacts associated with their operations and strategic decisions. My contributions included: \n" +
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
    title: "Pokemon App",
    img: "/pokemon1.png",
    desc: "Pokemon App adalah sebuah aplikasi yang dibuat menggunakan teknologi dari React.js dan mockAPI dari https://pokeapi.co/. Aplikasi ini menampilkan daftar lengkap semua Pokémon, memberikan detail tentang setiap Pokémon, dan memungkinkan Anda menangkap Pokémon ke dalam Pokéball! Dengan antarmuka yang ramah pengguna dan fitur interaktif, aplikasi ini memberikan pengalaman seru bagi semua penggemar Pokémon. Jelajahi dunia Pokémon dan mulailah petualangan Anda dengan Pokemon App!",
    demoLink: "https://pokemon-app-peach-three.vercel.app/",
  },
  {
    id: 1,
    title: "Netflix-Clone",
    img: "/netflix.png",
    desc: "Netflix-Clone is a web application designed to mimic the functionality of the popular streaming service Netflix. Built with React, Vite, and TypeScript, this project ensures a modern and efficient development workflow. The application allows users to browse and stream a variety of movies and TV shows, manage their watchlist, and receive personalized recommendations. It consumes a mock API from The Movie Database (TMDB) to provide dynamic and up-to-date content.",
    demoLink: "https://netflix-clone-diska22.vercel.app/login",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 500]); 

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref} style={{ marginTop }}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{marginTop: "80px"}} >
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

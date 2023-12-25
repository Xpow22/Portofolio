import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Immersive Apps",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Immersive Apps is an application for mentee management, including mentee lists, mentee classes, user lists, and a page for feedback from mentors to mentees. The technology used is ReactJS, and we also utilize RESTful API and FIGMA for UI/UX design.",
    demoLink: "https://github.com/Xpow22/Immersive-App",
  },
  {
    id: 2,
    title: "HRIS Apps",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "HRIS-App is an application used for employee management in terms of submitting time-off, reimbursement, attendance, and HR management. The technology used is ReactJS and Redux, and we also use RESTful API and FIGMA for UI/UX design.",
    demoLink: "https://github.com/HRIS-APP-TEAM-3/Frontend_immersive",
  },
  {
    id: 3,
    title: "EVVE Apps",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "EVVE is an online ticket sales application that makes it easy for users to buy tickets without the need to come to the location and maintain social distance because of the use of QR codes as a substitute for traditional tickets. This project uses technology from React.js and RESTful API from the Backend team.",
    demoLink: "https://github.com/Capstone-Project-Team-2/Frontend-Immersive",
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

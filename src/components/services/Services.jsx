import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Notes Apps</h2>
          <p>
          Notes App: A user-friendly note-taking application that helps you organize your ideas, thoughts, and tasks. Its intuitive interface and powerful features make it an ideal tool for students, professionals, and anyone who wants to stay on top of their notes. The technology used is ReactJS, Framer Motion, Tailwind and we also utilize RESTful API.
          </p>
          <a href="https://notes-app-iota-swart.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HRIS Apps</h2>
          <p>
            HRIS-App is an application used for employee management in terms of
            submitting time-off, reimbursement, attendance and HR management. The technology
            used is ReactJS and Redux, we also use RESTfull API and FIGMA as UI/UX design.
          </p>
          <a href="https://github.com/HRIS-APP-TEAM-3/Frontend_immersive" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>EVVE Apps</h2>
          <p>
            EVVE is an online ticket sales application that makes
            it easy for users to buy tickets without the need to come to the location and social
            distance because of the use of QR codes as a substitute for traditional tickets. This
            project uses technology from React.js and RESTfull API from the Backend team.
          </p>
          <a href="https://evve.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SDMS</h2>
          <p>
          Developed an application called SDMS (Sustainability Development Management System). This application helps organizations manage their environmental, social, and economic impacts associated with their operations and strategic decisions. My contributions included: 
           Web Design: Participated in designing the application interface using Figma. 
          Collaboration: Collaborated with the UI/UX team to build the application using Draw.io for the design flow and Figma for the UI. 
          Technology Stack: Utilized Laravel, Javascript, JQuery, Bootstrap, and RESTful API for development.
          </p>
          <a href="https://sdms.id/" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

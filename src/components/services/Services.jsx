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
          <h2>Immersive Apps</h2>
          <p>
            Immersive Apps is an application for mentee management,
            including mentee lists, mentee classes, user lists, and a page for feedback from
            mentors to mentees. The technology used is ReactJS we also use RESTfull API and
            FIGMA as UI/UX design.
          </p>
          <a href="https://github.com/Xpow22/Immersive-App" target="_blank" rel="noopener noreferrer">
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
          <a href="https://github.com/Capstone-Project-Team-2/Frontend-Immersive" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Point Of Sale</h2>
          <p>
            POS applications are designed for various types of businesses, from retail to restaurants. Increase your operational efficiency and enhance the customer experience by using our innovative and customizable POS application. This project uses technologies from React.js, Next.js and RESTful API.
          </p>
          <a href="#your-link-for-Point-Of-Sale" target="_blank" rel="noopener noreferrer">
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

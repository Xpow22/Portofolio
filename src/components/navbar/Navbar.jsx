import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://github.com/Xpow22">
            <img src="/Github.png" alt="" />
          </a>
          <a href="https://wa.me/081221408519?text=Hello%20Diska!%20I%20want%20to%20invite%20you%20to%20do%20an%20interview%20at%20my%20company,%20are%20you%20interested?">
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/diska-esfandiary-595597212/">
            <img src="/linkedIn.png" alt="" />
          </a>
          <a href="https://www.instagram.com/diskaxpow/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

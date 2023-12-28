import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navlink = ({ name, href, iconImg, variants }) => {
  return (
    <motion.div
      initial={{ opacity: 1, backgroundColor: "#cbd5e1", padding: "10px" }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ backgroundColor: "#e2e8f0" }}
    >
      <NavLink
        to={`/${href}`}
        className={({ isActive }) => (isActive ? "text-red-700" : "")}
      >
        <div className="w-14 mx-auto">
          <img src={iconImg} className="w-full" alt="" />
        </div>
        <motion.div className="text-base" variants={variants}>
          {name}
        </motion.div>
      </NavLink>
    </motion.div>
  );
};
export default Navlink;

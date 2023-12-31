import NavbarLink from "../elements/navbar";
import { NavLink } from "react-router-dom";
import weatherIcon from "../../assets/icons/weatherIcon.svg";
import settingsIcon from "../../assets/icons/settingsIcon.svg";
import reactIcon from "../../assets/icons/reactIcon.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DarkButton from "../elements/buttons/darkModeButton/DarkButton";
import LightButton from "../elements/buttons/darkModeButton/LightButton";
const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const elements = document.documentElement;
  useEffect(() => {
    if (!darkMode) {
      elements.classList.add("dark");
    } else {
      elements.classList.remove("dark");
    }
  }, [darkMode]);

  const itemVariants = {
    open: {
      display: "block",
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: { scale: 0, display: "none", transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      initial={false}
      animate={isShown ? "open" : "closed"}
      variants={{
        open: {
          width: " 9rem",
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        closed: {
          width: "5rem",
          transition: { duration: 0.2 },
        },
      }}
      className="sideBarContainer relative  min-h-full bg-slate-300 text-gray-900 text-xs flex flex-col rounded-2xl py-10 gap-4"
    >
      <motion.div
        className="w-14 left-0 right-0 mx-auto absolute"
        variants={{
          open: {
            display: "none",
            scale: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          closed: {
            display: "block",
            scale: 1,
            transition: { duration: 0.2 },
          },
        }}
      >
        <img src={reactIcon} alt="" />
      </motion.div>
      <motion.div
        variants={{
          open: {
            scale: 1,
            transition: { type: "spring", stiffness: 400, damping: 24 },
          },
          closed: { scale: 0, transition: { duration: 0.2 } },
        }}
      >
        <NavLink
          to={"/"}
          className="logo w-28 mx-auto text-white text-lg font-bold flex flex-col justify-center items-center bg-gray-900 rounded-xl p-3"
          style={({ isActive }) => {
            return {
              color: isActive ? "" : "",
              background: isActive ? "#111827" : "",
            };
          }}
        >
          <motion.p
            variants={{
              open: {
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 24,
                  duration: 0.2,
                  delay: 0.6,
                },
              },
              closed: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
            }}
          >
            Weather
          </motion.p>
          <p className="self-end">Apps</p>
        </NavLink>
      </motion.div>
      <ul className="flex justify-start flex-col text-center font-bold h-96 ">
        <NavbarLink
          name="Weather"
          href="weather"
          iconImg={weatherIcon}
          variants={itemVariants}
        />
        <NavbarLink
          name="Settings"
          href="setting"
          iconImg={settingsIcon}
          variants={itemVariants}
        />
      </ul>
      <AnimatePresence>
        {darkMode ? (
          <DarkButton handleCLick={() => setDarkMode(!darkMode)} />
        ) : (
          <LightButton handleCLick={() => setDarkMode(!darkMode)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;

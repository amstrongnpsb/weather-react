import { motion } from "framer-motion";

const NoData = ({ infoText, textSize }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className="h-full rounded-xl bg-gray-900 px-5 py-3 flex flex-row justify-center items-center"
    >
      <p className={`city-title text-white ${textSize}`}>{infoText}</p>
    </motion.div>
  );
};

export default NoData;

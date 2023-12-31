import { motion } from "framer-motion";

const NoData = ({ infoText, textSize, height }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        stiffness: 100,
      }}
      className={`${height} rounded-xl dark:bg-gray-200  bg-gray-900 px-5 py-3 flex flex-row justify-center items-center`}
    >
      <p className={`city-title dark:text-gray-900 text-white ${textSize}`}>
        {infoText}
      </p>
    </motion.div>
  );
};

export default NoData;

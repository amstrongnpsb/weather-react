import { motion } from "framer-motion";
import Icons from "../../../../assets/icons/darkIcons.svg";
const DarkButton = ({ handleCLick }) => {
  return (
    <button
      className="darkModeBo h-24 absolute bottom-0 w-full"
      onClick={handleCLick}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-900  rounded-full w-12 p-2 m-auto  shadow-[_rgba(0,0,0,0.4)_0px_1px_12px_-2px,_rgba(0,0,0,0.14)_0px_3px_7px_-3px] cursor-pointer"
      >
        <img src={Icons} alt="" />
      </motion.div>
    </button>
  );
};

export default DarkButton;

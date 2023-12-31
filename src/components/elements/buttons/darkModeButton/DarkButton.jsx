import { motion } from "framer-motion";
import Icons from "../../../../assets/icons/darkIcons.svg";
const DarkButton = ({ handleCLick }) => {
  return (
    <motion.div
      variants={{
        open: {
          width: "6rem",
          backgroundColor: "#082f49",
          scale: 1,
          transition: {
            duration: 0.2,
          },
        },
        closed: {
          width: "3rem",
          backgroundColor: "#082f49",
          transition: { duration: 0.2 },
        },
      }}
      className="darkModeBotton cursor-pointer h-fit absolute bottom-5 rounded-full flex items-center self-center p-1  justify-center"
      onClick={handleCLick}
    >
      <motion.div
        variants={{
          open: {
            marginLeft: "auto",
            transition: {
              duration: 0.2,
            },
          },
          closed: {
            marginLeft: "0",
            transition: { duration: 0.2 },
          },
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-900 rounded-full w-12 p-2 shadow-[_rgba(0,0,0,0.4)_0px_1px_12px_-2px,_rgba(0,0,0,0.14)_0px_3px_7px_-3px] cursor-pointer"
      >
        <img src={Icons} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default DarkButton;

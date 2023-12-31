import { motion } from "framer-motion";
import Icons from "../../../../assets/icons/lightIcons.svg";
const LightButton = ({ handleCLick }) => {
  return (
    <motion.div
      variants={{
        open: {
          width: "6rem",
          backgroundColor: "#38bdf8",
          scale: 1,
          transition: {
            duration: 0.2,
          },
        },
        closed: {
          width: "3rem",
          backgroundColor: "#fef08a",
          transition: { duration: 0.2 },
        },
      }}
      className="darkModeBotton cursor-pointer h-fit absolute bottom-5 rounded-full flex items-center self-center p-1 bg-yellow-200 justify-center"
      onClick={handleCLick}
    >
      <motion.div
        variants={{
          open: {
            marginRight: "auto",
            transition: {
              duration: 0.2,
            },
          },
          closed: {
            marginRight: "0",
            transition: { duration: 0.2 },
          },
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white-custom rounded-full w-12 p-2 shadow-[_rgba(0,0,0,0.4)_0px_1px_12px_-2px,_rgba(0,0,0,0.14)_0px_3px_7px_-3px] cursor-pointer"
      >
        <img src={Icons} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default LightButton;

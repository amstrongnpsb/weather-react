import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

const HistoryCard = ({ weatherHistory, handleDelete }) => {
  // const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   setOpen(true);
  // }, []);
  return (
    <motion.div
      onClick={() => handleDelete(weatherHistory.id)}
      className="flex flex-col relative cursor-pointer rounded-lg px-4 transition duration-300 ease-in-out shadow-[_rgba(0,0,0,0.4)_0px_6px_12px_-2px,_rgba(0,0,0,0.14)_0px_3px_7px_-3px]"
      exit={{ scale: 0, opacity: 0 }}
    >
      <motion.div
        className="absolute bg-slate-600 w-full h-full left-0 rounded-r-full flex items-center text-xl justify-center gap-4"
        initial={{ opacity: 0, x: -40 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        <i className="fa-solid fa-trash-can "></i>
        <h1>Delete</h1>
      </motion.div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-4 rounded-full bg-slate-300"
            src={weatherHistory.iconUrl}
            alt=""
          />
          <small>{weatherHistory.condition}</small>
        </div>
        <small>{weatherHistory.time}</small>
      </div>
      <p className="text-xl capitalize text-center">{weatherHistory.name}</p>
    </motion.div>
  );
};

export default HistoryCard;

import { motion } from "framer-motion";

const HistoryCard = ({ weatherHistory, handleDelete }) => {
  return (
    <motion.div
      onClick={() => handleDelete(weatherHistory.id)}
      className="flex flex-col hover:bg-slate-300 hover:text-gray-900 cursor-pointer rounded-lg px-4 border-b-2 transition duration-300 ease-in-out"
      exit={{ scale: 0, opacity: 0 }}
    >
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

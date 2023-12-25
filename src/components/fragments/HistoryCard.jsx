const HistoryCard = ({ weatherHistory, handleDelete }) => {
  return (
    <div
      onClick={() => handleDelete(weatherHistory.id)}
      className="flex flex-col hover:bg-slate-300 hover:text-gray-900 cursor-pointer rounded-lg px-4 border-b-2 transition duration-300 ease-in-out"
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
        <p>{weatherHistory.time}</p>
      </div>
      <p className="text-xl capitalize text-center">{weatherHistory.name}</p>
    </div>
  );
};

export default HistoryCard;

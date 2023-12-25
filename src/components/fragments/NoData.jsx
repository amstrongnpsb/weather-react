const NoData = ({ infoText, textSize }) => {
  return (
    <div className="h-full rounded-xl bg-gray-900 px-5 py-3 flex flex-row justify-center items-center animate-pop-in">
      <p className={`city-title text-white ${textSize}`}>{infoText}</p>
    </div>
  );
};

export default NoData;

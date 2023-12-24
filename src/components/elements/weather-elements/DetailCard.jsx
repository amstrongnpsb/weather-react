const DetailCard = ({ name, icon, data, weatherIcon }) => {
  return (
    <div className="detail-info-card w-2/3 max-h-28  rounded-xl flex flex-col items-center p-3 text-white text-xl capitalize">
      <div className="flex flex-row gap-2">
        <i className={`fa-solid ${icon} text-xl tracking-widest`}></i>
        <p>{name}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        {data}
        {weatherIcon && (
          <img className="w-12 rounded-full" src={weatherIcon} alt="" />
        )}
      </div>
    </div>
  );
};

export default DetailCard;

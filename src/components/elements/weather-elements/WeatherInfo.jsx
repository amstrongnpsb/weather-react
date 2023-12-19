import WeatherImage from "../../../assets/imgs/cloudy.png";
const WeatherInfo = () => {
  return (
    <div className="h-full rounded-xl bg-gray-900 px-5 py-3 flex flex-row justify-between gap-4">
      <div className="w-1/2 flex justify-between">
        <div className=" w-1/2 p-10 flex flex-col justify-between">
          <div>
            <p className="city-title text-white text-5xl">Medan</p>
          </div>
          <div>
            <p className="temperature-title text-white text-6xl">30° C</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <div className="w-72">
            <img src={WeatherImage} alt="" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex bg-slate-300 rounded-lg flex-row gap-9 text-gray-900 items-center justify-center">
        <div className=" flex flex-col w-fit h-full items-start">
          <div className="h-1/2 flex flex-col justify-center">
            <div className="flex flex-row gap-1">
              <div className="w-fit h-full">
                <i className="fa-solid fa-temperature-three-quarters text-2xl"></i>
              </div>
              <div className="w-fit h-full text-2xl font-bold">
                <p className="">Temperature</p>
                <p>31° C</p>
              </div>
            </div>
          </div>
          <div className="h-1/2 flex flex-col justify-center">
            <div className="flex flex-row gap-1">
              <div className="w-fit h-full">
                <i className="fa-solid fa-wind text-2xl"></i>
              </div>
              <div className="w-fit h-full text-2xl font-bold">
                <p>Wind</p>
                <p>31° C</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-fit h-full items-start">
          <div className="h-1/2 flex flex-col justify-center">
            <div className="flex flex-row gap-1">
              <i className="fa-solid fa-droplet text-2xl"></i>
              <div className="w-fit h-full text-2xl font-bold">
                <p className="">Humidity</p>
                <p>31° C</p>
              </div>
            </div>
          </div>
          <div className="h-1/2 flex flex-col justify-center">
            <div className="flex flex-row gap-1">
              <div className="w-fit h-full">
                <i className="fa-solid fa-wind text-2xl"></i>
              </div>
              <div className="w-fit h-full text-2xl font-bold">
                <p>Wind</p>
                <p>31° C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WeatherInfo;

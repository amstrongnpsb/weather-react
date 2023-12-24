import { useState, useEffect } from "react";
import DetailCard from "../elements/weather-elements/DetailCard";
import timeConvert from "../services/timeConvert";
const WeatherInfo = ({ result }) => {
  const baseUrl = window.location.origin;

  const [weatherCondition, setWeatherCondition] = useState("");
  useEffect(() => {
    if (
      [
        "Mist",
        "Haze",
        "Fog",
        "Smoke",
        "Dust",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
      ].includes(result.weather[0].main)
    ) {
      setWeatherCondition("mist");
    } else {
      setWeatherCondition(result.weather[0].main);
    }
  }, [result.weather]);
  useEffect(() => {
    if (["Rain", "Clouds", "Clear"].includes(result.weather[0].main)) {
      let timeOfDay = timeConvert(result.timezone);
      setWeatherCondition(`${result.weather[0].main}_${timeOfDay}`);
    }
  }, [result]);

  const imgPath = `${baseUrl}/src/assets/imgs/weatherCondition/${weatherCondition}.png`;
  const iconUrl = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
  const detailInfo = [
    {
      name: "Temperature",
      icon: "fa-temperature-three-quarters",
      data: `${Math.round(result.main.temp - 273.15)}°C`,
    },
    {
      name: "Humidity",
      icon: "fa-droplet",
      data: `${result.main.humidity}%`,
    },
    {
      name: "WindSpeed",
      icon: "fa-wind",
      data: `${result.wind.speed} km/h`,
    },
    {
      name: "Condition",
      icon: "fa-chart-simple",
      data: `${result.weather[0].description}`,
      weatherIcon: iconUrl,
    },
  ];
  return (
    <div className="h-full rounded-xl bg-gray-900 px-5 py-3 flex flex-row justify-between animate-fade-in">
      <div className="left-info-wrapper w-1/2 flex justify-between">
        <div className=" w-1/2 p-10 flex flex-col justify-between">
          <div>
            <p className="city-title text-white text-5xl">{result.name}</p>
            <p className="city-title text-white text-2xl">
              {result.sys.country}
            </p>
          </div>
          <div>
            <p className="temperature-title text-white text-6xl">
              {result.weather[0].main}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <div className="w-72">
            <img src={imgPath} alt="" />
          </div>
        </div>
      </div>
      <div className="right-info-wrapper w-1/2 flex flex-wrap justify-end text-gray-900 p-3 gap-3">
        {detailInfo.map((item, index) => (
          <DetailCard
            key={index}
            name={item.name}
            icon={item.icon}
            data={item.data}
            weatherIcon={item.weatherIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherInfo;

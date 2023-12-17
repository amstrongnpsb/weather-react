import { Fragment } from "react";
import SearchButton from "../elements/buttons/searchButton/Index";
import WeatherInfo from "../elements/weather-elements/WeatherInfo";
const WeatherInfoLayout = () => {
  return (
    <Fragment>
      <div className="w-10/12  rounded-xl flex flex-col gap-4 animate-fade-in">
        <div className="rounded-xl h-2/3 flex gap-4 flex-col">
          <SearchButton />
          <WeatherInfo />
        </div>
        <div className="rounded-xl h-1/3">
          <h1>Weather UI</h1>
        </div>
      </div>
      <div className="min-w-fit w-2/12 bg-gray-900 rounded-xl p-2 text-white animate-pop-in">
        <h1 className="text-center">History</h1>
      </div>
    </Fragment>
  );
};

export default WeatherInfoLayout;

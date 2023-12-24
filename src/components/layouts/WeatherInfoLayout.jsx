import { Fragment, useState, useEffect } from "react";
import SearchButton from "../elements/buttons/searchButton/Index";
import WeatherInfo from "../fragments/WeatherInfo";
import Fetching from "../services/fetching";
import { debounce } from "lodash";
import NoData from "../fragments/NoData";
const WeatherInfoLayout = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherInfoUI, setweatherInfoUI] = useState([]);
  const debouncedSearch = debounce(async (inputSearch) => {
    const response = await Fetching(inputSearch);
    if (response.name == "AxiosError") {
      setWeatherData([]);
    } else {
      setWeatherData(response);
    }
  }, 1000);
  useEffect(() => {
    weatherData.length != 0
      ? setweatherInfoUI(<WeatherInfo result={weatherData} />)
      : setweatherInfoUI(
          <NoData infoText={"City Not Found"} textSize={"text-5xl"} />
        );
  }, [weatherData]);
  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
  };
  return (
    <Fragment>
      <div className="w-10/12  rounded-xl flex flex-col gap-4 animate-fade-in">
        <div className="rounded-xl h-2/3 flex gap-4 flex-col">
          <SearchButton searchInput={handleSearch} />
          {weatherInfoUI}
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

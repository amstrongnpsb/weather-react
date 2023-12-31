import { Fragment, useState, useEffect } from "react";
import SearchButton from "../elements/buttons/searchButton/Index";
import WeatherInfo from "../fragments/WeatherInfo";
import { FetchingForecast, FetchingWeather } from "../services/fetching";
import { debounce } from "lodash";
import NoData from "../fragments/NoData";
import HistoryCard from "../fragments/HistoryCard";
import BounceLoading from "../elements/loadings/BounceLoading";
import { AnimatePresence, motion } from "framer-motion";
import ForecastInfo from "../fragments/ForecastInfo";
const WeatherInfoLayout = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [debounceValue, setDebounceValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherHistory, setWeatherHistory] = useState([]);
  useEffect(() => {
    setWeatherHistory(JSON.parse(localStorage.getItem("weatherHistory")) || []);
  }, []);
  const deleteHistory = (id) => {
    const weatherHistoryList = JSON.parse(
      localStorage.getItem("weatherHistory")
    );
    const updatedHistoryList = weatherHistoryList.filter(
      (item) => item.id !== id
    );
    localStorage.setItem("weatherHistory", JSON.stringify(updatedHistoryList));
    setWeatherHistory(updatedHistoryList);
  };
  const debouncedSearch = debounce(async (inputSearch) => {
    setIsLoading(true);
    if (inputSearch != "") {
      return setDebounceValue(inputSearch);
    }
    if (inputSearch == "") {
      setIsLoading(false);
      setWeatherData([]);
      setForecastData([]);
    }
  }, 800);
  useEffect(() => {
    debounceValue != "" && fetchingWeatherData(debounceValue);
    debounceValue != "" && fetchingForcastData(debounceValue);
  }, [debounceValue]);
  const fetchingWeatherData = async () => {
    const response = await FetchingWeather(debounceValue);
    if (response.name == "AxiosError") {
      setWeatherData([]);
      setIsLoading(false);
    } else {
      setWeatherData(response);
      setIsLoading(false);
      const historyTemplate = {
        id: new Date().getTime(),
        name: response.name,
        condition: response.weather[0].main,
        iconUrl: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
        time: new Date().toLocaleTimeString(),
      };
      storeToLocalStorage(historyTemplate);
    }
    setDebounceValue("");
  };
  const fetchingForcastData = async () => {
    const response = await FetchingForecast(debounceValue);
    if (response.name == "AxiosError") {
      setIsLoading(false);
    } else {
      setForecastData(response.list);
      setIsLoading(false);
    }
  };
  const storeToLocalStorage = (historyTemplate) => {
    if (!localStorage.getItem("weatherHistory")) {
      localStorage.setItem("weatherHistory", JSON.stringify([]));
    }
    setWeatherHistory([...weatherHistory, historyTemplate]);
    localStorage.setItem(
      "weatherHistory",
      JSON.stringify([...weatherHistory, historyTemplate])
    );
  };
  const handleSearch = (input) => {
    debouncedSearch(input);
  };

  return (
    <Fragment>
      <div className="weatherInfoLayout w-10/12 rounded-xl flex flex-col gap-4">
        <div className="rounded-xl h-2/3 flex gap-4 flex-col">
          <SearchButton searchInput={handleSearch} />
          {isLoading && <BounceLoading />}
          {!isLoading && weatherData.length != 0 && (
            <WeatherInfo result={weatherData} />
          )}
          {!isLoading && weatherData.length == 0 && (
            <NoData
              infoText={"City Not Found"}
              textSize={"text-5xl"}
              height={"h-full"}
            />
          )}
        </div>
        <div className="rounded-xl h-1/3 flex gap-4 flex-col">
          {isLoading && <BounceLoading />}
          {Boolean(!isLoading && forecastData.length) && (
            <ForecastInfo results={forecastData} />
          )}
          {Boolean(!isLoading && !forecastData.length) && (
            <NoData
              infoText={"No Forecast to Display"}
              textSize={"text-2xl"}
              height={"h-full"}
            />
          )}
        </div>
      </div>

      <div className="min-w-fit w-2/12 dark:bg-gray-200 dark:text-gray-900 bg-gray-900 rounded-xl p-2 max-h-screen text-white animate-pop-in overflow-auto">
        <h1 className="text-center">History</h1>
        <div className="w-full flex flex-col justify-center gap-4 mt-4">
          {weatherHistory.length == 0 && (
            <NoData
              infoText={"No History Found"}
              textSize={"text-base"}
              height={"h-full"}
            />
          )}
          <AnimatePresence>
            {weatherHistory.length != 0 &&
              weatherHistory.map((data, index) => {
                return (
                  <motion.div
                    key={data.id}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    exit={{
                      x: 100,
                      transition: { duration: 0.1 },
                    }}
                  >
                    <HistoryCard
                      key={data.id}
                      weatherHistory={data}
                      handleDelete={deleteHistory}
                    />
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>
    </Fragment>
  );
};

export default WeatherInfoLayout;

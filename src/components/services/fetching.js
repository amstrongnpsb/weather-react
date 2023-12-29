import axios from "axios";
import { APIKEY } from "../../../config.js";

export const FetchingWeather = (inputSearch) => {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  let urlQuery = `${url}?q=${inputSearch}&appid=${APIKEY}`;
  return axios
    .get(urlQuery)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export const FetchingForecast = (inputSearch) => {
  const url = "https://api.openweathermap.org/data/2.5/forecast";
  let urlQuery = `${url}?q=${inputSearch}&appid=${APIKEY}&cnt=8`;
  return axios
    .get(urlQuery)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

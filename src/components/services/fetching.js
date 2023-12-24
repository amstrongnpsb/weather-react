import axios from "axios";
import { APIKEY } from "../../../config.js";

const Fetching = (inputSearch) => {
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

export default Fetching;

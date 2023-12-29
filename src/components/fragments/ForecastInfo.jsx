import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const ForecastInfo = ({ results }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-white w-full h-[300px] cursor-grab"
      >
        {results.map((forecastDataItem) => {
          return (
            <SwiperSlide
              className="w-80 rounded-xl bg-gray-900 h-full p-4"
              key={forecastDataItem.dt}
            >
              <small>{forecastDataItem.dt_txt}</small>
              <div className="bg-slate-200 rounded-full w-36 mx-auto my-2">
                <img
                  src={`https://openweathermap.org/img/wn/${forecastDataItem.weather[0].icon}@2x.png`}
                  className="w-full"
                  alt=""
                />
              </div>
              <p className="text-center text-lg">
                {forecastDataItem.weather[0].main}
              </p>
              <div className="flex flex-row justify-center gap-4 text-sm">
                <div className="flex flex-row items-center gap-1">
                  <i className="fa-solid fa-temperature-three-quarters text-xl tracking-widest"></i>
                  <p>{`${Math.round(
                    forecastDataItem.main.temp - 273.15
                  )}°C`}</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <i className="fa-solid fa-droplet text-xl tracking-widest"></i>
                  <p>{`${forecastDataItem.main.humidity}%`}</p>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <i className="fa-solid fa-wind text-xl tracking-widest"></i>
                  <p>{`${forecastDataItem.wind.speed} km/h`}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default ForecastInfo;

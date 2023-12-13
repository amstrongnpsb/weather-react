import WeatherIcon from "../../assets/icons/weather-forecast.png";
import SettingIcon from "../../assets/icons/profile-setting.png";
import AboutIcon from "../../assets/icons/information.png";
const Sidebar = () => {
  return (
    <div className="w-1.5/12 min-h-full bg-slate-300 text-gray-900 p-4 font-poppins-reg text-xs flex flex-col rounded-2xl gap-20">
      <div className="logo text-white text-lg font-bold flex flex-col justify-center items-center bg-gray-900 rounded-xl p-3">
        <p className="self-end">Weather</p>
        <p className="self-end">Apps</p>
      </div>
      <ul className="space-y-4">
        <li className="px-4 py-2 font-bold rounded-xl text-center space-y-1">
          <div className="h-10 aspect-square m-auto">
            <img
              src={`${WeatherIcon}`}
              alt="weather-icon"
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-base">Weather</p>
        </li>
        <li className="px-4 py-2 font-bold rounded-xl text-center space-y-1">
          <div className="h-10 aspect-square m-auto">
            <img src={`${SettingIcon}`} alt="setting-icon" className="h-full" />
          </div>
          <p className="text-base">Settings</p>
        </li>
        <li className="px-4 py-2 font-bold rounded-xl text-center space-y-1">
          <div className="h-10 aspect-square m-auto">
            <img src={`${AboutIcon}`} alt="about-icon" className="h-full" />
          </div>
          <p className="text-base">About</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

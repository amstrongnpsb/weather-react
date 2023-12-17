import WeatherIcon from "../../assets/icons/weather-forecast.png";
import SettingIcon from "../../assets/icons/profile-setting.png";
import AboutIcon from "../../assets/icons/information.png";
import NavbarLink from "../elements/navbar";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-1.5/12 min-h-full bg-slate-300 text-gray-900 p-4 text-xs flex flex-col rounded-2xl gap-20">
      <NavLink
        to={"/"}
        className="logo text-white text-lg font-bold flex flex-col justify-center items-center bg-gray-900 rounded-xl p-3"
      >
        <p className="">Weather</p>
        <p className="self-end">Apps</p>
      </NavLink>
      <ul className="space-y-4">
        <NavbarLink
          icon={WeatherIcon}
          alt_attr="weather-icon"
          name="Weather"
          href={"weather"}
        />
        <NavbarLink
          icon={SettingIcon}
          alt_attr="setting-icon"
          name="Settings"
          href={"setting"}
        />
        <NavbarLink
          icon={AboutIcon}
          alt_attr="about-icon"
          name="About"
          href={"about"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;

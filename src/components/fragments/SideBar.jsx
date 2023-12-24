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
      <ul className="space-y-4 flex justify-center flex-col text-center font-bold">
        <NavbarLink
          icon="fa-magnifying-glass-chart"
          name="Weather"
          href="weather"
        />
        <NavbarLink icon="fa-gear" name="Settings" href="setting" />
        <NavbarLink icon="fa-circle-info" name="About" href="about" />
      </ul>
    </div>
  );
};

export default Sidebar;

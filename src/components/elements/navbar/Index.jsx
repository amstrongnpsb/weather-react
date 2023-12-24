import { NavLink } from "react-router-dom";
const Navlink = ({ icon, name, href }) => {
  return (
    <NavLink
      to={`/${href}`}
      className={({ isActive }) =>
        isActive ? "text-sky-950" : "hover:text-gray-700 active:text-gray-400"
      }
    >
      <i className={`fa-solid ${icon} fa-solid text-5xl`}></i>
      <p className="text-base">{name}</p>
    </NavLink>
  );
};
export default Navlink;

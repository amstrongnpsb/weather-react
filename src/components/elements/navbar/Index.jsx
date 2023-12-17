import { NavLink } from "react-router-dom";
const Navlink = ({ icon, alt_attr, name, href }) => {
  return (
    <NavLink
      to={`/${href}`}
      className="px-4 py-2 font-bold rounded-xl text-center space-y-1 "
      style={({ isActive }) => {
        return {
          color: isActive ? "darkred" : "",
        };
      }}
    >
      <div className="h-10 aspect-square m-auto">
        <img
          src={`${icon}`}
          alt={`${alt_attr}`}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-base">{`${name}`}</p>
    </NavLink>
  );
};
export default Navlink;

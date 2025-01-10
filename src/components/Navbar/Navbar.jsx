import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.users.value);
  return (
    <div className="navbar">
      <h2>Redux toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create User</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{count.length}</sup>
      </NavLink>
    </div>
  );
};

export default Navbar;

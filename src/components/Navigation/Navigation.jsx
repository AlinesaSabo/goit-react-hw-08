import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { IoMdHome } from "react-icons/io";
import { HiPhone } from "react-icons/hi";

const Navigation = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink to="/" className={s.link}>
        <IoMdHome />
        Home
      </NavLink>
      <NavLink to="/contacts" className={s.link}>
        <HiPhone />
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;

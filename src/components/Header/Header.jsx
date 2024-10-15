import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperLinks}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/contact" className={s.link}>
          Contact
        </NavLink>
      </div>
      <div className={s.welcome}>Welcome</div>{" "}
      <div className={s.reg}>
        <NavLink to="/register" className={s.link}>
          Register
        </NavLink>
        <NavLink to="/login" className={s.link}>
          Log In
        </NavLink>
        <button className={s.exitButton}>Exit</button>
      </div>
    </div>
  );
};

export default Header;

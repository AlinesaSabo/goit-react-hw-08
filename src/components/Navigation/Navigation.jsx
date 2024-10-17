import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperLinks}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={s.link}>
          Contact
        </NavLink>
      </div>
      {isLoggedIn && <div className={s.welcome}>Welcome, {user.email}</div>}
      <div className={s.reg}>
        {!isLoggedIn && (
          <>
            <NavLink to="/register" className={s.link}>
              Register
            </NavLink>
            <NavLink to="/login" className={s.link}>
              Log In
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())} className={s.exitButton}>
            Exit
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;

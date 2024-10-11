import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.nav}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.nav}>
          Contacts
        </NavLink>
      )}
    </div>
  );
}

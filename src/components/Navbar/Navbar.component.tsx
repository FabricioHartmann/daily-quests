import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-item">
        HOME
      </NavLink>
      <NavLink to="/quests" className="navbar-item">
        QUESTS
      </NavLink>
    </nav>
  );
}

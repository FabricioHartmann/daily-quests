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
      <NavLink to="/inventario" className="navbar-item">
        INVENTÁRIO
      </NavLink>
      <NavLink to="/conquistas" className="navbar-item">
        CONQUISTAS
      </NavLink>
    </nav>
  );
}

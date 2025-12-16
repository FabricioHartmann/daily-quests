import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";
import { GiScrollQuill , GiHood, GiTrophy } from "react-icons/gi";
import { FaTent } from "react-icons/fa6";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import { Text } from "../Generic";

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-item">
        {isMobile ? (
          <FaTent size={18} />
        ) : (
          <>
            <FaTent size={14} />
            <Text>HOME</Text>
          </>
        )}
      </NavLink>
      <NavLink to="/quests" className="navbar-item">
        {isMobile ? (
          <GiScrollQuill size={22} />
        ) : (
          <>
            <GiScrollQuill size={16} />
            <Text>QUESTS</Text>
          </>
        )}
      </NavLink>
      <NavLink to="/inventario" className="navbar-item">
        {isMobile ? (
          <GiHood size={22} />
        ) : (
          <>
            <GiHood size={18} className="icon-fix-hood" />
            <Text>PERFIL</Text>
          </>
        )}
      </NavLink>
      <NavLink to="/conquistas" className="navbar-item">
        {isMobile ? (
          <GiTrophy size={18} />
        ) : (
          <>
            <GiTrophy size={14} />
            <Text>CONQUISTAS</Text>
          </>
        )}
      </NavLink>
    </nav>
  );
}

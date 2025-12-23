import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";
import { GiScrollUnfurled, GiHood, GiCompass } from "react-icons/gi";
import { FaTent } from "react-icons/fa6";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import { Text } from "../Generic";
import { useProfileStore } from "../../store/profile/profile.store";

export function Navbar() {
  const { profile } = useProfileStore();
  const isMobile = useIsMobile();
  const isDisabled = profile.level === 0;

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-item">
        {isMobile ? (
          <FaTent size={18} />
        ) : (
          <>
            <FaTent size={14} />
            <Text color="white">HOME</Text>
          </>
        )}
      </NavLink>
      <NavLink to="/quests" className="navbar-item">
        {isMobile ? (
          <GiScrollUnfurled size={20} />
        ) : (
          <>
            <GiScrollUnfurled size={14} />
            <Text>QUESTS</Text>
          </>
        )}
      </NavLink>
      <NavLink to="/perfil" className="navbar-item">
        {isMobile ? (
          <GiHood size={22} />
        ) : (
          <>
            <GiHood size={18} className="icon-fix-hood" />
            <Text>PERFIL</Text>
          </>
        )}
      </NavLink>
      <NavLink
        to="/expedicao"
        className={`navbar-item ${isDisabled ? "disabled" : ""}`}
      >
        {isMobile ? (
          <GiCompass size={22} />
        ) : (
          <>
            <GiCompass className="icon-fix-compass" size={16} />
            <Text>EXPEDIÇÃO</Text>
          </>
        )}
      </NavLink>
    </nav>
  );
}

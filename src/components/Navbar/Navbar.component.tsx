import { NavLink } from "react-router-dom";
import "./Navbar.styles.css";
import {
  GiScrollUnfurled,
  GiHood,
  GiCompass,
  GiSpellBook,
} from "react-icons/gi";
import { FaTent } from "react-icons/fa6";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import { Text } from "../GenericComponents";
import { useProfileStore } from "../../store/profile/profile.store";

export function Navbar() {
  const { level } = useProfileStore((s) => s.profile);
  const isMobile = useIsMobile();
  const isDisabled = level === 0;

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
      <NavLink to="/quests" className="navbar-item">
        {isMobile ? (
          <GiScrollUnfurled size={18} />
        ) : (
          <>
            <GiScrollUnfurled size={14} />
            <Text>QUESTS</Text>
          </>
        )}
      </NavLink>

      <NavLink to="/rituais" className="navbar-item">
        {isMobile ? (
          <GiSpellBook size={22} className="icon-fix-spellbook" />
        ) : (
          <>
            <GiSpellBook size={18} className="icon-fix-spellbook" />
            <Text>RITUAIS</Text>
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

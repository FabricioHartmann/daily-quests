import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import './MainLayout.styles.css'

export function MainLayout() {
  return (
    <div className="app-root">
      <Navbar />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

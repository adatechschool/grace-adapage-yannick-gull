

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-30">
      <NavLink
        to="/specialite"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-white text-white rounded-xl ${
            isActive ? "bg-[#4C4320] text-white" : ""
          }`
        }
      >
        Specialite
      </NavLink>

      <NavLink
        to="/citation"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-white text-white rounded-xl ${
            isActive ? "bg-[#4C4320] text-white" : ""
          }`
        }
      >
        Citation
      </NavLink>

      <NavLink
        to="/frise"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-white text-white rounded-xl ${
            isActive ? "bg-[#4C4320] text-[#4C4320]" : ""
          }`
        }
      >
        Frise
      </NavLink>
    </nav>
  );
}


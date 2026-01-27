import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-30">
      <NavLink
        to="/specialite"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-black rounded-xl ${
            isActive ? "bg-black text-white" : ""
          }`
        }
      >
        Specialite
      </NavLink>

      <NavLink
        to="/citation"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-black rounded-xl ${
            isActive ? "bg-black text-white" : ""
          }`
        }
      >
        Citation
      </NavLink>

      <NavLink
        to="/frise"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-black rounded-xl ${
            isActive ? "bg-black text-white" : ""
          }`
        }
      >
        Frise
      </NavLink>
    </nav>
  );
}
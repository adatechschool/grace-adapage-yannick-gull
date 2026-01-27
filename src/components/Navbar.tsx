import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-3">
      <NavLink
        to="/specialite"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-black rounded-xl ${
            isActive ? "bg-black text-white" : ""
          }`
        }
      >
        spec
      </NavLink>

      <NavLink
        to="/citation"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-black rounded-xl ${
            isActive ? "bg-black text-white" : ""
          }`
        }
      >
        citation
      </NavLink>

      <NavLink
        to="/frise"
        className={({ isActive }) =>
          `px-4 py-2 border-2 border-black rounded-xl ${
            isActive ? "bg-black text-white" : ""
          }`
        }
      >
        frise
      </NavLink>
    </nav>
  );
}
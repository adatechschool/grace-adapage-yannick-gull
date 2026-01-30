import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }:{isActive: boolean}) =>
  ` font-righteous px-4 py-2 border-2 border-white text-white rounded-xl transition
   hover:bg-[#4C4320] hover:text-white
   ${isActive ? "bg-[#4C4320] text-white" : ""}`;

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-8">
      <NavLink to="/specialite" className={linkClass}>
        Spécialité
      </NavLink>

      <NavLink to="/citation" className={linkClass}>
        Citation
      </NavLink>

      <NavLink to="/frise" className={linkClass}>
        Frise
      </NavLink>
    </nav>
  );
}
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className=" bg-white flex items-center justify-between px-6 py-1 border-b">
        
        
        <Link to="/" className="flex items-center">
          <img
            src="/logobobmarley.png"
            alt="Logo"
            className="h-40 w-auto cursor-pointer"
          />
        </Link>

        <Navbar />
      </header>

      <main className="flex-1 px-6 py-4">
        <Outlet />
      </main>

      <footer className="px-6 py-2 text-sm text-center">
        footer
      </footer>
    </div>
  );
}
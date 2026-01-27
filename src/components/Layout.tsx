import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen p-6 flex flex-col">
      
      
      <header className="flex items-center justify-between border-2 border-black rounded-2xl p-4 mb-4">
        <div className="border-2 border-black rounded-xl px-4 py-2 font-bold">
          <img src="/logobobmarley.png" alt="logo bob marley" />
        </div>

        <Navbar />
      </header>

      
      <main className="flex-1 border-2 border-black rounded-2xl p-4">
        <Outlet />
      </main>

      
      <footer className="border-2 border-black rounded-2xl p-4 mt-4 text-center">
        footer
      </footer>

    </div>
  );
}
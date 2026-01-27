const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-slate-800 text-white shadow-sm">
      <div className="flex justify-between items-center-safe px-6 py-4">
        {/* Logo */}
        <h1 className="m-0 text-2xl font-bold text-purple-600">
          Logo
        </h1>

        {/* Navigation */}
        <nav className="flex gap-20">
          <button className="px-4 py-2 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition">
            Spec
          </button>
          <button className="px-4 py-2 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition">
            Citation
          </button>
          <button className="px-4 py-2 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition">
            Frize
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

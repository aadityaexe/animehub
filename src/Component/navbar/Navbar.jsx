const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Logo
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

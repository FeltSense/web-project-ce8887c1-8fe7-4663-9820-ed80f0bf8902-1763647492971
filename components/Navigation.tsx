const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900 tracking-wider">
          Chic Threads
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="/shop" className="text-gray-600 hover:text-gray-900 font-medium transition duration-300">Shop</a>
          <a href="/new-arrivals" className="text-gray-600 hover:text-gray-900 font-medium transition duration-300">New Arrivals</a>
          <a href="/sale" className="text-gray-600 hover:text-gray-900 font-medium transition duration-300">Sale</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition duration-300">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition duration-300">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button className="text-gray-600 hover:text-gray-900 transition duration-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          {/* User Icon */}
          <button className="text-gray-600 hover:text-gray-900 transition duration-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
        {/* Mobile menu button (hidden on desktop) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
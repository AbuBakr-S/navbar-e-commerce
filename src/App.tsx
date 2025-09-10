import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex gap-26">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-xl font-bold text-indigo-700">
                Logo | Brand
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-gray-700 hover:text-indigo-700">Shop all</a>
              <a href="#" className="text-gray-700 hover:text-indigo-700">Latest arrivals</a>
            </div>
          </div>
          

          {/* Group Icons / Buttons */}
          <div className="flex items-center gap-4">
            <span>Shopping Cart</span>
            {/* Mobile hamburger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-700 focus:outline-none"
              >
                {isOpen ? (
                  // Close icon
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-gray-700 hover:text-indigo-700">Shop all</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-700">Latest arrivals</a>
        </div>
      )}
    </nav>
  );
}

export default App

import { useState } from "react";
import shoppingBagIcon from "./assets/shopping-bag-icon.svg";
import hamburgerIcon from "./assets/hamburger-icon.svg";
import closeIcon from "./assets/close-icon.svg";
import logo from "./assets/logo.svg";

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
                <img src={logo} />
              </a>
              { isOpen && <button className="p-1"><img src={closeIcon} /></button> }
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="text-gray-700 hover:text-indigo-700">Shop all</a>
              <a href="#" className="text-gray-700 hover:text-indigo-700">Latest arrivals</a>
            </div>
          </div>
          

          {/* Group Icons / Buttons */}
          <div className="flex items-center gap-4">
            <img src={shoppingBagIcon} alt="Shopping cart" />
            {/* Mobile hamburger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-700 focus:outline-none"
              >
                {/* Hamburger icon */}
                <img src={hamburgerIcon} alt="Hamburger icon" />
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

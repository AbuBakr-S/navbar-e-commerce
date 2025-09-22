import { useState } from "react";
import shoppingBagIcon from "./assets/shopping-bag-icon.svg";
import hamburgerIcon from "./assets/hamburger-icon.svg";
import closeIcon from "./assets/close-icon.svg";
import logo from "./assets/logo.svg";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 h-8 mt-8 mb-4">
        <div className="flex justify-between">

          <div className="flex gap-26">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-xl font-bold text-indigo-700">
                <img src={logo} />
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
        <>
          {/* Mobile container */}
          <div className="fixed inset-0 flex md:hidden">
            {/* Nav panel */}
            <div className="w-[157px] bg-white z-50 flex flex-col gap-6 pl-4 pt-6 pb-3">
              {/* Logo + Close button */}
              <div className="flex items-center justify-between w-[125px]">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
                <button 
                  className="flex items-center justify-center w-5 h-5"
                  onClick={() => setIsOpen(false)}
                >
                  <img src={closeIcon} alt="Close menu" className="w-5 h-5 p-1" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-2">
                <a href="#" className="block text-gray-700 hover:text-indigo-700 px-3 py-2">Shop all</a>
                <a href="#" className="block text-gray-700 hover:text-indigo-700 px-3 py-2">Latest arrivals</a>
              </div>
            </div>

            {/* Dim overlay */}
            <div
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-neutral-950/70"
            />
          </div>
        </>
      )}
    </nav>
  );
}

export default App

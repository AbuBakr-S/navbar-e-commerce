import { useState } from "react";
import logo from "./assets/logo.svg";
import hamburgerIcon from "./assets/hamburger-icon.svg";
import closeIcon from "./assets/close-icon.svg";

import NavLinks from "./components/NavLinks";
import CartButton from "./components/CartButton";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled] = useState(false);
  const [cartCount] = useState(0);

  const navLinks = [
    { label: "Shop all", href: "#" },
    { label: "Latest arrivals", href: "#" },
  ];

  return (
    <nav className="min-w-[375px] px-5 py-4 mt-4 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-10">
            <a href="/" aria-label="Home" className="focus:outline-none">
              <img src={logo} alt="Brand logo" className="h-8" />
            </a>

            <div className="hidden md:flex space-x-8">
              <NavLinks links={navLinks} isDisabled={isDisabled} />
            </div>
          </div>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <CartButton count={cartCount} isDisabled={isDisabled} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label='Open menu'
              className="md:hidden text-gray-700 hover:text-indigo-700 focus:outline-none"
            >
              <img
                src={hamburgerIcon}
                alt="Open menu"
                className="w-6 h-6"
                aria-hidden="true"
              />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex md:hidden transition-all duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[157px] bg-white z-50 flex flex-col gap-6 pl-4 pt-6 pb-3">
            {/* Logo + Close */}
            <div className="flex items-center justify-between w-[125px]">
              <a href="/" aria-label="Home">
                <img src={logo} alt="Brand logo" className="h-8" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center w-5 h-5"
              >
                <img src={closeIcon} alt="" className="w-5 h-5 p-1" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav role="menu">
              <NavLinks links={navLinks} isDisabled={isDisabled} mobile />
            </nav>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-neutral-950/70"
          />
        </div>
      )}
    </nav>
  );
}

export default App;

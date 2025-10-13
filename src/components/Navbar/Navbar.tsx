import React from "react";
import NavLinks from "./NavLinks";
import CartButton from "./CartButton";

export type NavLink = { label: string; href: string };

export type NavbarProps = {
  navLinks: NavLink[];
  cartCount: number;
  logoSrc: string;
  hamburgerIcon: string;
  closeIcon: string;
  isDisabled?: boolean;
  shoppingBagIcon: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  navLinks,
  cartCount,
  isDisabled = false,
  logoSrc,
  hamburgerIcon,
  closeIcon,
  shoppingBagIcon,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}) => {
  return (
    <nav className="min-w-[375px] px-5 py-4 mt-4 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-10">
            <a href="/" aria-label="Home" className="focus:outline-none">
              <img src={logoSrc} alt="Brand logo" className="h-8" />
            </a>
            <div className="hidden md:flex space-x-8">
              <NavLinks links={navLinks} isDisabled={isDisabled} />
            </div>
          </div>
          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <CartButton count={cartCount} isDisabled={isDisabled} iconSrc={shoppingBagIcon} />
            <button
              onClick={onToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <img src={hamburgerIcon} alt="Open menu" className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex md:hidden transition-all duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-[157px] bg-white z-50 flex flex-col gap-6 pl-4 pt-6 pb-3 pr-1">
            {/* Logo + Close */}
            <div className="flex items-center justify-between w-[125px]">
              <a href="/" aria-label="Home">
                <img src={logoSrc} alt="Brand logo" className="h-8" />
              </a>
              <button
                onClick={onCloseMenu}
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
            onClick={onCloseMenu}
            className="flex-1 bg-neutral-950/70"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
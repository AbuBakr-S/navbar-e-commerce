import React from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import CartButton from "./CartButton";

export type NavLink = { label: string; href: string };

export type NavbarProps = {
  navLinks: NavLink[];
  cartCount: number;
  logoSrc: string;
  hamburgerIcon: string;
  closeIcon: string;
  shoppingBagIcon: string;
  isMenuOpen: boolean;
  isDisabled?: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  navLinks,
  cartCount,
  logoSrc,
  hamburgerIcon,
  closeIcon,
  shoppingBagIcon,
  isMenuOpen,
  isDisabled = false,
  onToggleMenu,
  onCloseMenu,
}) => (
  <nav className="min-w-[375px] px-5 py-4 mt-4 text-neutral-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="/" aria-label="Home" className="focus:outline-none">
            <img src={logoSrc} alt="Brand logo" className="h-8" />
          </a>
          <div className="hidden md:flex space-x-8">
            <NavLinks links={navLinks} isDisabled={isDisabled} />
          </div>
        </div>
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
    {isMenuOpen && (
      <MobileMenu
        logoSrc={logoSrc}
        closeIcon={closeIcon}
        navLinks={navLinks}
        isDisabled={isDisabled}
        onCloseMenu={onCloseMenu}
      />
    )}
  </nav>
);

export default Navbar;
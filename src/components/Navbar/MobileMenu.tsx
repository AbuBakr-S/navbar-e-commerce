import React from "react";
import NavLinks from "./NavLinks";
import type { NavLink } from "./Navbar";

type MobileMenuProps = {
  logoSrc: string;
  closeIcon: string;
  navLinks: NavLink[];
  isDisabled?: boolean;
  onCloseMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  logoSrc,
  closeIcon,
  navLinks,
  isDisabled,
  onCloseMenu
}) => (
  <div
    id="mobile-menu"
    className="fixed inset-0 z-50 flex md:hidden transition-all duration-300"
    role="dialog"
    aria-modal="true"
  >
    <div className="w-[157px] bg-white z-50 flex flex-col gap-6 pl-4 pt-6 pb-3 pr-1">
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
      <nav role="menu">
        <NavLinks links={navLinks} isDisabled={isDisabled} mobile />
      </nav>
    </div>
    <div
      onClick={onCloseMenu}
      className="flex-1 bg-neutral-950/70"
    />
  </div>
);

export default MobileMenu;
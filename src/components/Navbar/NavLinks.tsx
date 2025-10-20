import React from "react";
import type { NavLink } from "./Navbar";

type NavLinksProps = {
  links: NavLink[];
  isDisabled?: boolean;
  mobile?: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({
  links,
  isDisabled = false,
  mobile = false,
}) => (
  <>
    {links.map(({ label, href }) => (
      <a
        key={label}
        href={isDisabled ? undefined : href} // Remove href if disabled
        aria-disabled={isDisabled}           // Accessibility: mark as disabled
        tabIndex={isDisabled ? -1 : 0}       // Remove from tab order if disabled
        role={mobile ? "menuitem" : undefined} // Use menuitem role for mobile menu
        // Dynamically build className based on state and context
        className={[
          "block px-3 py-2 rounded transition-colors duration-200", // Base styles
          isDisabled
            ? "text-neutral-400 cursor-not-allowed pointer-events-none" // Disabled styles
            : "cursor-pointer hover:text-neutral-900 focus:outline-none focus:ring-4 focus:ring-indigo-600/12 text-gray-700", // Enabled styles
          mobile && "mr-1", // Add right margin for mobile view
        ]
          .filter(Boolean) // Remove any false or undefined values
          .join(" ")}      // Join classes into a single string
      >
        {label}
      </a>
    ))}
  </>
);

export default NavLinks;

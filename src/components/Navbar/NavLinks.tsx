import React from "react";

// Define props type
type NavLink = {
  label: string;
  href: string;
};

type NavLinksProps = {
  links: NavLink[];
  isDisabled?: boolean;
  mobile?: boolean;
};

// Arrow function component
const NavLinks: React.FC<NavLinksProps> = ({
  links,
  isDisabled = false,
  mobile = false,
}) => (
  <>
    {links.map(({ label, href }) => (
      <a
        key={label}
        href={isDisabled ? undefined : href}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        role={mobile ? "menuitem" : undefined}
        className={`block px-3 py-2 rounded transition-colors duration-200 ${
          isDisabled
            ? "text-neutral-400 cursor-not-allowed pointer-events-none"
            : "cursor-pointer hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/12 text-gray-700 rounded" // Desktop: hover + focus ring
        }`}
      >
        {label}
      </a>
    ))}
  </>
);

export default NavLinks;

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import logo from "./assets/logo.svg";
import hamburgerIcon from "./assets/hamburger-icon.svg";
import closeIcon from "./assets/close-icon.svg";
import shoppingBagIcon from "./assets/shopping-bag-icon.svg"

const App = () => {
  const [cartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Shop all", href: "#" },
    { label: "Latest arrivals", href: "#" },
  ];

  return (
    <Navbar
      navLinks={navLinks}
      cartCount={cartCount}
      isDisabled={false}
      logoSrc={logo}
      hamburgerIcon={hamburgerIcon}
      closeIcon={closeIcon}
      shoppingBagIcon={shoppingBagIcon}
      isMenuOpen={isOpen}
      onToggleMenu={() => setIsOpen(open => !open)}
      onCloseMenu={() => setIsOpen(false)}
    />
  )
}

export default App;

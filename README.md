# Navbar E-Commerce

A responsive **React** navigation bar with a mobile-friendly menu and shopping cart functionality. Built with **React**, **Tailwind CSS**, and **TypeScript**.

---

## Features

- **Responsive navigation bar**  
  Desktop and mobile-friendly layout using Tailwind CSS breakpoints.
- **Mobile menu with overlay**  
  Slide-in mobile menu with a close button and background overlay.
- **Cart button with item count**  
  Displays the number of items in the cart.
- **Accessible**  
  Uses proper ARIA attributes (`aria-expanded`, `aria-controls`, `role="dialog"`, `aria-modal`) for navigation and menus.
- **Easy to extend**  
  Navigation links can be updated dynamically via the `navLinks` array.

---

## Screenshots / Demo

**Desktop Navigation:**
![Desktop Nav](./screenshots/desktop-nav.png)

**Mobile Menu:**
![Mobile Menu](./screenshots/mobile-menu.png)

**Cart Button:**
![Cart Button](./screenshots/cart-button.png)

> Add screenshots in `./screenshots/` folder for clarity.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/navbar-e-commerce.git
cd navbar-e-commerce
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the app locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
  assets/       # Logo and icons
  components/   # NavLinks, CartButton components
  App.tsx       # Main app component
```

- **App.tsx** – Contains the main navigation logic and mobile menu state.  
- **NavLinks.tsx** – Renders navigation links dynamically.  
- **CartButton.tsx** – Shows the shopping cart with item count.  

---

## Customisation

- Update navigation links:

```ts
const navLinks = [
  { label: "Shop all", href: "#" },
  { label: "Latest arrivals", href: "#" },
];
```

- Adjust the cart count dynamically by changing the `cartCount` state in `App.tsx`.
- Enable/disable navigation links with `isDisabled`.

---

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Vite
- Cypress (for end-to-end testing)
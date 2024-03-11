import React from "react";
import "./Navbar.scss";

interface NavItem {
  label: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [{ label: "About" }, { label: "Work" }];
  return (
    <nav className="nav">
      <div className="nav__main">
        <div className="nav__main-text">ANANDU REGHU</div>
        <ul className="nav__items">
          {navItems.map((item: NavItem) => {
            return <li key={item.label}>{item.label}</li>;
          })}
        </ul>
      </div>
      <div className="nav__actions">
        <button>Let&apos;s Connect</button>
        <button>dev.anandureghu@gmail.com</button>
      </div>
    </nav>
  );
};

export default Navbar;

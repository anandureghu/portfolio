import "./Navbar.scss";

interface INavbarItem {
  label: string;
  action: () => void;
}

const Navbar = () => {
  const navItems: INavbarItem[] = [
    { label: "My Work", action: () => console.log("action") },
    { label: "Work Experience", action: () => console.log("action") },
    { label: "Education", action: () => console.log("action") },
    { label: "About Me", action: () => console.log("action") },
    { label: "Say Hi", action: () => console.log("action") },
  ];
  return (
    <div className="navbar">
      <div className="navbar__line" />
      <ul className="navbar__items">
        {navItems.map((item) => {
          return (
            <li className="navbar__items-item" onClick={item.action}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

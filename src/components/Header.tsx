import "./Header.css";
import Logo from "../assets/logo.svg";
import { useState } from "react";

function Header() {
  const [isOpenSidebar, setIsOpen] = useState<boolean>(false);

  const handleToggleSidebar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(e.target.checked)
  }

  const handleCloseSidebar = () => {
    setIsOpen(false)
  }

  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Logo" />

      <div
        onClick={handleCloseSidebar}
        className={`${isOpenSidebar && "backdrop"}`}
      />

      <nav className={`nav ${isOpenSidebar && "show-sidebar"}`}>
        <label htmlFor="toggle-sidebar" className="close-sidebar">
          <i className="fa-solid fa-xmark"></i>
        </label>
        <a onClick={handleCloseSidebar} href="#features" className="nav-link">
          Features
        </a>
        <a onClick={handleCloseSidebar} href="#team" className="nav-link">
          Team
        </a>
        <a onClick={handleCloseSidebar} href="#sign_in" className="nav-link">
          Sign In
        </a>
      </nav>
      <input
        onChange={handleToggleSidebar}
        id="toggle-sidebar"
        type="checkbox"
        checked={isOpenSidebar}
      />
      <label htmlFor="toggle-sidebar" className="open-sidebar">
        <i className="fa-solid fa-bars"></i>
      </label>
    </header>
  );
}

export default Header;

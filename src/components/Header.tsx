import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/public/images/logo.svg" alt="Logo" />
      </div>

      <nav className="main-nav">
        <a className="nav-link">Features</a>
        <a className="nav-link">Team</a>
        <a className="nav-link">Sign In</a>
      </nav>
    </header>
  );
}

export default Header;
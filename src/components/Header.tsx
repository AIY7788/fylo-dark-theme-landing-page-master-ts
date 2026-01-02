import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.svg" alt="Logo" />

      <nav className="nav">
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#team" className="nav-link">
          Team
        </a>
        <a href="#sign_in" className="nav-link">
          Sign In
        </a>
      </nav>
    </header>
  );
}

export default Header;

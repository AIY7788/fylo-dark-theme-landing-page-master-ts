import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <svg>
        <img src="/public/images/logo.svg" alt="Logo" />
      </svg>

      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#singin">Sing In</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
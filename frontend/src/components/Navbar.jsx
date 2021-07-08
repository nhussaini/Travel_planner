import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <header>
      <div>
        <a href="/" className="nav-title">
          TREK
        </a>
        <nav className="navbar-home">
          {/* <a></a> */}
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </div>
    </header>
  );
}

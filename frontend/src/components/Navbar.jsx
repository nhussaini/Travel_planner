import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <header>
      <div>
        <div>
          <a href="/" className="nav-title">
            TREK
          </a>
        </div>
        <nav className="navbar-home">
          {/* <a></a> */}
          <a href="/login" className="login-nav">
            Login
          </a>
          <a href="/register" className="register-nav">
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

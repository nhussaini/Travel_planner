import "../styles/Navbar.scss";

export default function Navbar() {
  const isLoggedIn = window.localStorage.getItem("user") ? true : false;

  return (
    <header>
      <div>
        <div>
          <a href="/" className="nav-title">
            TREK
          </a>
        </div>
        <nav className="navbar-home" isLoggedIn={false}>
          {/* <a href="/" className="login-nav">Logout</a> */}
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

import "styles/Navbar.scss";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  let history = useHistory();
  function handleLogout() {
    localStorage.clear();
    history.push("/login");
  }
  const isLoggedIn = window.localStorage.getItem("user") ? true : false;
  //console.log(localStorage.getItem("user"));

  if (!localStorage.getItem("user")) {
    return (
      <header className="nav-container">
        <div>
          <a href="/" className="nav-title">
            TREK
          </a>
        </div>
        <nav className="navbar-links" isLoggedIn={isLoggedIn}>
          <Button href="/login" variant="primary">
            Login
          </Button>
          <Button href="/register" variant="success">
            Register
          </Button>
          {/* <a href="/login" className="login-nav">
              Login
            </a>
            <a href="/register" className="register-nav">
              Register
            </a> */}
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <div>
          <div>
            <a href="/" className="nav-title">
              TREK
            </a>
          </div>
          <nav className="navbar-home" isLoggedIn={isLoggedIn}>
            {/* <a href="/" className="login-nav">
              Logout
            </a> */}
            <button class="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

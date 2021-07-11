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
          <Button href="/login" className="btn btn-light">
            Login
          </Button>
          <Button href="/register" className="btn btn-light">
            Register
          </Button>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="nav-container">
        <div>
          <a href="/" className="nav-title">
            TREK
          </a>
        </div>
        <nav className="navbar-links" isLoggedIn={isLoggedIn}>
          <button className="btn btn-light" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
    );
  }
}

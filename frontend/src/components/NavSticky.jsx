import "styles/nav.scss";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavSticky() {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    const obj = JSON.parse(localStorage.getItem("user"));
    const id = obj.id;
    history.push(`/users/${id}`);
  }

  function logout() {
    localStorage.clear();
  }

  if (!localStorage.getItem("user")) {
    localStorage.clear();
    return (
      <>
        <Navbar bg="dark" variant="dark" className="nav-container" sticky="top">
          <Navbar.Brand href="/" className="nav-title">
            <span>TREK</span>
          </Navbar.Brand>
          <Nav className="mr-auto navbar-links">
            <Button href="/login" className="btn btn-light btn-sm">
              Login
            </Button>
            <Button href="/register" className="btn btn-light btn-sm">
              Register
            </Button>
          </Nav>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="nav-container" sticky="top">
          <Navbar.Brand href="/" className="nav-title">
            <span>TREK</span>
          </Navbar.Brand>
          <Nav className="mr-auto navbar-links">
            <Button className="btn btn-light mx-2 btn-sm" onClick={handleClick}>
              Your Profile
            </Button>
            <Button
              href="/login"
              className="btn btn-secondary btn-sm"
              onClick={logout}
            >
              Logout
            </Button>
          </Nav>
        </Navbar>
      </>
    );
  }
}

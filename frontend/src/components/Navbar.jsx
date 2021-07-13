import "styles/nav.scss";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  console.log("current user******", localStorage.getItem("user"));
  const isLoggedIn = window.localStorage.getItem("user") ? true : false;

  if (!localStorage.getItem("user")) {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="nav-container" sticky="top">
          <Navbar.Brand href="/" className="nav-title">
            <span>TREK</span>
          </Navbar.Brand>
          <Nav className="mr-auto navbar-links">
            <Button href="/login" className="btn btn-light">
              Login
            </Button>
            <Button href="/register" className="btn btn-light">
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
          <Nav className="mr-auto navbar-links" isLoggedIn={isLoggedIn}>
            <Button href="/login" className="btn btn-light">
              Your Profile
            </Button>
            <Button href="/login" className="btn btn-light">
              Logout
            </Button>
          </Nav>
        </Navbar>
      </>
    );
  }
}

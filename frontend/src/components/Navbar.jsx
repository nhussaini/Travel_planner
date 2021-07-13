import "styles/nav.scss";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function NavBar() {
  let history = useHistory();
  //console.log("USER ID >>>>>>", localStorage.getItem("user"));
  //const getUserID = localStorage.getItem("user");
  //console.log(getUserID.id);
  // const id = JSON.stringify(getUserID);
  // //console.log("ID >>>", id);

  //function getUserID(user) {
  // const obj = JSON.parse(localStorage.getItem("user"));
  // console.log("json id>>>>>>", obj.id);
  // const userProfile = `/users/${obj.id}`;
  // console.log("user prof", userProfile);
  // }

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
          <Nav className="mr-auto navbar-links">
            <Button className="btn btn-light mx-2" onClick={handleClick}>
              Your Profile
            </Button>
            <Button
              href="/login"
              className="btn btn-secondary"
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

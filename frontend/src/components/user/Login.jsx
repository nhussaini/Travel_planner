import { useState } from "react";
import axios from "axios";
import "styles/Login.scss";
import { useHistory } from "react-router-dom";
import NavBar from "components/NavBar";
import Alert from "react-bootstrap/Alert";
import { useEffect } from "react";

export default function Login(props) {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState({});
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setAlert(false);
    setError(false);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setAlert(false);
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
    } else {
      axios
        .post("/userslogin", { email: email, password: password })
        .then((data) => {
          // console.log("if no match", data.data);
          if (!data.data) {
            setAlert(true);
          } else {
            const user = data.data;
            localStorage.setItem("user", JSON.stringify(user));
            // history.push(`/users/${user.id}`);
            history.push("/");
            console.log(user);
          }
        });
    }
  }
  useEffect(() => {
    //get the logged in userdata from local storge
    let userData = localStorage.getItem("user");
    userData = JSON.parse(userData);
    //get the user id
    if (userData) {
      history.push("/");
    }
  });

  return (
    <div className="login-bg">
      <NavBar />
      <Alert
        className={alert || error ? "login-error-show" : "login-error-hide"}
        variant="danger"
      >
        <span>{alert ? `Wrong Credentials, Try Again!` : null}</span>
        <span>{error ? `Fill up the Form please!` : null}</span>
      </Alert>
      <div className="top-div-login">
        <div className="login-box col-md-6 col-sm-9">
          <div className="login-title">Login</div>
          <div className="input-forms-login">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-left">
                <label for="exampleInputEmail1" class="label-name">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email..."
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3 text-left">
                <label for="exampleInputPassword1" class="label-name">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password..."
                  onChange={handlePasswordChange}
                />
              </div>

              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

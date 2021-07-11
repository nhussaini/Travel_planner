import { useState } from "react";
import axios from "axios";
import "../styles/Login.scss";
import { useHistory } from "react-router-dom";
import NavBar from "components/NavBar";

export default function Login(props) {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState({});

  // const user = {};
  // user.name = "Bob";
  // user.id = 1;
  // user.email = "bob@gmail.com";

  // localStorage.setItem("user", JSON.stringify(user));

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/userslogin", { email: email, password: password })
      .then((data) => {
        const user = data.data;
        localStorage.setItem("user", JSON.stringify(user));
        // history.push(`/users/${user.id}`);
        history.push("/");

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login-bg">
      <NavBar />
      <div className="top-div-login">
        <div className="login-box">
          <div className="login-title">Login</div>
          <div className="input-forms-login">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-left">
                <label for="exampleInputEmail1" class="label-name">
                  Email address
                </label>
                <input
                  type="email"
                  className="input-form form-control"
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

import { useState } from "react";
import "../styles/Register.scss";

export default function Register(props) {

  const [token, setToken] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <body class="register-bg">
      <div class="top-div">
        <div class="register-box">
          <div class="register-title">Register</div>
          <div class="input-forms">
            <form>
              <div className="mb-3">
                <label for="exampleInputName" class="label-name">
                  Full Name
                </label>
                <input
                  type="text"
                  class="input-form"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="nameHelp"
                  placeholder="Name..."
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-3 text-left">
                <label for="exampleInputEmail1" class="label-name">
                  Email address
                </label>
                <input
                  type="email"
                  class="input-form"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email..."
                  onChange={handleEmailChange}
                />
              </div>
              <div class="mb-3 text-left">
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
    </body>
  );
}

import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "components/NavBar";
import "../styles/Register.scss";

export default function Register(props) {
  let history = useHistory();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/users", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((data) => {
        const user = data.data;
        localStorage.setItem("user", JSON.stringify(user));
        history.push(`/`);

        console.log(data);
      });
  }

  return (
    <div className="register-bg">
      <NavBar />
      <div className="top-div">
        <div className="register-box">
          <div className="register-title">Register</div>
          <div className="input-forms-register">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="label-name">
                  First Name
                </label>
                <input
                  type="text"
                  className="input-form-register form-control"
                  id="exampleInputFirstName"
                  aria-describedby="nameHelp"
                  placeholder="First name..."
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputLastName" className="label-name">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input-form-register form-control"
                  id="exampleInputLastName"
                  aria-describedby="nameHelp"
                  placeholder="Last name..."
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="mb-3 text-left">
                <label htmlFor="exampleInputEmail" className="label-name">
                  Email address
                </label>
                <input
                  type="email"
                  className="input-form-register form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Email..."
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3 text-left">
                <label htmlFor="exampleInputPassword" className="label-name">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
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

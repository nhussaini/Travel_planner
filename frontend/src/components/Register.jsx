import axios from "axios";
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

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/users", {fullName:fullName, email:email, password:password})
    .then((data) => console.log(data))
  }

  return (
    
      <div className="top-div">
        <div className="register-box">
          <div className="register-title">Register</div>
          <div className="input-forms">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="label-name">
                  Full Name
                </label>
                <input
                  type="text"
                  className="input-form"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  placeholder="Name..."
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-3 text-left">
                <label htmlFor="exampleInputEmail" className="label-name">
                  Email address
                </label>
                <input
                  type="email"
                  className="input-form"
                  className="form-control"
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
    
  );
}

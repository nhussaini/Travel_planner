import "../styles/Login.scss";

export default function Login(props) {
  return (
    <body class="login-bg">
      <div class="top-div-login">
        <div class="login-box">
          <div class="register-title">Register</div>
          <div class="input-forms">
            <form>
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

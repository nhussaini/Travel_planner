import "../styles/Register.scss";

export default function Register(props) {
  return (
    <body>
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
                  type="email"
                  class="input-form"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
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
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

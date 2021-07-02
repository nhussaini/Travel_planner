export default function Register(props){

  return (
    <div className="d-flex justify-content-center box">
      <div>Register</div>
      <form>
      <div className="mb-3 text-left">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
        <div className="mb-3 text-left">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 text-left">
          <label for="exampleInputPassword1" class="form-label">
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
  )
}
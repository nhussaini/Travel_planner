export default function Form(props) {
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Choose a Destination
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Choose a City"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

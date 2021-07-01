import { useState } from "react";

export default function Form(props) {
  const [location, setLocation] = useState(null);
  function handleChange(e) {
    setLocation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getWeather(location);
  }
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputLocation" className="form-label">
            Choose a Destination
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLocation"
            aria-describedby="emailHelp"
            placeholder="Choose a City"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

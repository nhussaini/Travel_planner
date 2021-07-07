import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form(props) {
  const [input, setInput] = useState(null);

  console.log(props.setLocationState);
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setLocationState(input);
    // useHistory.push("/cities/5");
    // window.location.href = `/cities/${input}`;
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

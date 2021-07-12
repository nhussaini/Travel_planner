import { useState } from "react";
import "styles/home.scss";

export default function Form(props) {
  const [input, setInput] = useState(null);
  const [error, setError] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) {
      setError(true);
    }
    if (input && !error) {
      props.fetchCity(input);
    }
  }
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="form-control"
          id="inputLocation"
          aria-describedby="emailHelp"
          placeholder="Enter a city name..."
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-light">
        Submit
      </button>
      <div className="error-message">
        {!input && error ? `Please type a city name!` : null}
      </div>
    </form>
  );
}

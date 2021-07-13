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
    setError(false);
    props.resetError();
    if (!input) {
      setError(true);
    }
    if (input && !error) {
      const cityCapitalized = input.charAt(0).toUpperCase() + input.slice(1);
      props.fetchCity(cityCapitalized);
    }
  }
  console.log(props.error);
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
        {error ? `Please type a city name!` : null}
        {!error && props.error
          ? `Sorry, we couldn't find "${props.error}" worldwide, try a different city. `
          : null}
      </div>
    </form>
  );
}

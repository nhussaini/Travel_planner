import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "styles/home.scss";

export default function Form(props) {
  let history = useHistory();
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
      axios.post("/cities/getCityData", { userInput: input }).then((data) => {
        history.push({
          pathname: `/cities/${input}`,
        });
      });
    }
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
        {!input && error ? (
          <div className="error-message">Please Type a City!</div>
        ) : null}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "styles/home.scss";

export default function Form(props) {
  let history = useHistory();
  const [input, setInput] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

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
      {!input && error ? (
        <div className="error-message">Please Type a City!</div>
      ) : null}
      <button type="submit" className="btn btn-light">
        Submit
      </button>
    </form>
  );
}

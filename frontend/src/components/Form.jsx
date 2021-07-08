import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Form(props) {
  let history = useHistory();
  const [input, setInput] = useState(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.setLocationState(input);
    axios.post("/cities/getCityData", { userInput: input }).then((data) => {
      // We want to just send the post request to backend, where it will redirect to the get route for city, in that route we want to change the state based on the data returned from backend. at the moment we are haviong to do it after bot the post and get request.....
      // console.log("Post done");
      // setStatus(true);
      // const fetchedData = data.data;
      console.log("Redirecting----");
      history.push({
        pathname: `/cities/${input}`,
        // state: {
        //   key: input,
        // },
      });
    });
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

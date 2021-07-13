import { useCityData } from "../hooks/useCityData";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// import "../styles/ToDo.scss";
import "../styles/home.scss";
import Form from "./Form";
import TrendingCities from "./TrendingCities";
// import Navbar from "./Navbar-OLD";
import Footer from "./Footer";
import NavSticky from "./NavSticky";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default function Home(props) {
  const [loader, setLoader] = useState(false);
  const [location, setLocation] = useState("");
  const [citySearchError, setCitySearchError] = useState(false);
  let history = useHistory();
  // const { state } = useTest();

  const resetError = () => setCitySearchError(false);

  function fetchCity(city) {
    setLoader(true);
    setLocation(city);
    axios.post("/api/cities/getCityData", { userInput: city }).then((data) => {
      setLoader(false);
      if (!data.data) {
        setCitySearchError(true);
      } else {
        history.push({
          pathname: `/cities/${city}`,
        });
      }
    });
  }
  return (
    <div>
      <NavSticky />
      <section className="home-img-div">
        <div className="home-img-text">Plan your trips with ease.</div>
        {loader ? (
          <div className="spinner">
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <div>Loading.....</div>
          </div>
        ) : (
          <div className="form-container">
            <Form
              fetchCity={fetchCity}
              error={citySearchError ? location : null}
              resetError={resetError}
            />
          </div>
        )}
      </section>
      <TrendingCities />
      <Footer />
    </div>
  );
}

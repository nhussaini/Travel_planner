import { useCityData } from "../hooks/useCityData";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// import "../styles/ToDo.scss";
import "../styles/home.scss";
import Form from "./Form";
import TrendingCities from "./TrendingCities";
// import Navbar from "./Navbar-OLD";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default function Home(props) {
  const [loader, setLoader] = useState(false);
  let history = useHistory();
  // const { state } = useTest();

  function fetchCity(city) {
    setLoader(true);
    axios.post("/api/cities/getCityData", { userInput: city }).then((data) => {
      setLoader(false);
      history.push({
        pathname: `/cities/${city}`,
      });
    });
  }
  return (
    <div>
      <NavBar />
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
          <Form fetchCity={fetchCity} />
        )}
      </section>
      <TrendingCities />
      <Footer />
    </div>
  );
}

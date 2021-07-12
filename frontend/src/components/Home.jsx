import { useCityData } from "../hooks/useCityData";
import "../styles/ToDo.scss";
import "../styles/home.scss";
import Form from "./Form";
import TrendingCities from "./TrendingCities";
// import Navbar from "./Navbar-OLD";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Spinner from "react-bootstrap/Spinner";

export default function Home(props) {
  const { state, setLocationState } = useCityData();
  // const { state } = useTest();
  console.log(state.location);

  return (
    <div>
      <NavBar />
      <div className="home-img-div">
        <div className="home-img-text">Plan your trips with ease.</div>
        <Form setLocationState={setLocationState} />
        {/* <div>
          <Spinner animation="border" role="status" variant="primary"></Spinner>
          <div>Loading.....</div>
        </div> */}
      </div>
      <TrendingCities />
      <Footer />
    </div>
  );
}

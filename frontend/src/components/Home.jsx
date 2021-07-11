import { useCityData } from "../hooks/useCityData";
import "../styles/ToDo.scss";
import "../styles/home.scss";
import Form from "./Form";
import TrendingCities from "./TrendingCities";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home(props) {
  const { state, setLocationState } = useCityData();
  // const { state } = useTest();
  console.log(state.location);

  return (
    <div>
      <div className="home-img-div">
        <Navbar />
        {/* <img
          src="https://images.unsplash.com/photo-1524174491029-6388265feb4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="homepage"
          className="homepage-img"
        /> */}
        <div className="home-img-text">Plan your trips with ease.</div>
      </div>
      Home
      <Form setLocationState={setLocationState} />
      <TrendingCities />
      <Footer />
    </div>
  );
}

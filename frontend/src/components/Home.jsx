import { useCityData } from "../hooks/useCityData";
import "../styles/ToDo.scss";
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
      <Navbar />
      Home
      <Form setLocationState={setLocationState} />
      <TrendingCities />
      <Footer />
    </div>
  );
}

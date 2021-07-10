import TrendingCity from "./TrendingCity";
import { cityData } from "./TrendingCity";
import "../styles/TrendingCities.scss";
import { useEffect } from "react";
import axios from "axios";

export default function TrendingCities(props) {
  // make a axios request to back end for data
  // get data from backend for cities
  // loop through the array of cities,
  // show random cities as trending city
  useEffect(() => {
    axios.get("/back/trending").then((data) => {
      console.log(data);
    });
  }, []);

  console.log("city props", props);

  const allTrendingCities = cityData.map((city, index) => {
    return <TrendingCity key={index} city={city.name} img={city.img} />;
  });

  return (
    <div>
      <div>
        <h2 className="heading">Trending Destinations</h2>
      </div>
      <div className="trending-cities-container">{allTrendingCities}</div>
    </div>
  );
}

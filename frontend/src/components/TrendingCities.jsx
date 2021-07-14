import TrendingCity from "./TrendingCity";
import { cityData } from "./TrendingCity";
import "../styles/TrendingCities.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TrendingCities(props) {
  const [trendingCities, setTrendingCities] = useState([]);
  // make a axios request to back end for data
  // get data from backend for cities
  // loop through the array of cities,
  // show random cities as trending city

  useEffect(() => {
    axios.get("/back/cities/trending").then((data) => {
      setTrendingCities(data.data);
    });
  }, []);
  const allTrendingCities = trendingCities.map((city) => {
    return <TrendingCity key={city.id} {...city} />;
  });

  return (
    <div>
      <div className="parent-trending-cities">
        <h2 className="heading">Trending Destinations</h2>
        <hr className="hr" />
      </div>
      <div className="trending-cities-container">{allTrendingCities}</div>
    </div>
  );
}

import TrendingCity from "./TrendingCity";
import { cityData } from "./TrendingCity";
import "../styles/TrendingCities.scss";

export default function TrendingCities(props) {
  // make a axios request to back end for data
  // get data from backend for cities
  // loop through the array of cities,
  // show random cities as trending city

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

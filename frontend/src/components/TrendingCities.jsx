import TrendingCity from "./TrendingCity";
import { cityData } from "./TrendingCity";

export default function TrendingCities(props) {
  console.log("city props", props);
  // const allTrendingCities = props.map((city) => {
  //   return <TrendingCity city={city} />;
  // });

  const allTrendingCities = cityData.map((city) => {
    <p>City name: {city.name}</p>;
    <img src={city.img} alt="cities" />;
    return <TrendingCity />;
  });

  return (
    <div>
      <div>
        <h2 className="heading">Trending Destinations</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {allTrendingCities}
      </div>
    </div>
  );
}

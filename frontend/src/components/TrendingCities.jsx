import TrendingCity from "./TrendingCity";
import { cityData } from "./TrendingCity";

export default function TrendingCities(props) {
  console.log("city props", props);

  const allTrendingCities = cityData.map((city) => {
    return <TrendingCity city={city.name} img={city.img} />;
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

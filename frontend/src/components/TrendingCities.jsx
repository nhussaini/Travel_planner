import TrendingCity from "./TrendingCity";

export default function TrendingCities(props) {
  console.log("city props", props);
  // const allTrendingCities = props.map((city) => {
  //   return <TrendingCity city={city} />;
  // });

  const allTrendingCities = TrendingCity.map((city) => {});

  return (
    <div>
      <div>
        <h2 className="heading">Trending Destinations</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {/* {allTrendingCities} */}
      </div>
    </div>
  );
}

export const cityData = [
  {
    name: "Dubai",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Toronto",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Miami",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Paris",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Moscow",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "London",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Tokyo",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Barcelona",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Singapore",
    img: "../styles/bg-pic-4.png",
  },
  {
    name: "Los Angeles",
    img: "../styles/bg-pic-4.png",
  },
];
export default function TrendingCity(props) {
  // const allTrendingCities = cityData.map((city) => {
  //   <p>City name: {city.name}</p>;
  //   <img src={city.img} alt="cities" />;
  //   return <TrendingCity />;
  // });

  return (
    <div className="weather-container">
      <p>City Name</p>
      <div>
        <img alt="city" src="../styles/bg-pic-4.png" />
        {/* <p>{allTrendingCities}</p> */}
      </div>
    </div>
  );
}

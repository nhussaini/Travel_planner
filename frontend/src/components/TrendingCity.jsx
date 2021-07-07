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
    <div className="trending-city-card card">
      <div className="city-name">{props.city}</div>
      <div>
        <img
          className="trending-city-img"
          alt="city"
          src={`https://images.unsplash.com/photo-1486325212027-8081e485255e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
        />
        {/* <p>{allTrendingCities}</p> */}
      </div>
    </div>
  );
}

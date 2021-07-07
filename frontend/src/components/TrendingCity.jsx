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
  return (
    <div className="weather-container">
      <p>City</p>
      <div>
        <img alt="city" src="../styles/bg-pic-4.png" />
        <p>City Name</p>
      </div>
    </div>
  );
}

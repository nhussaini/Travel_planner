export default function TrendingCity(props) {
  return (
    <div className="trending-city-card card">
      <div className="city-name">{props.short_name}</div>
      <div className="city-summary">
        <p>{props.long_name}</p>
        <p>Population: {props.population}</p>
      </div>
      <div>
        <a href={`/cities/${props.short_name}`}>
          <img
            className="trending-city-img"
            alt={props.long_name}
            src={props.image_url}
          />
        </a>
      </div>
    </div>
  );
}

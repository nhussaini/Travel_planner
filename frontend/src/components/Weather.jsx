export default function Weather(props) {
  return (
    <div className="border m-2">
      <p>{props.datetime}</p>
      <p>{props.temp}</p>
      <img
        alt={props.description}
        src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
      />
      <p>{props.description}</p>
    </div>
  );
}

// https://www.weatherbit.io/static/img/icons/t01d.png
// https://www.weatherbit.io/static/img/c02d.png

import "../styles/cityLinkbuttons.scss";

export default function CityLinkButtons(props) {
  console.log(props);
  const {
    airbnb_url,
    alltrails_url,
    getyourguide_url,
    google_events_url,
    kayak_car_rental_url,
    kayak_lodgings_url,
  } = props.locationData;

  return (
    <section className="links-container">
      <div className="button" id="button-3">
        <div className="circle"></div>
        <a href="#">Let's Go!</a>
      </div>
      <div className="button" id="button-3">
        <div className="circle"></div>
        <a href="#">Let's Go!</a>
      </div>
      <div className="button" id="button-3">
        <div className="circle"></div>
        <a href="#">Let's Go!</a>
      </div>
      <div className="button" id="button-3">
        <div className="circle"></div>
        <a href="#">Let's Go!</a>
      </div>
    </section>
  );
}

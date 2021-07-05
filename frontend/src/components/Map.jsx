export default function Map(props) {
  return (
    <div>
      <iframe
        title="Map ot toronto"
        width="600"
        height="450"
        loading="lazy"
        allowfullscreen
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A&q=${props.location}`}
      ></iframe>
    </div>
  );
}

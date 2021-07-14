import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMap(props) {
  const loader = new Loader({
    apiKey: "AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A",
    version: "weekly",
    libraries: ["places"],
  });

  const mapOptions = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 12,
  };
  useEffect(() => {
    loader
      .load()
      .then((google) => {
        let map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );

        props.thingsToDo.map((thing, index) => {
          const infowindow = new google.maps.InfoWindow({
            content: `<div>
              <p>${thing.name}</p>
              <p>Rating: ${thing.rating}</p>
            </div>`,
          });
          const marker = new google.maps.Marker({
            position: { lat: Number(thing.lat), lng: Number(thing.lng) },
            map,
            label: `${index}`,
            title: thing.name,
            animation: google.maps.Animation.DROP,
          });

          marker.addListener("mouseover", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          });

          marker.addListener("mouseout", () => {
            infowindow.close();
          });
          return marker;
        });
      })
      .catch((e) => {
        // do something
      });
  });

  return <div id="map"></div>;
}

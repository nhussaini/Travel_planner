// import React from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// function GoogleMap(props) {
//   const containerStyle = {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//   };
//   // const allMarkers = props.thingsTodo.map((thing, index) => {
//   //   return (
//   //     <Marker
//   //       key={index}
//   //       id={index}
//   //       position={thing.geometry.location}
//   //       onClick={() => console.log("Clicked")}
//   //     />
//   //   );
//   // });

//   console.log(props.thingsToDo);
//   return (
//     <div id="mapContainer">
//       <Map
//         google={props.google}
//         zoom={14}
//         containerStyle={containerStyle}
//         initialCenter={{
//           lat: 43.6532,
//           lng: -79.3832,
//         }}
//       >
//         <Marker
//           position={{
//             lat: 43.6532,
//             lng: -79.3832,
//           }}
//           onClick={() => console.log("Clicked")}
//         />
//       </Map>
//     </div>
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A",
// })(GoogleMap);

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
      lng: props.long,
    },
    zoom: 12,
  };

  // const map;
  // Promise
  console.log(props.thingsToDo[0]);
  useEffect(() => {
    loader
      .load()
      .then((google) => {
        let map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );
        const infowindow = new google.maps.InfoWindow({
          content: "Hiiii",
        });

        props.thingsToDo.map((thing, index) => {
          const marker = new google.maps.Marker({
            position: thing.geometry.location,
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

          return marker;
          // return new google.maps.Marker({
          //   position: thing.geometry.location,
          //   map,
          //   label: `${index}`,
          //   title: thing.name,
          //   animation: google.maps.Animation.DROP,
          // }).addListener("click", () => {
          //   // console.log(thing.name);
          //   infowindow.open({
          //     anchor: null,
          //     map,
          //     shouldFocus: false,
          //   });
          // });
        });

        // const marker = new google.maps.Marker({
        //   position: { lat: props.lat, lng: props.long },
        //   map,
        //   title: "Hello World!",
        // });
        // marker.addListener("click", () => {
        //   infowindow.open({
        //     anchor: marker,
        //     map,
        //     shouldFocus: false,
        //   });
        // });
      })
      .catch((e) => {
        // do something
        console.log("Something is Wrong---", e);
      });
  });

  return <div id="map"></div>;
}

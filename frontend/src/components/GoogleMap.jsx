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

import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMap() {
  const loader = new Loader({
    apiKey: "AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A",
    version: "weekly",
    libraries: ["places"],
  });

  const mapOptions = {
    center: {
      lat: 43.6532,
      lng: -79.3832,
    },
    zoom: 12,
  };

  // Promise
  loader
    .load()
    .then((google) => {
      new google.maps.Map(document.getElementById("map"), mapOptions);
    })
    .catch((e) => {
      // do something
      console.log("Something is Wrong");
    });
  return <div id="map"></div>;
}

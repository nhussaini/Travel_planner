// import { useEffect } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// export default function GoogleMap(props) {
//   return (
//     <div>
//       {/* {console.log(props.lat)}
//       {console.log(props.long)}
//       <iframe
//         title="Map ot toronto"
//         width="600"
//         height="450"
//         loading="lazy"
//         allowFullScreen
//         src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A&q=${props.location}`}
//       ></iframe> */}
//     </div>
//   );
// }

import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function GoogleMap(props) {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };
  // const allMarkers = props.thingsTodo.map((thing, index) => {
  //   return (
  //     <Marker
  //       key={index}
  //       id={index}
  //       position={thing.geometry.location}
  //       onClick={() => console.log("Clicked")}
  //     />
  //   );
  // });

  console.log(props.thingsToDo);
  return (
    <div id="mapContainer">
      <Map
        google={props.google}
        zoom={14}
        containerStyle={containerStyle}
        initialCenter={{
          lat: 43.6532,
          lng: -79.3832,
        }}
      >
        <Marker
          position={{
            lat: 43.6532,
            lng: -79.3832,
          }}
          onClick={() => console.log("Clicked")}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A",
})(GoogleMap);

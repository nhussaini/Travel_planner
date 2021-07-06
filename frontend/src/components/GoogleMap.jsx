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

import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class GoogleMap extends Component {
  render() {
    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    return (
      <div id="mapContainer">
        <Map
          google={this.props.google}
          zoom={14}
          containerStyle={containerStyle}
          initialCenter={{
            lat: 37.09024,
            lng: -95.712891,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKiSBRO8K9Y_DwPGTadsCGzSh7p589d-A",
})(GoogleMap);

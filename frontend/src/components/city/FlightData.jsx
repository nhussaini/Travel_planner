import { useEffect } from "react";

export default function FlightData() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/scripts/flight-widget.js";
    // "/scripts/flight-widget.js/&affilid=mdtawfiqulhasankhanflightwidget";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div>
      Parent Div
      <div id="widget-holder"></div>
    </div>
  );
}

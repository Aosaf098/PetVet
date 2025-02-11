import React from "react";

const LocationMap = () => {
  return (
    <div style={{ width: "50%", height: "500px" }}>
      <iframe
        className="rounded-lg"
        title="OpenStreetMap"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        src="https://www.openstreetmap.org/export/embed.html?bbox=90.3620%2C23.7362%2C90.3865%2C23.7585&layer=mapnik
"
      ></iframe>
    </div>
  );
};

export default LocationMap;

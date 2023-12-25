import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Map = () => {
  const position = [30.4, 31.22];
  return (
    <div className="contact-map-container">
      <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
            })
          }
        >
          <Popup>Ahmed Adel Start-Up For Furniture.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

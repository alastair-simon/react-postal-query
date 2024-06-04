import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

type propsType = {
  latitude: string | null;
  longitude: string | null;
};

export default function MyMapComponent ({ latitude, longitude }:propsType) {
  //fallback position
  const defaultPosition: [number, number] = [51.505, -0.09];

  //check if long and lat are there
  const position: [number, number] = latitude && longitude ? [parseFloat(latitude), parseFloat(longitude)] : defaultPosition;

  //update map every time lat and long changed
  const MapUpdater: React.FC<{ position: [number, number] }> = ({position}) => {
    const map = useMap();
    useEffect(() => {
      map.setView(position);
    }, [position, map]);
    return null;
  };

  return (
    <MapContainer center={position} zoom={13} className="mapStyles">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
      <MapUpdater position={position} />
    </MapContainer>
  );
};


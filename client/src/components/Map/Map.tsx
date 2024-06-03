// MyLeafletComponent.js
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MyMapComponent({ long, lat }) {
  const position = [lat, long]; // Using the passed latitude and longitude

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}

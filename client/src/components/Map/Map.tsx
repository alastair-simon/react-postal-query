import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Map.css'

export default function MyMapComponent({ long, lat }) {
  const position = [52.5167, 13.4]; // Using the passed latitude and longitude

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{}}
      className="mapStyles"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}

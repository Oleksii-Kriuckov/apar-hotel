import { MapContainer, TileLayer } from "react-leaflet";
// import useLocation from "../hooks/useLocation";
import { Coordinates } from "../assets/types";

interface LeafletContainerProps {
  children: React.ReactNode;
  hotelLocation: Coordinates;
  zoom: number;
  style?: object
}

export const MyMapContainer: React.FC<LeafletContainerProps> = ({
  children,
  hotelLocation,
  zoom,
  style
}) => {
  return (
    <MapContainer
      className="map_container"
      style={style}
      zoom={zoom}
      center={hotelLocation}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

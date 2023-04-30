import { MapContainer, TileLayer } from "react-leaflet";
// import useGeoLocation from "../../hooks/geo-location-hook";
import useLocation from "../hooks/useLocation";
import { Coordinates } from "../assets/types";

interface LeafletContainerProps {
  children: React.ReactNode;
  hotelLocation: Coordinates;
  zoom: number
}

export const MyMapContainer: React.FC<LeafletContainerProps> = ({
  children, hotelLocation, zoom
}) => {
  //   const { position } = useGeoLocation();
  // const { userLocation } = useLocation();

  return (
    <MapContainer
      style={{ height: 300 }}
      // className="leaflet-map"
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

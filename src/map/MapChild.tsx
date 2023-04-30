import markerIcon from "leaflet/dist/images/marker-icon.png";
import { Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import { Coordinates } from "../assets/types";

type MapChildProps = {
  location: Coordinates;
//   zoom: number;
};

export const MapChild: React.FC<MapChildProps> = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(location);
  }, []);

  const userIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [22, 38],
    iconAnchor: [11, 19],
  });
  return (
    <div>
      <Marker position={location} icon={userIcon}></Marker>
    </div>
  );
};

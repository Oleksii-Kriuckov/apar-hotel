import { useEffect, useState } from "react";
import { Coordinates } from "../assets/types";

function useLocation(position?: GeolocationCoordinates) {
  const [userLocation, setUserLocation] = useState<Coordinates>({
    lat: position?.latitude ?? 50.9,
    lng: position?.longitude ?? 32.35,
    zoom: 9,
  });

  useEffect(() => {
    if (position) {
      setUserLocation({
        lat: position.latitude,
        lng: position.longitude,
        zoom: 10,
      });
    }
  }, [position]);

  return {
    userLocation,
  };
}

export default useLocation;

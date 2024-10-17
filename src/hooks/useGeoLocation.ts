import { useEffect, useState } from 'react';

function useUserGeoLocation() {
    const [position, setPosition] = useState<GeolocationCoordinates | undefined>()
    const [error, setError] = useState<string>();

    useEffect(() => {
        const geo = navigator.geolocation;
        // geo.getCurrentPosition((e) => {
        //   console.log(e.coords)
        // })
        if (!geo) {
          setError("Location data not available");
          return;
        }
        const watcher = geo.watchPosition((e) => { 
            setPosition(e.coords) 
        }, (e) => setError(e.message));
        return () => geo.clearWatch(watcher);
      }, [setPosition, setError]);


    return {
        position,
        error,
    };
}

export default useUserGeoLocation;
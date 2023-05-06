import { IHotels } from "../assets/types";
import { hotels } from "../assets/Info";
import { useState, useEffect } from "react";

function useFind(city: string) {
  const [result, setResult] = useState({});

  function isCityIHotels(city: any): city is IHotels {
    return (city as IHotels).description !== undefined;
  }

  useEffect(() => {
    const findCity = hotels.find((el) => el.city.toLowerCase() === city);
    if (findCity) {
      setResult(findCity);
    }
  }, [city]);
  let findCity;
  if (result && isCityIHotels(result)) {
    findCity = result;
  } else {
    findCity = hotels[0];
  }

  return { findCity };
}
export default useFind;

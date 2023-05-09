import { IHotelInfo, IHotelsInCity } from "../assets/types";
import { allHotels } from "../assets/Info";
import { useState, useEffect } from "react";

function useFind(city: string, hotel?: string) {
  const [hotelsInCity, setHotelsInCity] = useState({});
  const [hotelInfo, setHotelInfo] = useState({});

  function isCityInHotels(city: any): city is IHotelsInCity {
    return (city as IHotelsInCity).description !== undefined;
  }
  
  function isHotel(hotel: any): hotel is IHotelInfo {
    return (hotel as IHotelInfo).hotelName !== undefined;
  }

  useEffect(() => {
    const findCity = allHotels.find((el) => el.city.toLowerCase() === city);
    if (findCity) {
      setHotelsInCity(findCity);
      const findHotel = findCity.hotelsInfo.find(
        (el) => el.hotelName.toLowerCase() === hotel
      );
      if (findHotel) setHotelInfo(findHotel);
    }
  }, [city, hotel]);

  let findCity, findHotel;

  if (hotelsInCity && isCityInHotels(hotelsInCity)) {
    findCity = hotelsInCity;
  } else {
    findCity = allHotels[0];
  }
  
  if (hotelInfo && isHotel(hotelInfo)) {
    findHotel = hotelInfo;
  } else {
    findHotel = allHotels[0].hotelsInfo[0];
  }

  return { findCity, findHotel };
}
export default useFind;

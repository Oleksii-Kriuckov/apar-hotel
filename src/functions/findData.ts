import { allHotels } from "../assets/Info";

 function findData(city: string, hotel?: string) {
  let findHotel;

  const findCity = allHotels.find((el) => el.city.toLowerCase() === city);
  if (findCity) {
    findHotel = findCity.hotelsInfo.find(
      (el) => el.hotelName.toLowerCase() === hotel
    );
  }
  
  return { findCity, findHotel };
}

export default findData;

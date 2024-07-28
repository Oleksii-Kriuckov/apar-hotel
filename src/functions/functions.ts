import { allHotels } from "../assets/Info";
import { HotelNames, IRoom } from "../assets/types";
import { Dayjs } from "dayjs";

export function findData(city: string, hotel?: string) {
  let findHotel, findCity;

  if (city) {
    findCity = allHotels.find((el) => el.city.toLowerCase() === city);
  }
   
  if (findCity) {
    findHotel = findCity.hotelsInfo.find(
      (el) => el.hotelName.toLowerCase() === hotel
    );
  }
  return { findCity, findHotel };
}

export const formatDays = (value: [Dayjs, Dayjs]): [number, number] => {
  value[0] = value[0].set("hour", 14).set("minute", 0).set("second", 0)
  value[1] = value[1].set("hour", 12).set("minute", 0).set("second", 0)
  return [value[0].valueOf(), value[1].valueOf()]
}
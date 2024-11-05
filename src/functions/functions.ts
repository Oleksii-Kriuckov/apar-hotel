import { allHotels } from "../assets/Info";
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
   const dateFrom = value[0].set("hour", 14).set("minute", 0).set("second", 0)
  const dateTo = value[1].set("hour", 12).set("minute", 0).set("second", 0)
  return [dateFrom.valueOf(), dateTo.valueOf()]
}

export const enterTel = (e: React.KeyboardEvent) => {
  if (e.key.search(/[0-9]/) === -1 && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'Delete') {
      e.preventDefault()
      // console.log("Not a number")
  }
}
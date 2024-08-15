import {
  Hotel_ROUTE,
  Booking_ROUTE,
  MainPage_ROUTE,
  Feedback_ROUTE,
} from "../routers/paths";
import { hotels } from "./Info";
import { Link } from "react-router-dom";

export const links = [
  { link: "Hotels", to: MainPage_ROUTE },
  { link: "About the hotels", to: Booking_ROUTE },
  { link: "Booking", to: '/kyiv/'},
  { link: "Feedback", to: Feedback_ROUTE },
];

export const reservationItems = hotels.map((hotel, ind) => {
  return {
    key: `${ind}`,
    label: <Link to={`/${hotel.city.toLocaleLowerCase()}/${hotel.name.toLocaleLowerCase()}/`}>{`${hotel.name} (${hotel.city})`}</Link>,
  }
})
 
export const aboutHotelItems = hotels.map((hotel, ind) => {
  return {
    key: `${ind}`,
    label: <Link to={`/${hotel.city.toLocaleLowerCase()}/${hotel.name.toLocaleLowerCase()}/about-hotel`}>{`${hotel.name} (${hotel.city})`}</Link>
  }
})

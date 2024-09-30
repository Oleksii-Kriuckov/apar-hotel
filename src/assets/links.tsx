import { MyHookLink } from "../components/UI/Links/MyHookLink";
import {
  Hotel_ROUTE,
  Booking_ROUTE,
  MainPage_ROUTE,
  Feedback_ROUTE,
} from "../routers/paths";
import { hotels } from "./Info";
import { Link } from "react-router-dom";

export const links = [
  { link: "Готелі", to: MainPage_ROUTE },
  { link: "Про готелі", to: Booking_ROUTE },
  { link: "Бронювання", to: '/kyiv/'},
  { link: "Зворотній зв'язок", to: Feedback_ROUTE },
];

export const telLinks = hotels.map((hotel, ind) => {
  return {
    key: hotel.name,
    label: <a href={`tel:${hotel.tel}`}>
      {`${hotel.tel} ${hotel.name}`}
    </a>
  }
})

export const reservationItems = hotels.map((hotel, ind) => {
  return {
    key: `${ind}`,
    label: <MyHookLink to={`/${hotel.city.toLocaleLowerCase()}/${hotel.name.toLocaleLowerCase()}/`}>
      {`${hotel.name} (${hotel.city_ua})`}
    </MyHookLink>,
  }
})
 
export const aboutHotelItems = hotels.map((hotel, ind) => {
  return {
    key: `${ind}`,
    label: <Link to={`/${hotel.city.toLocaleLowerCase()}/${hotel.name.toLocaleLowerCase()}/about-hotel`}>
      {`${hotel.name} (${hotel.city_ua})`}
    </Link>
  }
})


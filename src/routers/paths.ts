import { allHotels, hotels } from "../assets/Info";

export const MainPage_ROUTE = `/${allHotels[0].city.toLocaleLowerCase()}`;
export const Hotel_ROUTE = `/${allHotels[0].city.toLocaleLowerCase()}/:hotel`;
export const Booking_ROUTE = `/${allHotels[0].city.toLocaleLowerCase()}/:hotel`;
export const Booking_ROUTES = hotels.map(
  (hotel) => `/${hotel.city.toLocaleLowerCase()}/${hotel.name.toLocaleLowerCase()}`
);
export const Feedback_ROUTE = '/feedback';
// export const _ROUTE = '/';

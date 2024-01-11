import { allHotels } from "../assets/Info";

export const MainPage_ROUTE = `/${allHotels[0].city.toLocaleLowerCase()}`;
export const Hotel_ROUTE = `/${allHotels[0].city.toLocaleLowerCase()}/:hotel`;
export const Booking_ROUTE = `/${allHotels[0].city.toLocaleLowerCase()}/:hotel/`;
export const Feedback_ROUTE = '/feedback';
// export const _ROUTE = '/';

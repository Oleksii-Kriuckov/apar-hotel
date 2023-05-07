import { hotels } from "../assets/Info";

export const MainPage_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}`;
export const Hotel_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}/:hotel`;
export const Booking_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}/:hotel/contacts`;
export const Feedback_ROUTE = '/feedback';
// export const _ROUTE = '/';

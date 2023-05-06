import { hotels } from "../assets/Info";

export const MainPage_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}`;
export const Booking_ROUTE = '/:city/booking';
export const Contacts_ROUTE = 'contacts';
export const Message_ROUTE = 'message';
// export const _ROUTE = '/';

import { hotels } from "../assets/Info";

export const MainPage_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}`;
export const Booking_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}/booking`;
export const Contacts_ROUTE = `/${hotels[0].city.toLocaleLowerCase()}/booking/contacts`;
export const Feedback_ROUTE = '/feedback';
// export const _ROUTE = '/';

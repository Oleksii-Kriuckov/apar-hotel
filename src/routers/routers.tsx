import {
  Booking_ROUTE,
  Contacts_ROUTE,
  MainPage_ROUTE,
  Message_ROUTE,
} from "./paths";
import MainPage from "../pages/MainPage";
import Booking from "../pages/Booking";
import Contacts from "../pages/Contacts";
import Message from "../pages/Message";

export const AppRoutes = [
  { path: MainPage_ROUTE, element: <MainPage /> },
  { path: Booking_ROUTE, element: <Booking /> },
  { path: Contacts_ROUTE, element: <Contacts /> },
  { path: Message_ROUTE, element: <Message /> },
  // { path: , element: </> },
];

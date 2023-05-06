import {
  Booking_ROUTE,
  Contacts_ROUTE,
  Feedback_ROUTE,
} from "./paths";
import MainPage from "../pages/MainPage";
import Booking from "../pages/Booking";
import Contacts from "../pages/Contacts";
import Feedback from "../pages/Feedback";

export const AppRoutes = [
  // { path: MainPage_ROUTE, element: <MainPage /> },
  { path: `/:city`, element: <MainPage /> },
  { path: '/:city/booking', element: <Booking /> },
  { path: '/:city/booking/contacts', element: <Contacts /> },
  { path: Feedback_ROUTE, element: <Feedback /> },
];

export const CitiesRouters = [
  // { path: , element: </> },
  // { path: , element: </> },
]

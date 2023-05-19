import {
  Feedback_ROUTE,
} from "./paths";
import MainPage from "../pages/MainPage";
import Hotel from "../pages/Hotel";
import Booking from "../pages/Booking";
import Feedback from "../pages/Feedback";

export const AppRoutes = [
  // { path: MainPage_ROUTE, element: <MainPage /> },
  { path: `/:city`, element: <MainPage /> },
  { path: '/:city/:hotel', element: <Hotel /> },
  { path: '/:city/:hotel/:number/booking', element: <Booking /> },
  { path: Feedback_ROUTE, element: <Feedback /> },
];

export const CitiesRouters = [
  // { path: , element: </> },
  // { path: , element: </> },
]

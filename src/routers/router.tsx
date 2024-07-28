import { Feedback_ROUTE } from "./paths";
import MainPage from "../pages/MainPage";
import { Hotel, findRoomsAction } from "../pages/Hotel";
import Booking from "../pages/Booking";
import Feedback from "../pages/Feedback";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/Layout";
import AboutHotel from "../pages/AboutHotel";
import AboutRoom from "../pages/AboutRoom";

const AppRoutes = [
  // { path: MainPage_ROUTE, element: <MainPage /> },
  { path: `/:city`, element: <MainPage /> },
  { path: "/:city/:hotel", element: <Hotel /> },
  { path: "/:city/:hotel/:number/booking", element: <Booking /> },
  { path: Feedback_ROUTE, element: <Feedback /> },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/kyiv" />} />
      <Route path="/:city" element={<MainPage />} />
      <Route
        path="/:city/:hotel"
        element={<Hotel />}
        // action={findRoomsAction}
      />
      <Route path="/:city/:hotel/about-hotel" element={<AboutHotel/>}/>
      <Route path="/:city/:hotel/:number/booking" element={<Booking />} />
      <Route path="/:city/:hotel/:number/about-room" element={<AboutRoom/>} />
      <Route path={Feedback_ROUTE} element={<Feedback />} />
    </Route>
  )
);
export default router;

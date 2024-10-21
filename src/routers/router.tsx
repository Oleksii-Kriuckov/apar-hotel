import { Feedback_ROUTE, MainPage_ROUTE } from "./paths";
import MainPage from "../pages/MainPage";
import { Hotel } from "../pages/Hotel";
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
  { path: `/:city`, element: <MainPage /> },
  { path: "/:city/:hotel", element: <Hotel /> },
  { path: "/:city/:hotel/about-hotel", element: <AboutHotel /> },
  { path: "/:city/:hotel/:number/about-room", element: <AboutRoom /> },
  { path: "/:city/:hotel/:number/booking", element: <Booking /> },
  { path: Feedback_ROUTE, element: <Feedback /> },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={MainPage_ROUTE} />} />
      {AppRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
    </Route>
  )
);
export default router;

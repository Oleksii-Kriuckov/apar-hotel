import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

import "./styles/App.css";
import "./styles/desktop-style.css";
import "./styles/tablet-style.css";
import "./styles/mobile-style.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

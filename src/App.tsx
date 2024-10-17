import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import router from "./routers/router";
import "./styles/App.css";
import "./styles/desktop-style.css";
import "./styles/tablet-style.css";
import "./styles/mobile-style.css";

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import { AppRoutes } from "./routers/routers";

import "./styles/App.css";
import "./styles/desktop-style.css";
import "./styles/tablet-style.css";
import "./styles/mobile-style.css";

function App() {
  const [count, setCount] = useState(0);

  {
    /* <div className="App">
    <Header/>
  <h1>Hi</h1>
  </div> */
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {AppRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

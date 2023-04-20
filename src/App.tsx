import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import { AppRoutes } from "./routers/routers";

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

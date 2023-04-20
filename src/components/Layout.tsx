import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

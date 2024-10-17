import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { useEffect } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]);
  return null; // This component doesn't render anything visible
}

const Layout = () => {
  return (
    <div>
      <ScrollToTop />

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

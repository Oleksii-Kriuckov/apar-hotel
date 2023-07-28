import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { PropsWithChildren } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

// type Props = PropsWithChildren<{
//   children: (string | ReactJSXElement)[];
// }>; {children}: Props

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

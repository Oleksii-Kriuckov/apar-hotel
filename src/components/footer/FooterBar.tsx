import { NavLink } from "react-router-dom";
import { footerLinks } from "./footerLinks";
import "./style/style.css";
import './style/adaptive.css'

type Props = {};

export const FooterBar = (props: Props) => {
  return (
    <div className="footer_nav">
      {footerLinks.map((el, ind) => (
        <NavLink key={ind} to={el.to}>{el.link}</NavLink>
      ))}
      <a href="">Документы</a>
    </div>
  );
};

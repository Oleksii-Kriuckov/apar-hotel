import { NavLink } from "react-router-dom";
import { links } from "../../assets/links";
import "./style/style.css";
import './style/adaptive.css'

type Props = {};

export const FooterBar = (props: Props) => {
  return (
    <div className="footer_nav">
      {links.map((el, ind) => (
        <NavLink key={ind} to={el.to}>{el.link}</NavLink>
      ))}
      <a href="">Documents</a>
    </div>
  );
};

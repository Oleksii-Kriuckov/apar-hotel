import { NavLink } from "react-router-dom";
import { links } from "../../assets/links";
import "./style.css";
import LicenseLink from "../UI/Links/LicenseLink";

type Props = {};

export const FooterBar = (props: Props) => {
  return (
    <div className="footer_nav">
      {links.map((el, ind) => (
        <NavLink key={ind} to={el.to}>{el.link}</NavLink>
      ))}
      <LicenseLink/>
    </div>
  );
};

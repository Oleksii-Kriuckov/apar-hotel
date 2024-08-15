import { NavLink } from "react-router-dom";
import { aboutHotelItems, links, reservationItems } from "../../assets/links";
import "./style.css";
import LicenseLink from "../UI/Links/LicenseLink";
import { MyDropDown } from "../UI/DropDown/DropDown";

type Props = {};

export const FooterBar = (props: Props) => {
  return (
    <div className="footer_nav">
      <NavLink to={links[0].to}>{links[0].link}</NavLink>
      <MyDropDown items={aboutHotelItems} styles={{fontSize: 18}}>{links[1].link}</MyDropDown>
      <MyDropDown items={reservationItems} styles={{fontSize: 18}}>{links[2].link}</MyDropDown>
      <NavLink to={links.at(-1)!.to}>{links.at(-1)!.link}</NavLink>
      <LicenseLink/>
    </div>
  );
};

import { PropsWithChildren } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Link } from "react-router-dom";
import { Hotel_ROUTE } from "../../../routers/paths";
import './style.css'

type Props = PropsWithChildren<{ 
  children: string | ReactJSXElement; 
  src: any; 
  alt: string 
  isDropDown: boolean; 
}>;

export const LinkWithIcon = (props: Props) => {
  return (
    <div>
      {props.isDropDown ? 
      <Link
        className="d-flex align-items-md-baseline"
        to={Hotel_ROUTE}
        style={{ textTransform: "uppercase" }}
        onClick={(e) => e.preventDefault()}
      >
        {props.src && <img src={props.src} alt={props.alt} className="linkImg me-1" />}
        {props.children}
      </Link>
      :
      <a href={`tel:${props.children}`} className="icon_link d-flex align-items-md-baseline">
        {props.src && <img src={props.src} alt={props.alt} className="linkImg me-1" />}
        {props.children}
      </a> } 
    </div>
  );
};

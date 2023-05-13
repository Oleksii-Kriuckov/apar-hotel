import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Hotel_ROUTE } from "../../../routers/paths";

type Props = PropsWithChildren<{ children: string; src: any; alt: string }>;

export const HeaderLink = (props: Props) => {
  return (
    <div className="d-flex">
      <img src={props.src} alt={props.alt} className="linkImg me-1" />
      <Link to={Hotel_ROUTE} style={{ textTransform: "uppercase" }}>
        {props.children}
      </Link>
      
    </div>
  );
};

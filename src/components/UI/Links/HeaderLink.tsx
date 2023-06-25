import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Hotel_ROUTE } from "../../../routers/paths";

type Props = PropsWithChildren<{ children: string; src: any; alt: string }>;

export const HeaderLink = (props: Props) => {
  return (
    <div>
      <Link className="d-flex align-items-md-baseline" to={Hotel_ROUTE} style={{ textTransform: "uppercase" }}>
      <img src={props.src} alt={props.alt} className="linkImg me-1" />
        {props.children}
      </Link>
    </div>
  );
};

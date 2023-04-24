import { PropsWithChildren } from "react";
import "./style.css";
import { Color } from "../../../assets/types";

type Props = PropsWithChildren<{
  children: string;
  color: Color;
  width: string | number;
}>;

const YellowButton = ({ children, color, width }: Props) => {
  return (
    <button className={`yellow_button ${color}`} style={{ width: width }}>
      {children}
    </button>
  );
};

export default YellowButton;

import { PropsWithChildren } from "react";
import { Color } from "../../../assets/types";
import "./style.css";

type Props = PropsWithChildren<{
  children: string;
  color: Color;
  // width: string | number;
  onClick: () => void;
}>;

const YellowButton = ({ children, color, onClick }: Props) => {
  return (
    <button
      className={`yellow_button ${color}`}
      // style={{ width: width }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default YellowButton;

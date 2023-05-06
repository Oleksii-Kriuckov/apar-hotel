import { PropsWithChildren } from "react";
import "./style.css";
import { Color } from "../../../assets/types";

type Props = PropsWithChildren<{
  children: string;
  color: Color;
  width: string | number;
  onClick: () => void;
}>;

const YellowButton = ({ children, color, width, onClick }: Props) => {
  return (
    <button
      className={`yellow_button ${color}`}
      style={{ width: width }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default YellowButton;

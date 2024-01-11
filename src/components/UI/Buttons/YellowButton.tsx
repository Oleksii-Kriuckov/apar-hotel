import { PropsWithChildren } from "react";
import { Color } from "../../../assets/types";
import "./style.css";

type Props = PropsWithChildren<{
  children: string;
  id: string;
  color: Color;
  // width: string | number;
  onClick: () => void;
}>;

const YellowButton = ({ children, id, color, onClick }: Props) => {
  return (
    <button
      id={id}
      className={`yellow_button ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default YellowButton;

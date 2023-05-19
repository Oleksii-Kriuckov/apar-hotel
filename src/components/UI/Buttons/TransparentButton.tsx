import { PropsWithChildren } from "react";
import { BorderColor } from "../../../assets/types";
import "./style.css";

type Props = PropsWithChildren<{
  children: string;
  color: BorderColor;
  onClick: () => void;
}>;

const TransparentButton = ({ children, color, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`transparent_button ${color}`}>
      {children}
    </button>
  );
};

export default TransparentButton;

import { PropsWithChildren } from "react";
import { BorderColor } from "../../../assets/types";
import "./style.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type Props = PropsWithChildren<{
  children: string | ReactJSXElement;
  color: BorderColor;
  onClick: () => void;
}>;

const TransparentButton = ({ children, color, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`transparent_button ${color}`}
      style={{ width: "100%" }}
    >
      {children}
    </button>
  );
};

export default TransparentButton;

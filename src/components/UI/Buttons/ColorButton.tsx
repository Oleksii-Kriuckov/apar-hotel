import { PropsWithChildren } from "react";
import "./style.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type Props = PropsWithChildren<{
  children: string | ReactJSXElement;
  bgColor: string;
  onClick: () => void;
}>;

const ColorButton = ({ children, bgColor, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='blackBorder'
      style={{ width: "100%", backgroundColor: `${bgColor}` }}
    > 
      {children}
    </button>
  );
};

export default ColorButton;

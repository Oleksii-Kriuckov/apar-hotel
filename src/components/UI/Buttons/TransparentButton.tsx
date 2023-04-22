import { PropsWithChildren } from "react";
import "./style.css";
import { BorderColor } from "../../../assets/types";

type Props = PropsWithChildren<{ children: string, color: BorderColor }>;

const TransparentButton = ({children, color}: Props) => {
  return <button className={`transparent_button ${color}`}>{children}</button>;
};

export default TransparentButton;

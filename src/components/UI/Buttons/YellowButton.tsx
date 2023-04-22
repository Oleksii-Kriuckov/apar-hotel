import { PropsWithChildren } from "react";
import "./style.css";
import { Color } from "../../../assets/types";

type Props = PropsWithChildren<{ children: string; color: Color }>;

const YellowButton = ({ children, color }: Props) => {
  return <button className={`yellow_button ${color}`}>{children}</button>;
};

export default YellowButton;

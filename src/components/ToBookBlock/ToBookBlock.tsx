import React, { PropsWithChildren, useEffect } from "react";
import YellowButton from "../UI/Buttons/YellowButton";
import keyhole_color from "../images/Group 1317.png";
import keyhole from "../images/Group 1318.png";
import "./style/style.css";
import "./style/adaptive.css";

type ToBookBlockProps = PropsWithChildren<{ children: string }>;

const ToBookBlock = ({ children }: ToBookBlockProps) => {
  return (
    <div className="to_book_block">
      <img src={keyhole_color} alt="keyhole_color" className="keyhole_color" />
      <img src={keyhole} alt="keyhole" className="keyhole" />

      <h1 className="h1">
        Your Luxury hotel in <span className="highlight">{children}</span>
      </h1>

      <YellowButton width={"100%"} color="black">
        Book now
      </YellowButton>
    </div>
  );
};

export default ToBookBlock;

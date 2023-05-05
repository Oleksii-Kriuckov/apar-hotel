import React, { PropsWithChildren, useEffect } from "react";
import "./style/style.css";
import "./style/adaptive.css";
import YellowButton from "../UI/Buttons/YellowButton";

type ToBookBlockProps = PropsWithChildren<{ children: string }>;

const ToBookBlock = ({children}: ToBookBlockProps) => {
  return (
    <div className="ToBookBlock">
        <h1 className="h1">
          Your Luxury hotel in <span className="highlight">{children}</span>
        </h1>
      
      <YellowButton width={'100%'} color='black'>Book now</YellowButton>
    </div>
  );
};

export default ToBookBlock;

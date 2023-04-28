import React, { PropsWithChildren } from "react";
import "./style/style.css";
import "./style/adaptive.css";
import YellowButton from "../UI/Buttons/YellowButton";

type ToBookBlockProps = PropsWithChildren<{ children: string }>;

const ToBookBlock = (props: ToBookBlockProps) => {
  return (
    <div>
      <div className="h1">
        <h1>
          Your Luxury hotel in <span className="highlight">{props.children}</span>
        </h1>
      </div>
      <YellowButton width={'100%'} color='black'>Book now</YellowButton>
    </div>
  );
};

export default ToBookBlock;

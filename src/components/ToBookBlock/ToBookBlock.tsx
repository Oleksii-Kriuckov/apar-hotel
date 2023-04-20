import React, { PropsWithChildren } from "react";
import "./style/style.css";
import './style/adaptive.css'

type ToBookBlockProps = PropsWithChildren<{children: string}>;

const ToBookBlock = (props: ToBookBlockProps) => {
  return (
    <div>
      <div className="h1">
        <h1>
          Your apart hotel in <span className="highlight">{props.children}</span>
        </h1>
      </div>
      <button className="booking">BOOK NOW</button>
    </div>
  );
};

export default ToBookBlock;

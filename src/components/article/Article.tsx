import { PropsWithChildren } from "react";
import "./style/style.css";
import "./style/adaptive.css";

type ArticleProps = PropsWithChildren<{ children: string }>;

export const Article = ({ children }: ArticleProps) => {
  return (
    <article className="about_hotel">
      <h3 className="header_h3" id="about_hotel">About hotel</h3>
      <span>{children}</span>
    </article>
  );
};

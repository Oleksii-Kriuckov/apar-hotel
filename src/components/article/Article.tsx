import { PropsWithChildren } from "react";
import "./style/style.css";
import './style/adaptive.css'

type ArticleProps = PropsWithChildren<{children: string}>;

export const Article = ({children}: ArticleProps) => {
  return (
    <div className="about_hotel">
      <article>
        <h3 className="header_h3">About hotel</h3>
        <span>{children}</span>
      </article>
    </div>
  )
}
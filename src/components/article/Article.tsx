import { PropsWithChildren } from "react";
import "./style/style.css";
import './style/adaptive.css'

type ArticleProps = PropsWithChildren<{children: string}>;

export const Article = (props: ArticleProps) => {
  return (
    <div className="about_hotel">
      <article>
        <h3 className="header_h3">Об отеле</h3>
        <span>{props.children}</span>
        
      </article>
    </div>
  )
}
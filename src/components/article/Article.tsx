import { PropsWithChildren } from "react";
import "./style.css";

type ArticleProps = PropsWithChildren<{ children: string, images: string[], hotelName: string }>;

export const Article = ({ children, images, hotelName }: ArticleProps) => {

  return (
    <article className="about_hotel d-flex ">
      <div className="describe_images">
        {images.map((v, i) => {
          return <img key={v} src={v} alt={`Room ${i}`} className="describe_img"/>
        })}
      </div>
      
      <div>
        <h3 className="header_h3" id="about_hotel">About <span className="highlight">{hotelName}</span> hotel</h3>
        <span style={{whiteSpace: "pre-line"}}>{children}</span>
      </div>
    </article>
  );
};

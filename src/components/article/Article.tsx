import { PropsWithChildren, ReactNode, useEffect } from "react";
import { MyCarousel } from "../Slider/MyCarousel";
import "./style.css";

type ArticleProps = PropsWithChildren<{ children: ReactNode, images: string[], hotelName: string, description?: string }>;

export const Article = ({ children, images, hotelName, description }: ArticleProps) => {
useEffect(()=> {
  console.log(images);
})

  return (
    <article className="d-lg-flex d-grid d-sm-grid">
      <div className="describe_images d-none d-sm-none d-lg-block">
        {Array.isArray(images) && images.map((v, i) => {
          if (i < 3) {
            return <img key={v} src={v} alt={`Room ${i}`} className="describe_img" />
          }
        })}
      </div>

      <div className="article_carousel d-lg-none">
        {Array.isArray(images) && <MyCarousel images={images} />}
      </div>

      <div>
        <h3 className="header_h3" id="about_hotel">{children}</h3>
        <span style={{ whiteSpace: "pre-line" }}>{description}</span>
      </div>
    </article>
  );
};

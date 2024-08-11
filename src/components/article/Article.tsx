import { PropsWithChildren, ReactNode, useEffect } from "react";
import { MyCarousel } from "../Slider/MyCarousel";
import { BootCar } from "../Slider/BootCar";
import "./style.css";

type ArticleProps = PropsWithChildren<{ children: ReactNode, images: string[], isHotelPage: boolean, description: string }>;

export const Article = ({ children, images, isHotelPage, description }: ArticleProps) => {
  useEffect(() => {
    console.log(images);
  })
// from 992 to 1200 carousel
  return (
    <article className="d-flex flex-column d-lg-block d-xxl-flex flex-xxl-row align-items-center align-items-xxl-start">
      {isHotelPage ?
        <> 
          <div className="describe_images d-none d-sm-none d-lg-inline-block">
            {Array.isArray(images) && images.map((v, i) => {
              if (i < 3) {
                return <img key={v} src={v} alt={`Room ${i}`} className="describe_img" />
              }
            })}
          </div>

          <div className="d-lg-none">
            {Array.isArray(images) && <BootCar images={images} />}
          </div>
        </>
        : <div className="article_carousel">
          {Array.isArray(images) && <BootCar images={images} />}
        </div>
        // <div className="article_carousel"></div>
      }

      <div className="article_header">
        <h3 className="header_h3" id="about_hotel">{children}</h3>
        <span style={{ whiteSpace: "pre-line" }}>{description}</span>
      </div>
    </article>
  );
};

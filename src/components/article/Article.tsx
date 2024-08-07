import { PropsWithChildren, ReactNode, useEffect } from "react";
import { MyCarousel } from "../Slider/MyCarousel";
import { BootCar } from "../Slider/BootCar";
import "./style.css";

type ArticleProps = PropsWithChildren<{ children: ReactNode, images: string[], isHotelPage: boolean, description: string }>;

export const Article = ({ children, images, isHotelPage, description }: ArticleProps) => {
  useEffect(() => {
    console.log(images);
  })

  return (
    <article className="d-flex flex-column flex-lg-row align-items-center">
      {isHotelPage ?
        <>
          <div className="describe_images d-none d-sm-none d-lg-block">
            {Array.isArray(images) && images.map((v, i) => {
              if (i < 3) {
                return <img key={v} src={v} alt={`Room ${i}`} className="describe_img" />
              }
            })}
          </div>

          <div className="article_carousel d-lg-none">
            {Array.isArray(images) && <BootCar images={images} />}
          </div>
        </>
        : <>
          {Array.isArray(images) && <BootCar images={images} />}
        </>
        // <div className="article_carousel"></div>
      }

      <div>
        <h3 className="header_h3" id="about_hotel">{children}</h3>
        <span style={{ whiteSpace: "pre-line" }}>{description}</span>
      </div>
    </article>
  );
};

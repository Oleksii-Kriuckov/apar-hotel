import { PropsWithChildren, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd'
import { BootCarousel } from "../Slider/BootCar";
import { LeftOutlined } from "@ant-design/icons";
import "./style.css";
import '../Slider/style.css'

type ArticleProps = PropsWithChildren<{
  children: ReactNode, images: string[], isHotelPage: boolean, description: string
}>;

export const Article = ({ children, images, isHotelPage, description }: ArticleProps) => {
  let navigate = useNavigate();

  return (
    <>
      {isHotelPage ?
        <article className="d-flex flex-column d-xl-block d-xxl-flex flex-xxl-row align-items-center align-items-xxl-start">
          <div className="describe_images d-none d-sm-none d-xl-inline-block">
            {Array.isArray(images) && images.map((v, i) => {
              if (i < 3) {
                return <img key={v} src={v} alt={`Room ${i}`} className="describe_img" />
              }
            })}
          </div>

          <div className="d-xl-none">
            <div className="article_carousel">
              {Array.isArray(images) && <BootCarousel images={images} />}
            </div>
          </div>

          <div className="article_header">
            <h3 className="header_h3" id="about_hotel">{children}</h3>
            <span style={{ whiteSpace: "pre-line" }}>{description}</span>
          </div>
        </article>
        :
        <article className="d-flex flex-column flex-xl-row align-items-center align-items-xl-start">
          <div className="article_carousel">
            {Array.isArray(images) && <BootCarousel images={images} />}
          </div>

          <div className="article_header">
            <h3 className="header_h3" id="about_hotel">{children}</h3>
            <span style={{ whiteSpace: "pre-line" }}>{description}</span>
            <Button
              className="booking_btn back_btn d-flex align-items-center mx-auto"
              type="primary"
              size="large"
              onClick={() => navigate(-1)}
            >
              <LeftOutlined />
              Назад до списку кімнат
            </Button>
          </div>
        </article>
      }
    </>
  );
};

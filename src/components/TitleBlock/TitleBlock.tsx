import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { MyCarousel } from "../Slider/MyCarousel";
import keyhole_color from "../images/Group 1317.png";
import keyhole from "../images/Group 1318.png";
import room1 from "../images/rooms/hotel-room-code.jpg";
import room2 from "../images/rooms/pexels-pixabay.jpg";
import room3 from "../images/rooms/bathroom3.jpg";
import "./style.css";

type ToBookBlockProps = PropsWithChildren<{ children: string }>;

const TitleBlock = ({ children }: ToBookBlockProps) => {
  let navigate = useNavigate();
  const images = [room1, room2, room3];

  return (
    <div className="title_block d-flex flex-column flex-lg-row-reverse justify-content-center align-items-center">
      <img src={keyhole_color} alt="keyhole_color" className="keyhole_color" />
      <img src={keyhole} alt="keyhole" className="keyhole" />
      <MyCarousel images={images} />

      <h1 className="h1">
        Your hotels in <span className="highlight">{children}</span>
      </h1>
    
      
    </div>
  );
};

export default TitleBlock;

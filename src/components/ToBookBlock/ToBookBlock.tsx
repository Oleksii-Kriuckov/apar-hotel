import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { MyCarousel } from "../Slider/MyCarousel";
import YellowButton from "../UI/Buttons/YellowButton";
import keyhole_color from "../images/Group 1317.png";
import keyhole from "../images/Group 1318.png";
import room1 from "../images/rooms/pexels-engin-akyurt-1579253.jpg";
import room2 from "../images/rooms/pexels-hakim-santoso-3634741.jpg";
import room3 from "../images/rooms/pexels-pixabay-237371.jpg";
import "./style/style.css";
import "./style/adaptive.css";

type ToBookBlockProps = PropsWithChildren<{ children: string }>;

const ToBookBlock = ({ children }: ToBookBlockProps) => {
  let navigate = useNavigate();
  const images = [room1, room2, room3]

  return (
    <div className="to_book_block">
      <img src={keyhole_color} alt="keyhole_color" className="keyhole_color" />
      <img src={keyhole} alt="keyhole" className="keyhole" />
      <MyCarousel images={images}/>

      <div className="book_block">
        <h1 className="h1">
          Your Luxury hotel in <span className="highlight">{children}</span>
        </h1>

        <div className="book_block_btn">
          <YellowButton
            onClick={() => navigate(`/${children}/booking`)}
            // width={"100%"}
            color="black"
          >
            Book now
          </YellowButton>
        </div>
      </div>
    </div>
  );
};

export default ToBookBlock;

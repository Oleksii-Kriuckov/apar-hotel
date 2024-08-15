import { PropsWithChildren } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useNavigate } from "react-router-dom";
import keyhole_color from "../images/Group 1317.png";
import keyhole from "../images/Group 1318.png";
import room1 from "../../../public/rooms/TiSO/room41/room41-v1.png";
import room2 from "../../../public/rooms/Arena-Summit/room22/room22-view2.png";
import room3 from "../../../public/rooms/Code10/room21/room21-view1.jpg";
import "./style.css";
import { BootCar } from "../Slider/BootCar";

type TitleBlockProps = PropsWithChildren<{ children: string | ReactJSXElement }>;
// children: any
const TitleBlock = ({ children }: TitleBlockProps) => {
  let navigate = useNavigate();
  const images = [room1, room2, room3];

  return (
    <div className="title_block d-flex flex-column flex-lg-row-reverse justify-content-center align-items-center">
      <img src={keyhole_color} alt="keyhole_color" className="keyhole_color" />
      <img src={keyhole} alt="keyhole" className="keyhole" />

      {/* <div className="title_carousel"></div> */}
      <BootCar images={images} />

      <div><h1 className="h1"> {children} </h1></div>
    </div>
  );
};

export default TitleBlock;

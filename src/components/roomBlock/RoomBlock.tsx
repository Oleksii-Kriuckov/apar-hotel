import conveniences from "../images/conveniences.png";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
import { useNavigate, useParams } from "react-router-dom";
import { Booking_ROUTE } from "../../routers/paths";
import { IRoom } from "../../assets/types";
import "./styles/style.css";
import "./styles/adaptive.css";

type RoomBlockProps = {
  roomInfo: IRoom;
  address: string;
};

const RoomBlock = ({roomInfo, address}: RoomBlockProps) => {
  let navigate = useNavigate();
  const { city, hotel } = useParams();

  return (
    <div className="room_block d-flex flex-column">
      <img src={roomInfo.image} alt="room" />
      <div className="price_block">
        Price: <span>{roomInfo.price}</span> hrn
      </div>
      <ul>
        <li>{address}</li>
        <li>Persons: {roomInfo.persons}</li>
        <li>Floor: {roomInfo.floor}</li>
        {/* <li>Комнат: 1</li> */}
      </ul>
      <img src={conveniences} alt="conveniences" className="conveniences"/>
      <TransparentButton
        onClick={() => navigate('')}
        color="yellowBorder"
      >
        LEARN MORE
      </TransparentButton>
      <YellowButton
        onClick={() => navigate(`/${city}/${hotel}/booking`)}
        width={"100%"}
        color="white"
      >
        BOOK NOW
      </YellowButton>
    </div>
  );
};

export default RoomBlock;

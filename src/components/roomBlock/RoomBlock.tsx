import roomImg from "../images/Shannon-Suite-hotel-room.jpg";
import conveniences from "../images/conveniences.png";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { Contacts_ROUTE } from "../../routers/paths";

type Props = {};

const RoomBlock = (props: Props) => {
  let navigate = useNavigate();
  return (
    <div className="room_block d-flex flex-column">
      <img src={roomImg} alt="room" />
      <div className="price_block">
        <span>1700</span> ₽ в сутки
      </div>
      <ul>
        <li>г. Волгоград, ул. Мира 21</li>
        <li>Спальных мест: 1+1</li>
        <li>Этаж: 1</li>
        <li>Комнат: 1</li>
      </ul>
      <img src={conveniences} alt="удобства" />
      <TransparentButton
        onClick={() => navigate(Contacts_ROUTE)}
        color="yellowBorder"
      >
        ПОДРОБНЕЕ
      </TransparentButton>
      <YellowButton
        onClick={() => navigate(Contacts_ROUTE)}
        width={"100%"}
        color="white"
      >
        ЗАБРОНИРОВАТЬ
      </YellowButton>
    </div>
  );
};

export default RoomBlock;

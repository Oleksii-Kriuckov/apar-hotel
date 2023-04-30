import roomImg from "../images/Shannon-Suite-hotel-room.jpg";
import conveniences from "../images/conveniences.png"
import "./style.css";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";

type Props = {};

const RoomBlock = (props: Props) => {
  return (
    <div className="room_block d-flex flex-column">
      <img src={roomImg} alt="room" />
      <div className="price_block"><span>1700</span> ₽ в сутки</div>
      <ul>
        <li>г. Волгоград, ул. Мира 21</li>
        <li>Спальных мест: 1+1</li>
        <li>Этаж: 1</li>
        <li>Комнат: 1</li>
      </ul>
      <img src={conveniences} alt="удобства" />
      <TransparentButton color='yellowBorder'>ПОДРОБНЕЕ</TransparentButton>
      <YellowButton width={'100%'} color='white'>ЗАБРОНИРОВАТЬ</YellowButton>
    </div>
  );
};

export default RoomBlock;

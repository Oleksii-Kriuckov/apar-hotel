import conveniences from "../images/conveniences.png";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { IRoom } from "../../assets/types";
import { useAppNav } from "../../hooks/useAppNav";
import "./style.css";

type RoomBlockProps = {
  roomInfo: IRoom;
};

const RoomBlock = ({ roomInfo }: RoomBlockProps) => {
  const { city, hotel } = useParams();
  const {navigateBooking, navigateAboutRoom} = useAppNav(roomInfo, city!)

  return (
    <div className="room_block">
      <div className="room_block_main d-flex flex-column flex-lg-row justify-content-lg-between">
        <img className="room_photo" src={roomInfo.images[0]} alt="room" />

        <div className="room_description d-flex flex-column flex-sm-row-reverse justify-content-sm-between mt-sm-4 mt-lg-0 flex-lg-column flex-xl-row-reverse">
          <div className="price_block d-flex flex-row flex-sm-column align-items-baseline mt-lg-0">
            <span className="price">Ціна: </span>
            <div>
              <span>{roomInfo.price}</span> грн
            </div>
          </div>

          <div className="room_info">
            <ul>
              <li>Номер: {roomInfo.number}</li>
              <li>Поверх: {roomInfo.floor}</li>
              <li>Кількість осіб: {roomInfo.persons}</li>
            </ul>
            <img
              src={conveniences}
              alt="conveniences"
              className="conveniences"
            />
          </div>
        </div>
      </div>

      <div className="room_block_buttons d-flex mt-lg-4">
        <Button
          className="room_block_btn ghost_button"
          onClick={navigateAboutRoom}
          size="large"
        >
          Детальніше
        </Button>

        <Button
          type="primary"
          id={`book_now_${roomInfo.id}`}
          className="booking_btn room_block_btn"
          onClick={navigateBooking}
          size="large"
        >
          Забронювати
        </Button>
      </div>
    </div>
  );
};

export default RoomBlock;
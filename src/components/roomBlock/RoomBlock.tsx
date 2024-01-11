import conveniences from "../images/conveniences.png";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
import { useNavigate, useParams } from "react-router-dom";
import { IRoom } from "../../assets/types";
import "./styles/style.css";
import "./styles/adaptive.css";

type RoomBlockProps = {
  roomInfo: IRoom;
  address: string;
};

const RoomBlock = ({ roomInfo, address }: RoomBlockProps) => {
  let navigate = useNavigate();
  const { city, hotel } = useParams();

  return (
    <div className="room_block">
      <div className="room_block_main d-flex flex-column flex-lg-row justify-content-lg-between">
        <img src={roomInfo.image} alt="room" />

        <div className="room_description d-flex flex-column flex-sm-row-reverse justify-content-sm-between mt-sm-4 mt-lg-0 flex-lg-column flex-xl-row-reverse">
          <div className="price_block d-flex flex-row flex-sm-column align-items-baseline mt-lg-0">
            <span className="price">Price: </span>
            <div>
              <span>{ roomInfo.price}</span> hrn
            </div>
          </div>

          <div className="room_info">
            <ul>
              <li>{address}</li>
              <li>Number: {roomInfo.number}</li>
              <li>Floor: {roomInfo.floor}</li>
              <li>Persons: {roomInfo.persons}</li>
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
        <div className="room_block_btn">
          <TransparentButton onClick={() => navigate("")} color="yellowBorder">
            LEARN MORE
          </TransparentButton>
        </div>
        <div className="room_block_btn">
          <YellowButton
            onClick={() =>
              navigate(`/${city}/${hotel}/${roomInfo.number}/booking`)
            }
            color="white"
          >
            BOOK NOW
          </YellowButton>
        </div>
      </div>
    </div>
  );
};

export default RoomBlock;

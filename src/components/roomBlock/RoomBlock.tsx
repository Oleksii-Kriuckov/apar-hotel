import conveniences from "../images/conveniences.png";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
import { useNavigate, useParams } from "react-router-dom";
import { IRoom } from "../../assets/types";
import {addDoc, collection} from "firebase/firestore";
import "./styles/style.css";
import "./styles/adaptive.css";
import { db } from "../../firebase/firebase";
import {HotelNames} from '../../assets/types'

type RoomBlockProps = {
  roomInfo: IRoom;
  address: string;
};

const RoomBlock = ({ roomInfo, address }: RoomBlockProps) => {
  let navigate = useNavigate();
  const { city, hotel } = useParams();

  const addRoom = async () => { 
    if (hotel) {
      const newRoom: IRoom = {
      hotel: hotel as HotelNames,
      floor: roomInfo.floor,
      image: roomInfo.image,
      number: roomInfo.number,
      persons: roomInfo.persons,
      price: roomInfo.price,
      occupied: []
    }
    await addDoc(collection(db, "rooms"), newRoom);
    }
    
    // Поки що додавати кімнати в базу за допомогою кнопки LEARN MORE
   }

  return (
    <div className="room_block">
      <div className="room_block_main d-flex flex-column flex-lg-row justify-content-lg-between">
        <img src={roomInfo.image} alt="room" />

        <div className="room_description d-flex flex-column flex-sm-row-reverse justify-content-sm-between mt-sm-4 mt-lg-0 flex-lg-column flex-xl-row-reverse">
          <div className="price_block d-flex flex-row flex-sm-column align-items-baseline mt-lg-0">
            <span className="price">Price: </span>
            <div>
              <span>{roomInfo.price}</span> hrn
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
          <TransparentButton onClick={()=>{}} color="yellowBorder">
            LEARN MORE
          </TransparentButton>
        </div>
        <div className="room_block_btn">
          <YellowButton
            id={`book_now_${roomInfo.id}`}
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

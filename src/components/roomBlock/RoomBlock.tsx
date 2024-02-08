import conveniences from "../images/conveniences.png";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { IRoom } from "../../assets/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { HotelNames } from "../../assets/types";
import "./style.css";
import { useSetRecoilState } from "recoil";
import { showBookingForm$, bookingRoom$ } from "../../recoil/atoms";

type RoomBlockProps = {
  roomInfo: IRoom;
};

const RoomBlock = ({ roomInfo }: RoomBlockProps) => {
  let navigate = useNavigate();
  const { city, hotel } = useParams();
  // const setIdBookingRoom = useSetRecoilState(idBookingRoom$);
  const setShowBookingForm = useSetRecoilState(showBookingForm$);
  const setBookingRoom = useSetRecoilState(bookingRoom$);

  // const addRoom = async () => {
  //   if (hotel) {
  //     const newRoom: IRoom = {
  //       hotel: hotel as HotelNames,
  //       floor: roomInfo.floor,
  //       image: roomInfo.image,
  //       number: roomInfo.number,
  //       persons: roomInfo.persons,
  //       price: roomInfo.price,
  //       occupied: [],
  //     };
  //     await addDoc(collection(db, "rooms"), newRoom);
  //   }
  // };

  const navigateBooking = () => {
    // setIdBookingRoom(roomInfo.id)
    // console.log(roomInfo.occupied[0].checkOut < Date.now());
    const newRoomInfo: {
      occupied: { checkIn: number; checkOut: number }[],
      [key: string]: string | number | { checkIn: number; checkOut: number }[]
    } = {occupied: []};
    for (const key in roomInfo) {
      if (Object.prototype.hasOwnProperty.call(roomInfo, key)) {
        newRoomInfo[key] = roomInfo[key];
      }
    }
    newRoomInfo.occupied = newRoomInfo.occupied.filter((v, i, a) => v.checkOut > Date.now())
    // newRoomInfo.occupied = roomInfo.occupied.filter((v, i, a) => v.checkOut > Date.now())

    setBookingRoom(newRoomInfo);
    setShowBookingForm(true);
    navigate(`/${city}/${hotel}/${roomInfo.number}/booking`);
  };

  return (
    <div className="room_block">
      <div className="room_block_main d-flex flex-column flex-lg-row justify-content-lg-between">
        <img className="room_photo" src={roomInfo.image} alt="room" />

        <div className="room_description d-flex flex-column flex-sm-row-reverse justify-content-sm-between mt-sm-4 mt-lg-0 flex-lg-column flex-xl-row-reverse">
          <div className="price_block d-flex flex-row flex-sm-column align-items-baseline mt-lg-0">
            <span className="price">Price: </span>
            <div>
              <span>{roomInfo.price}</span> hrn
            </div>
          </div>

          <div className="room_info">
            <ul>
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
        <Button
          id="learn_more"
          className=" room_block_btn"
          // onClick={() => navigate(`/`)}
          size="large"
          ghost
        >
          LEARN MORE
        </Button>

        <Button
          href="#form_booking"
          id={`book_now_${roomInfo.id}`}
          className="booking_btn room_block_btn"
          onClick={navigateBooking}
          size="large"
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default RoomBlock;

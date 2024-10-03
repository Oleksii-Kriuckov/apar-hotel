import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import { Article } from "../components/article/Article";
import { findData } from "../functions/functions";
import { useEffect } from "react";
import { bookingRoom$ } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { useQuery } from "../hooks/useQuery";
import { HotelNames } from "../assets/types";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { isObjectRoom } from "../functions/isObject";

const AboutRoom = () => {
  const { city, hotel, number } = useParams();
  const { findCity, findHotel } = findData(city!, hotel);
  const [bookingRoom, setBookingRoom] = useRecoilState(bookingRoom$)
  const { queryRooms } = useQuery()

  useEffect(() => {
    if (isObjectRoom(bookingRoom) && !bookingRoom.images) {
      queryRooms(hotel as HotelNames, 1, Number(number))
    }
  }, []);

  return (
    <div>
      <ModalWindow />

      <Article
        images={isObjectRoom(bookingRoom) ? bookingRoom.images : []}
        isHotelPage={false}
        description={isObjectRoom(bookingRoom) ? bookingRoom.description_ua : ''}
      >
        Про <span className="highlight">номер {number}</span> готеля <span className="highlight">{findHotel?.hotelName!.replace('-', ' ')!}</span>
      </Article>
      <AddressBlock hotelInfo={findHotel!} />
    </div>
  );
};

export default AboutRoom;
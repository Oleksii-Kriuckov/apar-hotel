import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import { Article } from "../components/article/Article";
import { findData } from "../functions/functions";
import { bookingRoom$, unoccupiedRooms$ } from "../recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "../hooks/useQuery";
import { HotelNames } from "../assets/types";
import ModalWindow from "../components/ModalWindow/ModalWindow";

type Props = {};

const AboutRoom = (props: Props) => {
  const { city, hotel, number } = useParams();
  const { findCity, findHotel } = findData(city!, hotel);
  const [bookingRoom, setBookingRoom] = useRecoilState(bookingRoom$)
  const { queryRooms } = useQuery()

  useEffect(() => {
    if (!bookingRoom.images) {
      queryRooms(hotel as HotelNames, 1, Number(number))
    } 
  }, []);

  return (
    <div>
      <ModalWindow/>

      <Article images={bookingRoom.images} isHotelPage={false} description={bookingRoom.description}>
        About <span className="highlight">room #{number}</span> of <span className="highlight">{findHotel?.hotelName!.replace('-', ' ')!}</span> hotel
        {/* Про <span className="highlight">номер {number}</span> готеля <span className="highlight">{findHotel?.hotelName!.replace('-', ' ')!}</span> */}
      </Article>
      <AddressBlock hotelInfo={findHotel!} />
    </div>
  );
};

export default AboutRoom;
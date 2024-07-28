import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import { Article } from "../components/article/Article";
import { findData } from "../functions/functions";
import { useEffect } from "react";
import { bookingRoom$, unoccupiedRooms$ } from "../recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "../hooks/useQuery";
import { HotelNames } from "../assets/types";
import RoomBlock from "../components/roomBlock/RoomBlock";

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
      <Article images={bookingRoom.images} hotelName={findHotel?.hotelName!.replace('-', ' ')!} description={findHotel?.description!}>
        About <span className="highlight">room #{number}</span> of <span className="highlight">{findHotel?.hotelName!.replace('-', ' ')!}</span> hotel
      </Article>
      <AddressBlock hotelInfo={findHotel!} />
    </div>
  );
};

export default AboutRoom;
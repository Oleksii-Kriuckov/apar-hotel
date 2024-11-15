import { useParams } from "react-router-dom";
import FormSearch from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/functions";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { unoccupiedRooms$, showNotFindMessage$ } from "../recoil/atoms";
import { info_en } from "../assets/Info";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { Booking_ROUTES } from "../routers/paths";

const Hotel = () => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const [freeRooms, setFreeRooms] = useRecoilState(unoccupiedRooms$);
  const [showNotFindMessage, setShowNotFindMessage] = useRecoilState(showNotFindMessage$)

  useEffect(() => {
    return () => {
      if (!location.pathname.includes('about-room') && !Booking_ROUTES.includes(location.pathname)) {
        setFreeRooms([]),
        setShowNotFindMessage(false)
      }
    }
  }, [])

  return (
    <>
      <ModalWindow/>

      <h3
        className="header_h3"
        style={{ textAlign: "center", marginBottom: 0 }}
      >
        Hotel <span className="highlight">{findHotel!.hotelName.replace('-', ' ')}</span>  ({findCity!.city})
      </h3>
      <h4 style={{ textAlign: "center", fontSize: 24, fontWeight: 500 }}>
        {findHotel!.address}
      </h4>
      <div className="hotel_page">
        <FormSearch />

        {(!freeRooms.length && showNotFindMessage) ?
          <p style={{fontSize: 24, color: 'red'}}>{info_en.notFindMessage}</p> :
          freeRooms.map((room) => (
            <RoomBlock key={room.id} roomInfo={room} />
          ))
        }

        <Welcome />
      </div>
    </>
  );
};

export { Hotel };
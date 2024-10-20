import { useParams } from "react-router-dom";
import FormSearch from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/functions";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { unoccupiedRooms$, showNotFindMessage$ } from "../recoil/atoms";
import { info_ua } from "../assets/Info";
import ModalWindow from "../components/ModalWindow/ModalWindow";

const Hotel = () => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const [freeRooms, setFreeRooms] = useRecoilState(unoccupiedRooms$);
  const [showNotFindMessage, setShowNotFindMessage] = useRecoilState(showNotFindMessage$)

  useEffect(() => {
    // console.log(freeRooms)
    return (
      setFreeRooms([]),
      setShowNotFindMessage(false)
    )
  }, [])

  return (
    <>
      <ModalWindow/>
      
      <h3
        className="header_h3"
        style={{ textAlign: "center", marginBottom: 0 }}
      >
        Готель <span className="highlight">{findHotel!.hotelName.replace('-', ' ')}</span>  ({findCity!.city_ua})
      </h3>
      <h4 style={{ textAlign: "center", fontSize: 24, fontWeight: 500 }}>
        {findHotel!.address}
      </h4>
      <div className="hotel_page">
        <FormSearch />

        {(!freeRooms.length && showNotFindMessage) ?
          <p style={{ fontSize: 24, color: 'red' }}>{info_ua.notFindMessage}</p> :
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
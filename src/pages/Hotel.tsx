import { useParams, useActionData } from "react-router-dom";
import FormSearch from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/functions";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { unoccupiedRooms$ } from "../recoil/atoms";

const Hotel = () => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  // const data = useActionData();
  const [freeRooms, setFreeRooms] = useRecoilState(unoccupiedRooms$);
  
  useEffect(() => {
    return setFreeRooms([])
  }, [])

  return (
    <>
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

        {freeRooms.map((room) => (
          <RoomBlock key={room.id} roomInfo={room} />
        ))}

        <Welcome />
      </div>
    </>
  );
};

export { Hotel };
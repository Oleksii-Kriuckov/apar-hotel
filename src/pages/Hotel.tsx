import { useParams, useActionData } from "react-router-dom";
import FormSearch from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/findData";
import { dateToNumber } from "../functions/functions";
import { useEffect, useState } from "react";
import { collection, doc, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { HotelNames, IRoom } from "../assets/types";
import { useRecoilState } from "recoil";
import { freeRooms$ } from "../recoil/atoms";

type Props = {};

const Hotel = (props: Props) => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const data = useActionData();
  const [freeRooms, setFreeRooms] = useRecoilState(freeRooms$);
  // const [rooms, setRooms] = useState<IRoom[]>([]);

  // useEffect(() => {
  //  
  // }, []);

  return (
    <>
      <h3
        className="header_h3"
        style={{ textAlign: "center", marginBottom: 0 }}
      >
        {`Hotel ${findHotel!.hotelName} (${findCity!.city})`}{" "}
      </h3>
      <h4 style={{ textAlign: "center", fontSize: 24, fontWeight: 500 }}>
        {findHotel!.address}
      </h4>
      <div className="hotel_page">
        <FormSearch />

        {freeRooms.map((room) => (
          <RoomBlock key={room.image} roomInfo={room} />
        ))}

        <Welcome />
      </div>
    </>
  );
};

const findRoomsAction = async ({ request, params }: any) => {
  const { findHotel } = findData(params.city, params.hotel);

  // const formData = await request.formData();
  // const checkIn = dateToNumber(formData.get("checkIn"));
  // const checkOut = dateToNumber(formData.get("checkOut"));
  // const numberOfPeople: number = formData.get("people");

  // if (checkIn > checkOut) throw new Error("Wrong date");

  // return findHotel?.rooms.filter(room => {
  //   if (room.persons >= numberOfPeople) {
  //     return room
  //   }
  // })
};

export { Hotel, findRoomsAction };

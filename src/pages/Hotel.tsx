import { useParams, useActionData } from "react-router-dom";
import FormSearch from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/functions";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { unoccupiedRooms$ } from "../recoil/atoms";
import {useQuery} from '../hooks/useQuery'

type Props = {};

const Hotel = (props: Props) => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const data = useActionData();
  // const showBooking = useRecoilValue(showBookingForm$)
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
        Готель <span className="highlight">{findHotel!.hotelName.replace('-', ' ')}</span>  ({findCity!.city_ua})
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
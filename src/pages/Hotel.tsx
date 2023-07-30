import { useParams, useActionData } from "react-router-dom";
import CheckForm from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/welcomeBlock/Welcome";
import findData from "../functions/findData";
import { dateToNumber } from "../functions/functions";
import { useState } from "react";

type Props = {};

const Hotel = (props: Props) => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const data = useActionData()

  return (
    <>
      <h3 className="header_h3" style={{ textAlign: "center" }}>
        {`Hotel ${findHotel!.hotelName} (${findCity!.city})`}{" "}
      </h3>
      <div className="hotel_page">
        <CheckForm />

        {findHotel!.rooms.map((el) => (
          <RoomBlock
            key={el.image}
            roomInfo={el}
            address={findHotel!.address}
          />
        ))}

        <Wellcome />
      </div>
    </>
  );
};

const findRoomsAction = async ({ request, params }: any) => {
  const { findHotel } = findData(params.city, params.hotel);
   
  const formData = await request.formData();
  const checkIn = dateToNumber(formData.get("checkIn"));
  const checkOut = dateToNumber(formData.get("checkOut"));
  const numberOfPeople: number = formData.get("people");

  if (checkIn > checkOut) throw new Error("Wrong date");

  return findHotel?.rooms.filter(room => {
    if (room.persons >= numberOfPeople) {
      return room
    }
  })
};

export { Hotel, findRoomsAction };

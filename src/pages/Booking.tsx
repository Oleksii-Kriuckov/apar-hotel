import { useParams } from "react-router-dom";
import React from "react";
import Form from "../components/UI/Forms/FormBooking";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/welcomeBlock/Welcome";
import { info_en } from "../assets/Info";

type Props = {};

const Booking = (props: Props) => {
  const { city } = useParams();
  return (
    <>
      <h3 className="header_h3">{`${info_en.booking} (${city})`} </h3>
      <div className="booking_page">
        <Form />

        <RoomBlock />
        <RoomBlock />
        <RoomBlock />

        <Wellcome />
      </div>
    </>
  );
};

export default Booking;

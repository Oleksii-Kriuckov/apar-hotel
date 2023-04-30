import React from "react";
import Form from "../components/UI/Forms/FormBooking";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/welcomeBlock/Welcome";

type Props = {};

const Booking = (props: Props) => {
  return (
    <>
      <h3 className="header_h3">Бронирование (г. Волгоград)</h3>
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

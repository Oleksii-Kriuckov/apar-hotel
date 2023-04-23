import React from "react";
import Form from "../components/UI/form/Form";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/wellcomeBlock/Wellcome";

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

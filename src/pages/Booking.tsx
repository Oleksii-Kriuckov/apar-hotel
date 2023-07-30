import MediaLinks from "../components/UI/Links/MediaLinks";
import LicenseLink from "../components/UI/Links/LicenseLink";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import { useParams } from "react-router-dom";
import findData from "../functions/findData";
import { MyMapContainer } from "../map/MyMapContainer";
import { MapChild } from "../map/MapChild";
import FormBooking from "../components/UI/Forms/FormBooking";

const Booking = () => {
  const { city, hotel, number } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);

  return (
    <div>
      <h3 className="header_h3">
        Booking: hotel {findHotel!.hotelName}, room {number} ({findCity!.city})
      </h3>

      <ul className="contacts">
        <li>{findHotel!.address}</li>
        <li>{findHotel!.tel}</li>
        <li>{findHotel!.email}</li>
      </ul>

      <FormBooking/>
      <MediaLinks />
      <BookingMessage />
      <LicenseLink />

      <h3 className="header_h3">How can I get to:</h3>
       <MyMapContainer hotelLocation={findHotel!.coordinates} zoom={16}>
        <MapChild location={findHotel!.coordinates} />
      </MyMapContainer>
    </div>
  );
};

export default Booking;

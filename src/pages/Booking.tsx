import MediaLinks from "../components/UI/Links/MediaLinks";
import LicenseLink from "../components/UI/Links/LicenseLink";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import { useParams } from "react-router-dom";
import useFind from "../hooks/useFind";
import { MyMapContainer } from "../map/MyMapContainer";
import { MapChild } from "../map/MapChild";

const Booking = () => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = useFind(city!, hotel!);

  return (
    <div>
      <h3 className="header_h3">
        Booking: {findHotel!.hotelName} ({findCity!.city})
      </h3>
      <ul className="contacts">
        <li>{findHotel!.address}</li>
        <li>{findHotel!.tel}</li>
        <li>{findHotel!.email}</li>
        <li>{findHotel!.coordinates.lat}</li>
        <li>{findHotel!.coordinates.lng}</li>
      </ul>

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

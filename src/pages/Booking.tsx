import MediaLinks from "../components/UI/Links/MediaLinks";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import { useParams } from "react-router-dom";
import findData from "../functions/findData";
import { MyMapContainer } from "../map/MyMapContainer";
import { MapChild } from "../map/MapChild";
<<<<<<< HEAD
import {FormBooking} from "../components/UI/Forms/FormBooking";
=======
import FormBooking from "../components/UI/Forms/FormBooking";
import FormAntd from "../components/UI/Forms/FormANtd";
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b

const Booking = () => {
  const { city, hotel, number } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);

  return (
    <div className="booking_page">
      <h3 className="header_h3">
        Booking: hotel {findHotel!.hotelName}, room {number} ({findCity!.city})
      </h3>

      <div id="contacts_wrap" className="d-flex flex-column flex-md-row">
        <div>
          <ul className="contacts">
            <li>{findHotel!.address}</li>
            <li>{findHotel!.tel}</li>
            <li>{findHotel!.email}</li>
          </ul>
          <MediaLinks />
        </div>

        <BookingMessage />
      </div>

      <FormBooking />
<<<<<<< HEAD
=======
<FormAntd/>
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b
      <div>
        <h3 style={{ marginBottom: 15 }} className="header_h3">
          How can I get to:
        </h3>
        <MyMapContainer hotelLocation={findHotel!.coordinates} zoom={16}>
          <MapChild location={findHotel!.coordinates} />
        </MyMapContainer>
      </div>
    </div>
  );
};

export default Booking;

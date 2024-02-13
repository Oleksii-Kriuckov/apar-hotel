import MediaLinks from "../components/UI/Links/MediaLinks";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import { useParams, useNavigate } from "react-router-dom";
import { findData } from "../functions/functions";
import { MyMapContainer } from "../map/MyMapContainer";
import { MapChild } from "../map/MapChild";
import { FormBooking } from "../components/UI/Forms/FormBooking";
import { useEffect } from "react";
import { bookingRoom$, showBookingForm$, showSuccessMessage$, dateRange$ } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import SuccessBooking from "../components/bookingMessage/SuccessBooking";

const Booking = () => {
  const { city, hotel, number } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const bookingRoom = useRecoilValue(bookingRoom$)
  const dateRange = useRecoilValue(dateRange$)
  const showBooking = useRecoilValue(showBookingForm$)
  const showSuccessMessage = useRecoilValue(showSuccessMessage$)
  let navigate = useNavigate();

  useEffect(() => {
    if (!bookingRoom.id) {
      navigate(`/${city}/${hotel}`)
    } else {
      // console.log('si ', new Date(dateRange[0]) )
      // console.log('so ', new Date(dateRange[1]) )
    }
  }, []);

  return (
    <div className="booking_page">
      {/* display start and end dates, total amount */}
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

      <div className="show_place">
        {showBooking && <FormBooking />}
        {showSuccessMessage && <SuccessBooking />}
      </div>

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

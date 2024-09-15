import MediaLinks from "../components/UI/Links/MediaLinks";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import { useParams, useNavigate } from "react-router-dom";
import { findData } from "../functions/functions";
import { MyMapContainer } from "../map/MyMapContainer";
import { MapChild } from "../map/MapChild";
import { FormBooking } from "../components/UI/Forms/FormBooking";
import { useEffect } from "react";
import { bookingRoom$, showBookingForm$, showSuccessMessage$, dateRange$ } from "../recoil/atoms";
import { numberOfDays$, totalAmount$, daysRange$ } from "../recoil/selectors";
import { useRecoilValue } from "recoil";
import SuccessBooking from "../components/bookingMessage/SuccessBooking";

const Booking = () => {
  const { city, hotel, number } = useParams();
  const { findCity, findHotel } = findData(city!, hotel!);
  const bookingRoom = useRecoilValue(bookingRoom$)
  const numberOfDays = useRecoilValue(numberOfDays$)
  const totalAmount = useRecoilValue(totalAmount$)
  const daysRange = useRecoilValue(daysRange$)
  const showBooking = useRecoilValue(showBookingForm$)
  const showSuccessMessage = useRecoilValue(showSuccessMessage$)
  let navigate = useNavigate();

  useEffect(() => {
    if (!bookingRoom.id) {
      navigate(`/${city}/${hotel}`)
    }
  }, []);

  return (
    <div className="booking_page">
      <h3 id="booking_header" className="header_h3">
        {/* Бронювання: готель {findHotel!.hotelName} ({findCity!.city_ua}), номер {number} */}
        Booking: hotel {findHotel!.hotelName} ({findCity!.city}), room {number}
        <span className="booking_room_info">
          {' '} from <span className="days_range">{daysRange[0]} </span> to <span className="days_range"> {daysRange[1]}</span> ({numberOfDays} night{numberOfDays > 1 ? 's' : ''}).
          <span style={{ textTransform: 'capitalize' }}> Total </span> amount {totalAmount}
        </span>
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
        <h3 style={{ marginBottom: 15, textAlign: 'center' }} className="header_h3">
          How can I get to:
        </h3>

        <div className="booking_map_container">
          <MyMapContainer style={{ margin: 'auto' }} hotelLocation={findHotel!.coordinates} zoom={16}>
            <MapChild location={findHotel!.coordinates} />
          </MyMapContainer>
        </div>
      </div>
    </div>
  );
};

export default Booking;

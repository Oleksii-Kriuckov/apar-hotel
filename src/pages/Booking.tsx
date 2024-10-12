import MediaLinks from "../components/UI/Links/MediaLinks";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import { useParams, useNavigate } from "react-router-dom";
import { findData } from "../functions/functions";
import { MyMapContainer } from "../map/MyMapContainer";
import { MapChild } from "../map/MapChild";
import { FormBooking } from "../components/UI/Forms/FormBooking";
import { useEffect } from "react";
import { bookingRoom$, showBookingForm$, showSuccessMessage$ } from "../recoil/atoms";
import { numberOfDays$, totalAmount$, daysRange$ } from "../recoil/selectors";
import { useRecoilValue } from "recoil";
import SuccessBooking from "../components/bookingMessage/SuccessBooking";
import { CSSTransition } from 'react-transition-group';
import { isObjectRoom } from "../functions/isObject";
import '../components/bookingMessage/style.css'

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
    if (isObjectRoom(bookingRoom) && !bookingRoom.id) {
      navigate(`/${city}/${hotel}`)
    }
  }, []);

  return (
    <>
      <h3 id="booking_header" className="header_h3">
        {/* Бронювання: готель {findHotel!.hotelName} ({findCity!.city_ua}), номер {number} */}
        Booking: hotel {findHotel!.hotelName} ({findCity!.city}), room {number}
        <span className="booking_room_info">
          {' '} from <span className="days_range">{daysRange[0]} </span> to <span className="days_range"> {daysRange[1]}</span> ({numberOfDays} night{numberOfDays > 1 ? 's' : ''}).
          <span style={{ textTransform: 'capitalize' }}> Total </span> amount {totalAmount}
        </span>
      </h3>

    <div className="booking_page">
      <div className="show_place">
        {showBooking && <FormBooking />}

        <CSSTransition in={showSuccessMessage} timeout={1700} classNames={'success'} unmountOnExit>
          <SuccessBooking />
        </CSSTransition>
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
    </div>
    </>
  );
};

export default Booking;

import { useParams } from "react-router-dom";
import roomImg from "../components/images/rooms/pexels-andrew-neel-3201763.jpg";
import roomImg1 from "../components/images/rooms/marquis-3-min.jpg";
import Form from "../components/UI/Forms/FormBooking";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/welcomeBlock/Welcome";
import { allHotels, info_en } from "../assets/Info";
import useFind from "../hooks/useFind";

type Props = {};

const Hotel = (props: Props) => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = useFind(city!, hotel!);

  return (
    <>
      <h3 className="header_h3">
        {`Hotel ${findHotel.hotelName} (${findCity.city})`}{" "}
      </h3>
      <div className="booking_page">
        <Form />

        {findHotel.images.rooms.map((el) => (
          <RoomBlock roomImg={el} />
        ))}

        <Wellcome />
      </div>
    </>
  );
};

export default Hotel;

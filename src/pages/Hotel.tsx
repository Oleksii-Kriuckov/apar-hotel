import { useParams } from "react-router-dom";
import roomImg from "../components/images/rooms/pexels-andrew-neel-3201763.jpg";
import roomImg1 from "../components/images/rooms/marquis-3-min.jpg";
import Form from "../components/UI/Forms/FormBooking";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/welcomeBlock/Welcome";
import { hotels, info_en } from "../assets/Info";

type Props = {};

const Hotel = (props: Props) => {
  const { city } = useParams();

  return (
    <>
      <h3 className="header_h3">{`${info_en.booking} (${city})`} </h3>
      <div className="booking_page">
        <Form />

        {hotels[0].hotelsInfo[0].images.rooms.map((el) => (
          <RoomBlock roomImg={el} />
        ))}


        <Wellcome />
      </div>
    </>
  );
};

export default Hotel;

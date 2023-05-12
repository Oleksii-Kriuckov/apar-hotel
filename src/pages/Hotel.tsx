import { useParams } from "react-router-dom";
import Form from "../components/UI/Forms/FormSearch";
import RoomBlock from "../components/roomBlock/RoomBlock";
import Wellcome from "../components/welcomeBlock/Welcome";
import useFind from "../hooks/useFind";

type Props = {};

const Hotel = (props: Props) => {
  const { city, hotel } = useParams();
  const { findCity, findHotel } = useFind(city!, hotel!);

  return (
    <>
      <h3 className="header_h3">
        {`Hotel ${findHotel!.hotelName} (${findCity!.city})`}{" "}
      </h3>
      <div className="booking_page">
        <Form />

        {findHotel!.rooms.map((el) => (
          <RoomBlock key={el.image} roomInfo={el} address={findHotel!.address}/>
        ))}

        <Wellcome />
      </div>
    </>
  );
};

export default Hotel;

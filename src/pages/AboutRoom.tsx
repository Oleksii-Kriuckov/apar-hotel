import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import { Article } from "../components/article/Article";
import { findData } from "../functions/functions";

type Props = {};

const AboutRoom = (props: Props) => {
  const {city, hotel} = useParams();
  const { findCity, findHotel } = findData(city!, hotel);

  return (
    <div>
      <Article images={findHotel?.images.forSlider!} hotelName={findHotel?.hotelName!.replace('-', ' ')!}>{findHotel?.description!}</Article>
      <AddressBlock hotelInfo={findHotel!}/>
    </div>
  );
};

export default AboutRoom;
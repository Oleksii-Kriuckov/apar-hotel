import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import { findData } from "../functions/functions";
import { Article } from "../components/article/Article";
import ModalWindow from "../components/ModalWindow/ModalWindow";

type Props = {};

const AboutHotel = (props: Props) => {
  const {city, hotel} = useParams();
  const { findCity, findHotel } = findData(city!, hotel);

  return (
    <div>
      <ModalWindow/>
      <Article images={findHotel?.images.forSlider!} isHotelPage={true} description={findHotel?.description!}>
        About hotel <span className="highlight">{findHotel?.hotelName!.replace('-', ' ')!}</span> 
      </Article>
      <AddressBlock hotelInfo={findHotel!}/>
    </div>
  );
};

export default AboutHotel;
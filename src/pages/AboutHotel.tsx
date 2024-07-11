import { useParams } from "react-router-dom";
import TitleBlock from "../components/TitleBlock/TitleBlock";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/functions";
import { Article } from "../components/article/Article";

type Props = {};

const AboutHotel = (props: Props) => {
  const {city, hotel} = useParams();
  const { findCity, findHotel } = findData(city!, hotel);

  return (
    <div>
      {/* <TitleBlock>Hotel <span className="highlight">{findHotel && findHotel.hotelName.replace('-', ' ')}</span></TitleBlock>  */}
      <Article images={findHotel?.images.forSlider!} hotelName={findHotel?.hotelName!.replace('-', ' ')!}>{findHotel?.description!}</Article>
      <AddressBlock hotelInfo={findHotel!}/>
    </div>
  );
};

export default AboutHotel;
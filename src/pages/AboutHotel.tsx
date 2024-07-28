import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import { findData } from "../functions/functions";
import { Article } from "../components/article/Article";
// import TitleBlock from "../components/TitleBlock/TitleBlock";
// import Welcome from "../components/welcomeBlock/Welcome";

type Props = {};

const AboutHotel = (props: Props) => {
  const {city, hotel} = useParams();
  const { findCity, findHotel } = findData(city!, hotel);

  return (
    <div>
      {/* <TitleBlock>Hotel <span className="highlight">{findHotel && findHotel.hotelName.replace('-', ' ')}</span></TitleBlock>  */}
      <Article images={findHotel?.images.forSlider!} hotelName={findHotel?.hotelName!.replace('-', ' ')!} description={findHotel?.description!}>
        About <span className="highlight">{findHotel?.hotelName!.replace('-', ' ')!}</span> hotel 
      </Article>
      <AddressBlock hotelInfo={findHotel!}/>
    </div>
  );
};

export default AboutHotel;
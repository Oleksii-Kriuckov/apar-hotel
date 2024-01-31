import { useParams } from "react-router-dom";
import { Article } from "../components/article/Article";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/findData";
import TitleBlock from "../components/TitleBlock/TitleBlock";

type Props = {};

const MainPage = (props: Props) => {
  const { city } = useParams();
  const { findCity } = findData(city!);

  return (
    <main>
      <TitleBlock>{city!}</TitleBlock>
      <Article>{findCity!.description}</Article>

      <h3 className="our_addresses">Our address</h3>
      {findCity!.hotelsInfo.map((hotel) => (
        <AddressBlock key={hotel.address} hotelInfo={hotel} />
      ))}

      <Welcome />
    </main>
  );
};

export default MainPage;

import { useParams } from "react-router-dom";
import { Article } from "../components/article/Article";
import { MyCarousel } from "../components/Slider/MyCarousel";
import ToBookBlock from "../components/ToBookBlock/ToBookBlock";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import useFind from "../hooks/useFind";

type Props = {};

const MainPage = (props: Props) => {

  const { city } = useParams();
  const { findCity } = useFind(city!);

  return (
    <main>

      <ToBookBlock>{city!}</ToBookBlock>
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

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { hotels } from "../assets/Info";
import { Article } from "../components/article/Article";
import { MyCarousel } from "../components/Slider/MyCarousel";
import ToBookBlock from "../components/ToBookBlock/ToBookBlock";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { IHotels } from "../assets/types";

type Props = {};

const MainPage = (props: Props) => {
  const [findCity, setFindCity] = useState({});
  const { city } = useParams();

  function isCityIHotels(city: any): city is IHotels {
    return (city as IHotels).description !== undefined;
  }

  useEffect(() => {
    const findCity = hotels.find((el) => el.city.toLowerCase() === city);
    if (findCity) {
      setFindCity(findCity);
    }
  }, [city]);

  return (
    <main>
      <MyCarousel />
      <ToBookBlock>{city!}</ToBookBlock>
      <Article>{isCityIHotels(findCity) ? findCity.description : ""}</Article>
      <h4 id="our_addresses">Our address</h4>

      {isCityIHotels(findCity) &&
        findCity.hotelsInfo.map((hotel) => (
          <AddressBlock key={hotel.address} hotelInfo={hotel} />
        ))}

      <Welcome />
    </main>
  );
};

export default MainPage;

import { hotels } from "../assets/Info";
import { Article } from "../components/article/Article";
import { MyCarousel } from "../components/Slider/MyCarousel";
import ToBookBlock from "../components/ToBookBlock/ToBookBlock";
import keyhole_color from "../components/images/Group 1317.png";
import keyhole from "../components/images/Group 1318.png";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
      <div className="background">
        <img
          src={keyhole_color}
          alt="keyhole_color"
          className="keyhole_color"
        />
      </div>
      <div className="background">
        <img src={keyhole} alt="keyhole" className="keyhole" />
      </div>
      <MyCarousel />
      <ToBookBlock>{city!}</ToBookBlock>
      <Article>{isCityIHotels(findCity) ? findCity.description : ""}</Article>
      <h4 id="our_addresses">Our address</h4>

      {isCityIHotels(findCity) &&
        findCity.hotelsInfo.map((hotel) => (
          <AddressBlock key={hotel.address} hotelInfo={hotel} />
        ))
      }

      <Welcome />
    </main>
  );
};

export default MainPage;

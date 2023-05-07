import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { hotels } from "../assets/Info";
import { Article } from "../components/article/Article";
import { MyCarousel } from "../components/Slider/MyCarousel";
import ToBookBlock from "../components/ToBookBlock/ToBookBlock";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
// import { IHotels } from "../assets/types";
import useFind from "../hooks/useFind";

type Props = {};

const MainPage = (props: Props) => {

  const { city } = useParams();
  const { findCity } = useFind(city!);

  return (
    <main>
      <MyCarousel />
      <ToBookBlock>{city!}</ToBookBlock>
      <Article>{findCity.description}</Article>
      <h4 id="our_addresses">Our address</h4>

      {findCity.hotelsInfo.map((hotel) => (
        <AddressBlock key={hotel.address} hotelInfo={hotel} />
      ))}

      <Welcome />
    </main>
  );
};

export default MainPage;

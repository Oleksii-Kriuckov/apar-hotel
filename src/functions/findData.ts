import { allHotels } from "../assets/Info";
import { HotelNames, IRoom } from "../assets/types";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useRecoilState, useSetRecoilState } from "recoil";
import { freeRooms$ } from "../recoil/atoms";
import { useState } from "react";

export function findData(city: string, hotel?: string) {
  let findHotel;

  const findCity = allHotels.find((el) => el.city.toLowerCase() === city);
  if (findCity) {
    findHotel = findCity.hotelsInfo.find(
      (el) => el.hotelName.toLowerCase() === hotel
    );
  }

  return { findCity, findHotel };
}

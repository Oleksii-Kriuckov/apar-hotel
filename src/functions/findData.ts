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

// Remake this function in hook
export const queryRooms = (hotel: HotelNames) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const q = query(collection(db, "rooms"));
  let roomsArr: IRoom[] = [];

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc: any) => {
      roomsArr.push({ ...doc.data(), id: doc.id });
    });

    const freeRooms = roomsArr.filter((room) => room.hotel === hotel);
    setRooms(freeRooms);
    return () => unsubscribe();
  });
  return 
  // console.log(roomsArr);
};

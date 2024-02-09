import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { HotelNames, IRoom } from "../assets/types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { freeRooms$, dateRange$ } from "../recoil/atoms";

export const useQuery = () => {
  const setRooms = useSetRecoilState(freeRooms$)
  const dateRange = useRecoilValue(dateRange$)
  
  function queryRooms(hotel: HotelNames) {
    const q = query(collection(db, "rooms"));
    let roomsArr: IRoom[] = [];

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        roomsArr.push({ ...doc.data(), id: doc.id });
      });

      const allHotelRooms = roomsArr.filter((room) => room.hotel === hotel);
      allHotelRooms.forEach((room, ind, arr) => {
        
      })
      console.log(dateRange);
      setRooms(allHotelRooms);
      
      return () => unsubscribe();
    });
  }
  return { queryRooms}
};

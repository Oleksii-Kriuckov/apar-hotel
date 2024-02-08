import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { HotelNames, IRoom } from "../assets/types";
import { useSetRecoilState } from "recoil";
import { freeRooms$ } from "../recoil/atoms";

export const useQuery = () => {
  const setRooms = useSetRecoilState(freeRooms$)
  
  function queryRooms(hotel: HotelNames) {
    const q = query(collection(db, "rooms"));
    let roomsArr: IRoom[] = [];

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        roomsArr.push({ ...doc.data(), id: doc.id });
      });

      const freeRooms = roomsArr.filter((room) => room.hotel === hotel);
      freeRooms.forEach((room, ind, arr) => {
        
      })
      // console.log(freeRooms);
      setRooms(freeRooms);
      
      return () => unsubscribe();
    });
  }
  return { queryRooms}
};

import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { HotelNames, IRoom } from "../assets/types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { freeRooms$, dateRange$, } from "../recoil/atoms";

export const useQuery = () => {
  const setRooms = useSetRecoilState(freeRooms$);
  const dateRange = useRecoilValue(dateRange$);

  function queryRooms(hotel: HotelNames, persons: number) {
    const q = query(collection(db, "rooms"));
    let roomsArr: IRoom[] = [];

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        roomsArr.push({ ...doc.data(), id: doc.id });
      });

      const allHotelRooms = roomsArr.filter((room) => room.hotel === hotel);
      
      // allHotelRooms.forEach(room => {
      //   if (room.occupied.length > 0) {
      //     console.log(`hotel: ${room.hotel}, room: ${room.number}`);

      //     room.occupied.forEach((obj) => {
      //       console.log(
      //         `checkIn: ${new Date(obj.checkIn).toLocaleString()}, checkOut: ${new Date(obj.checkOut).toLocaleString()}`
      //       );
      //     });
      //   }
      // })

      const freeRooms = allHotelRooms.filter((room, ind, arr) => {
        return room.occupied.every(oc => {
          return (oc.checkIn > dateRange[1] || oc.checkOut < dateRange[0]) //|| (oc.checkIn > dateRange[1] && oc.checkOut > dateRange[1])
        })
      });
      const res = freeRooms.filter(r => r.persons >= persons)
      // console.log(res);
      // console.log('choose date in :', new Date(dateRange[0]).toLocaleString() );
      // console.log('choose date out :', new Date(dateRange[1]).toLocaleString() );
      setRooms(res);

      return () => unsubscribe();
    });
  }
  return { queryRooms };
};

import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { HotelNames, IRoom } from "../assets/types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { unoccupiedRooms$, dateRange$, bookingRoom$, } from "../recoil/atoms";

export const useQuery = () => {
  const setUnoccupiedRooms = useSetRecoilState(unoccupiedRooms$);
  const setBookingRoom = useSetRecoilState(bookingRoom$);
  const dateRange = useRecoilValue(dateRange$);

  function queryRooms(hotel: HotelNames, persons: number = 1, number?: number) {
    const q = query(collection(db, "rooms"));
    let roomsArr: IRoom[] = [];

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        roomsArr.push({ ...doc.data(), id: doc.id });
      });

      const allHotelRooms = roomsArr.filter((room) => room.hotel === hotel);
      
      if (number) {
        const searchedRoom = allHotelRooms.find(room => room.number === Number(number))
        if (searchedRoom) {
          setBookingRoom(searchedRoom)
          // console.log(searchedRoom);
        }
      } else {
        // filter occupiied rooms
        const freeRooms = allHotelRooms.filter((room, ind, arr) => {
          return room.occupied.every(oc => {
            return (oc.checkIn > dateRange[1] || oc.checkOut < dateRange[0]) //|| (oc.checkIn > dateRange[1] && oc.checkOut > dateRange[1])
          })
        });
        
        const res = freeRooms.filter(r => r.persons >= persons)
        setUnoccupiedRooms(res);
      }

      return () => unsubscribe();
    });
  }
  return { queryRooms };
};

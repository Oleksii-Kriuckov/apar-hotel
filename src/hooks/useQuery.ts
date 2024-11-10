import { collection, onSnapshot, query, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { HotelNames, IRoom } from "../assets/types";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  unoccupiedRooms$,
  bookingRoom$,
  showNotFindMessage$,
  showBookingForm$,
  showSuccessMessage$,
  datePickerRange$,
  persons$
} from "../recoil/atoms";
import { isObjectRoom } from "../functions/isObject";
import { dataBaseName } from "../assets/env";
import { stampDateFrom$, stampDateTo$ } from "../recoil/selectors";

export const useQuery = () => {
  const setUnoccupiedRooms = useSetRecoilState(unoccupiedRooms$);
  const [bookingRoom, setBookingRoom] = useRecoilState(bookingRoom$);
  const showNotFindMessage = useSetRecoilState(showNotFindMessage$)
  const setShowBookingForm = useSetRecoilState(showBookingForm$);
  const showSuccessMessage = useSetRecoilState(showSuccessMessage$);
  const stampDateFrom = useRecoilValue(stampDateFrom$);
  const stampDateTo = useRecoilValue(stampDateTo$);

  function queryRooms(hotel: HotelNames, persons: number = 1, number?: number) {
    const q = query(collection(db, dataBaseName));     // dev
    // const q = query(collection(db, "room_ua"));   // prod
    let allRooms: IRoom[] = [];

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        allRooms.push({ ...doc.data(), id: doc.id });
      });

      const allHotelRooms = allRooms.filter((room) => room.hotel === hotel);

      if (number) {
        const searchedRoom = allHotelRooms.find(room => room.number === Number(number))
        if (searchedRoom) {
          setBookingRoom(searchedRoom)
        }
      } else {
        // filter occupied rooms
        const freeRooms = allHotelRooms.filter((room) => {
          return room.occupied.every(oc => {
            return (oc.checkIn > stampDateTo || oc.checkOut < stampDateFrom)
          })
        });

        const res = freeRooms.filter(r => r.persons >= persons)
        res.sort((a, b) => a.number - b.number)

        showNotFindMessage(true)
        setUnoccupiedRooms(res);
      }

      return () => unsubscribe();
    });
  }

  const bookRoom = () => {
    if (isObjectRoom(bookingRoom)) {
      const base = doc(db, dataBaseName, bookingRoom.id);
      const [items] = bookingRoom.occupied;
      if (items) {
        updateDoc(base, {
          occupied: [items, { checkIn: stampDateFrom, checkOut: stampDateTo }],
        });
      } else {
        updateDoc(base, {
          occupied: [{ checkIn: stampDateFrom, checkOut: stampDateTo }],
        });
      }
    }
    setShowBookingForm(false);
    showSuccessMessage(true);
  }
  return { queryRooms, bookRoom };
};

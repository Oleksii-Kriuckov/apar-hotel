import { useSetRecoilState } from "recoil";
import { bookingRoom$, showBookingForm$ } from "../recoil/atoms";
import { IRoom } from "../assets/types";
import { useNavigate } from "react-router-dom";
import { isObjectRoom } from "../functions/isObject";

export const useAppNav = (roomInfo: IRoom | object, city: string) => {
  const setBookingRoom = useSetRecoilState(bookingRoom$);
  const setShowBookingForm = useSetRecoilState(showBookingForm$);
  const navigate = useNavigate();

  const navigateBooking = () => {
    if (isObjectRoom(roomInfo)) {
      const newRoomInfo: {
        occupied: { checkIn: number; checkOut: number }[],
        [key: string]: string | number | { checkIn: number; checkOut: number }[]
      } = { occupied: [] };
      for (const key in roomInfo) {
        if (Object.prototype.hasOwnProperty.call(roomInfo, key)) {
          // @ts-ignore
          newRoomInfo[key] = roomInfo[key];
        }
      }

      newRoomInfo.occupied = newRoomInfo.occupied.filter((v, i, a) => v.checkOut > Date.now())
      // newRoomInfo.occupied = roomInfo.occupied.filter((v, i, a) => v.checkOut > Date.now())

      setBookingRoom(newRoomInfo);
      setShowBookingForm(true);
      navigate(`/${city}/${roomInfo.hotel}/${roomInfo.number}/booking`);
    }
  }

  const navigateAboutRoom = () => {
    if (isObjectRoom(roomInfo)) {
      setBookingRoom(roomInfo)
      navigate(`/${city}/${roomInfo.hotel}/${roomInfo.number}/about-room`)
    }
  }

  return { navigateBooking, navigateAboutRoom }
}

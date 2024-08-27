import { useSetRecoilState } from "recoil";
import { bookingRoom$, showBookingForm$ } from "../recoil/atoms";
import { IRoom } from "../assets/types";
import { useNavigate } from "react-router-dom";

export const useAppNav = (roomInfo: IRoom, city: string) => {
  const setBookingRoom = useSetRecoilState(bookingRoom$);
  const setShowBookingForm = useSetRecoilState(showBookingForm$);
  const navigate = useNavigate();

  const navigateBooking = () => {
    const newRoomInfo: {
      occupied: { checkIn: number; checkOut: number }[],
      [key: string]: string | number | { checkIn: number; checkOut: number }[]
    } = { occupied: [] };
    for (const key in roomInfo) {
      if (Object.prototype.hasOwnProperty.call(roomInfo, key)) {
        newRoomInfo[key] = roomInfo[key];
      }
    }

    newRoomInfo.occupied = newRoomInfo.occupied.filter((v, i, a) => v.checkOut > Date.now())
    // newRoomInfo.occupied = roomInfo.occupied.filter((v, i, a) => v.checkOut > Date.now())

    setBookingRoom(newRoomInfo);
    setShowBookingForm(true);
    navigate(`/${city}/${roomInfo.hotel}/${roomInfo.number}/booking`);
  }

  const navigateAboutRoom = () => {
    setBookingRoom(roomInfo)
    navigate(`/${city}/${roomInfo.hotel}/${roomInfo.number}/about-room`)
  }

  return { navigateBooking, navigateAboutRoom }
}

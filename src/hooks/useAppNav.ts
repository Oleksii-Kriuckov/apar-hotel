import { useSetRecoilState } from "recoil";
import { bookingRoom$ } from "../recoil/atoms";
import { IRoom } from "../assets/types";
import { useNavigate } from "react-router-dom";

export const useAppNav = (roomInfo: IRoom, city: string) => {
  const setBookingRoom = useSetRecoilState(bookingRoom$);
  const navigate = useNavigate();

  const navigateBooking = () => {

  }

  const navigateAboutRoom = () => {
    setBookingRoom(roomInfo)
    navigate(`/${city}/${roomInfo.hotel}/${roomInfo.number}/about-room`)
  }

  return {navigateBooking, navigateAboutRoom}
}

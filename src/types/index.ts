import { HotelNames } from "../assets/types"

type RoomType = {
  // id: number,
  hotelName: HotelNames,
  number: number,
  occupied: {checkIn: string | number, checkOut: string | number}[]
}
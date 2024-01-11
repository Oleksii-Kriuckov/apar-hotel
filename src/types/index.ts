type HotelNames = "Luxury" | "Independence" | "Code"

type RoomType = {
  // id: number,
  hotelName: HotelNames,
  number: number,
  occupied: {checkIn: string | number, checkOut: string | number}[]
}
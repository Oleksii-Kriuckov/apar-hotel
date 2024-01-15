export interface IHotelInfo {
  hotelName: string;
  address: string;
  tel: string | number;
  email: string;
  coordinates: Coordinates;
  conveniences: string[];
  // rooms: IRoom[],
  images: {
    forSlider: string[]
  }
}

export interface IRoom {
  hotel: HotelNames
  image: string;
  price: number;
  number: number;
  floor: number;
  persons: number;
  occupied: {checkIn: number, checkOut: number}[]
  id?: number;
}

export interface IHotelsInCity {
  city: string;
  description: string;
  hotelsInfo: IHotelInfo[];
}

export type HotelNames = "Luxury" | "Independence" | "Code"

export type Color = "white" | "black";

export type BorderColor = "blackBorder" | "yellowBorder" | "whiteBorder";

export interface Coordinates {
  lat: number; 
  lng: number;
}
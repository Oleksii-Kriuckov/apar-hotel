export interface IHotelInfo {
  hotelName: string;
  address: string;
  tel: string | number;
  email: string;
  coordinates: Coordinates;
  conveniences: string[];
  // rooms: IRoom[],
  description: string;
  images: {
    forSlider: string[]
  }
}

export interface IRoom {
  floor: number;
  hotel: HotelNames
  id: string;
  images: string[];
  number: number;
  occupied: {checkIn: number, checkOut: number}[]
  persons: number;
  price: number;
}

export interface IHotelsInCity {
  city: string;
  hotelsInfo: IHotelInfo[];
}

export type HotelNames = "arena-summit" | "tiso" | "code-10"

export type Color = "white" | "black";

// export type BorderColor = "blackBorder" | "yellowBorder" | "whiteBorder";

export interface Coordinates {
  lat: number; 
  lng: number;
}
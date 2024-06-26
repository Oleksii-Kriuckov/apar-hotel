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
  id: string;
  hotel: HotelNames
  image: string;
  price: number;
  number: number;
  floor: number;
  persons: number;
  occupied: {checkIn: number, checkOut: number}[]
}

export interface IHotelsInCity {
  city: string;
  hotelsInfo: IHotelInfo[];
}

export type HotelNames = "luxury" | "independence" | "code"

export type Color = "white" | "black";

// export type BorderColor = "blackBorder" | "yellowBorder" | "whiteBorder";

export interface Coordinates {
  lat: number; 
  lng: number;
}
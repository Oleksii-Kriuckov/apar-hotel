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
  description: string;
  description_ua: string;
  floor: number;
  hotel: HotelNames;
  id: string;
  images: string[];
  ['img-mini']: string;
  number: number;
  occupied: {checkIn: number, checkOut: number}[];
  persons: number;
  price: number;
}

export interface IHotelsInCity {
  city: string;
  city_ua: string;
  hotelsInfo: IHotelInfo[];
}

export type HotelNames = "arena-summit" | "tiso" | "code-10"

export type Color = "white" | "black";

// export type BorderColor = "blackBorder" | "yellowBorder" | "whiteBorder";

export interface Coordinates {
  lat: number; 
  lng: number;
}
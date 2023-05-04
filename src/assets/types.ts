export interface IHotelInfo {
  address: string;
  coordinates: Coordinates;
  conveniences: string[];
}

export interface IHotels {
  city: string;
  description: string;
  hotelsInfo: IHotelInfo[];
}

export type Color = "white" | "black";

export type BorderColor = "blackBorder" | "yellowBorder" | "whiteBorder";

export interface Coordinates {
  lat: number; 
  lng: number;
}
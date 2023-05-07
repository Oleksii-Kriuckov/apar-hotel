export interface IHotelInfo {
  hotel: string;
  address: string;
  tel: string | number;
  coordinates: Coordinates;
  conveniences: string[];
  images: {
    rooms: string[],
    forSlider: string[]
  }
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
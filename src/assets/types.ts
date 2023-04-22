interface IHotelInfo {
  address: string;
  conveniences: string[];
}

export interface IArticleInfo {
  city: string;
  description: string;
  hotels: IHotelInfo[];
}

export type Color = "white" | "black";

export type BorderColor = "blackBorder" | "yellowBorder";
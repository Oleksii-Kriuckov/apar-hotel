import { IRoom } from "../assets/types";
export const isObjectRoom = (value: any): value is IRoom => (
    typeof value === "object" 
)
import { atom } from "recoil";
import { IRoom } from "../assets/types";

export const dateRange$ = atom<[string, string] | [number, number]>({
  key: 'dateRange',
  default: ['', '']
})

export const freeRooms$ = atom<IRoom[]>({
  key: 'freeRooms',
  default: []
})

export const bookingRoom$ = atom({
  key: 'idRoom',
  default: {}
})
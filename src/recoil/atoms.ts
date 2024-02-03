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

export const showBookingForm$ = atom<boolean>({
  key: 'showBookingForm',
  default: false
})

// export const bookingRoom$ = atom({
//   key: 'idRoom',
//   default: {}
// })
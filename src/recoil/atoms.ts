import { atom } from "recoil";
import { IRoom } from "../assets/types";
import dayjs from "dayjs";
import { formatDays } from "../functions/functions";

export const dateRange$ = atom<[number, number]>({
  key: 'dateRange',
  default: formatDays([dayjs(), dayjs().add(1, "day")])
})

export const freeRooms$ = atom<IRoom[]>({
  key: 'freeRooms',
  default: []
})

// export const persons$ = atom({
//   key: 'persons',
//   default: 1
// })

export const bookingRoom$ = atom<IRoom>({
  key: 'bookingRoom',
  default: {}
})

export const showBookingForm$ = atom<boolean>({
  key: 'showBookingForm',
  default: false
})

export const showSuccessMessage$ = atom<boolean>({
  key: 'showSuccessMessage',
  default: false
})
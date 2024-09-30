import { atom } from "recoil";
import { IRoom } from "../assets/types";
import dayjs from "dayjs";
import { formatDays } from "../functions/functions";

export const dateRange$ = atom<[number, number]>({
  key: 'dateRange',
  default: formatDays([dayjs(), dayjs().add(1, "day")])
})

export const unoccupiedRooms$ = atom<IRoom[]>({
  key: 'freeRooms',
  default: []
})

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

export const isShowModal$ = atom<boolean>({
  key: 'isShowModal',
  default: true
})

export const isShowModalFeedback$ = atom({
  key: 'modalFeedback',
  default: false
})

export const showNotFindMessage$ = atom({
  key: 'showSearchMessage',
  default: false
})
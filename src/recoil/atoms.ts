import { atom } from "recoil";
import { IRoom } from "../assets/types";
import dayjs, { Dayjs } from "dayjs";

export const datePickerRange$ = atom<[Dayjs, Dayjs]>({
  key: 'datePickerRange',
  default: [dayjs(), dayjs().add(1, "day")]
})

export const persons$ = atom<number>({
  key: 'persons',
  default: 1
})

export const unoccupiedRooms$ = atom<IRoom[]>({
  key: 'freeRooms',
  default: []
})

export const bookingRoom$ = atom<IRoom | object>({
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
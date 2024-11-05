import { selector } from "recoil";
import { datePickerRange$, bookingRoom$ } from "./atoms"
import { isObjectRoom } from "../functions/isObject";
import { formatDays } from "../functions/functions";

export const stampDateFrom$ = selector({
    key: 'stampDateFrom',
    get: ({ get }) => {
        const datePickerRange = get(datePickerRange$)
        const stampDateFrom = formatDays(datePickerRange)[0]
        return stampDateFrom
    }
})
export const stampDateTo$ = selector({
    key: 'stampDateTo',
    get: ({ get }) => {
        const datePickerRange = get(datePickerRange$)
        const stampDateTo = formatDays(datePickerRange)[1]
        return stampDateTo
    }
})

export const numberOfDays$ = selector({
    key: 'numberOfDays',
    get: ({ get }) => {
        const datePickerRange = get(datePickerRange$)
        const dateRange = formatDays(datePickerRange)

        return Math.ceil((dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24));
    },
});

export const daysRange$ = selector({
    key: 'daysRange',
    get: ({ get }) => {
        const datePickerRange = get(datePickerRange$);
        const dateRange = formatDays(datePickerRange)
        return dateRange.map(v => {
            // const date = new Date(v).toDateString()
            const date = new Date(v).toLocaleDateString()
            return date
        });
    },
});

export const totalAmount$ = selector({
    key: 'totalAmount',
    get: ({ get }) => {
        const numberOfDays = get(numberOfDays$);
        const bookingRoom = get(bookingRoom$);

        if (isObjectRoom(bookingRoom)) {
            return bookingRoom.price * numberOfDays
        }
    },
});
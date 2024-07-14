import { selector } from "recoil";
import { dateRange$, bookingRoom$ } from "./atoms"

export const numberOfDays$ = selector({
    key: 'numberOfDays', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const dateRange = get(dateRange$);

        return Math.ceil((dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24));
    },
});

export const daysRange$ = selector({
    key: 'daysRange', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const dateRange = get(dateRange$);
        // const dr = 
        return dateRange.map(v => {
            const date = new Date(v).toDateString()
            return date
        });
    },
});

export const totalAmount$ = selector({
    key: 'totalAmount',
    get: ({ get }) => {
        const numberOfDays = get(numberOfDays$);
        const bookingRoom = get(bookingRoom$);

        return bookingRoom.price * numberOfDays
    },
});
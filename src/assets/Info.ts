import { IHotelsInCity } from "./types";
import LuxuryRoom11 from "../components/images/rooms/LuxuryRoom11.jpg";
import LuxuryRoom12 from "../components/images/rooms/LuxuryRoom12.jpg";
import LuxuryRoom13 from "../components/images/rooms/LuxuryRoom13.jpg";
import LuxuryRoom14 from "../components/images/rooms/LuxuryRoom14.jpg";
import LuxuryRoom21 from "../components/images/rooms/LuxuryRoom21.jpg";
import LuxuryRoom22 from "../components/images/rooms/LuxuryRoom22.jpg";
import LuxuryRoom23 from "../components/images/rooms/LuxuryRoom23.jpg";
import IndependenceRoom11 from "../components/images/rooms/IndependenceRoom11.jpg";
import IndependenceRoom12 from "../components/images/rooms/IndependenceRoom12.jpg";
import IndependenceRoom13 from "../components/images/rooms/IndependenceRoom13.jpg";
import IndependenceRoom14 from "../components/images/rooms/IndependenceRoom14.jpg";
import Code10Room11 from "../components/images/rooms/Code10Room11.jpg";
import Code10Room12 from "../components/images/rooms/Code10Room12.jpg";
import Code10Room21 from "../components/images/rooms/Code10Room21.jpg";
import Code10Room22 from "../components/images/rooms/Code10Room22.jpg";
import Code10Room31 from "../components/images/rooms/Code10Room31.jpg";
import Code10Room32 from "../components/images/rooms/Code10Room32.jpg";
import Code10Bath from "../components/images/rooms/Code10Bath.jpg";
import IndependenceBathroom from "../components/images/rooms/IndependenceBathroom.jpg";
import LuxuryBath from "../components/images/rooms/LuxuryBath.jpg";
import restaurant from "../components/images/rooms/restaurant.jpg";
import restaurant2 from "../components/images/rooms/restaurant2.jpg";
import pool from "../components/images/rooms/pool.jpg";

export const allHotels: IHotelsInCity[] = [
  {
    city: "Kyiv",
    hotelsInfo: [
      {
        hotelName: "Luxury",
        address: "bul. of Lesia Ukrayinka 7",
        tel: "+380675386767",
        email: "luxury@apart-hotel.com",
        coordinates: { lat: 50.43293422168239, lng: 30.53353608991025 },
        conveniences: [
          "Convenient location",
          "Car parking",
          "Near iconic sights",
          "Green area",
          "Laundry service, luggage storage, coffee snack vending machines",
          "up to 40 people",
        ],
        // rooms: [
        //   {hotel: 'Luxury', id: 1, floor: 1, number: 11, image: LuxuryRoom11, persons: 4, price: 2400, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Luxury', id: 2, floor: 1, number: 12, image: LuxuryRoom12, persons: 3, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Luxury', id: 3, floor: 1, number: 13, image: LuxuryRoom13, persons: 2, price: 2200, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Luxury', id: 4, floor: 1, number: 14, image: LuxuryRoom14, persons: 2, price: 2200, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Luxury', id: 5, floor: 2, number: 21, image: LuxuryRoom21, persons: 2, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Luxury', id: 6, floor: 2, number: 22, image: LuxuryRoom22, persons: 2, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Luxury', id: 7, floor: 2, number: 23, image: LuxuryRoom23, persons: 2, price: 2500, occupied: [{checkIn: 0, checkOut: 0}] },
        // ],
        images: {
          forSlider: [LuxuryRoom12, restaurant2, pool, LuxuryBath],
        },
      },
      {
        hotelName: "Independence",
        address: "Mala Zhytomyrska street, 20D",
        tel: "+380672466777",
        email: "independence@apart-hotel.com",
        coordinates: { lat: 50.4545998769799, lng: 30.520113578857607 },
        conveniences: [
          "Location - city center",
          "Car parking",
          "Comfortable beds and pillows",
          "Everything is very clean, including snow-white linen",
          "In the common area there is a full kitchen, a washing machine, an iron, in general, everything is like at home",
          "up to 40 people",
        ],
        // rooms: [
        //   {hotel: 'Independence', id: 8, floor: 1, number: 11, image: IndependenceRoom11, persons: 3, price: 1900, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Independence', id: 9, floor: 1, number: 12, image: IndependenceRoom12, persons: 3, price: 1900, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Independence', id: 10, floor: 1, number: 13, image: IndependenceRoom13, persons: 2, price: 1600, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Independence', id: 11, floor: 1, number: 14, image: IndependenceRoom14, persons: 2, price: 1700, occupied: [{checkIn: 0, checkOut: 0}] },
        // ],
        images: {
          forSlider: [IndependenceRoom11, restaurant, IndependenceBathroom],
        },
      },
    ],
    description: `In our hotels, all the necessary requirements for living a modern person are very harmoniously combined. The rooms are apartment format, but with hotel service and security. Fully comply with the requirements of the new law on hotels.
    
    All apartments are equipped with a kitchen and everything you need for self-catering, a private bathroom with a shower. They are small but have everything you need. A special highlight is a sleeping place on the mezzanine floor. It will be convenient for you to live with us, both for one day and for a long period. 
    
    In the apartments for the use of guests - bed linen, towels, toiletries, hair dryer, dishes, tea and coffee - free of charge.`,
  },
  {
    city: "Lviv",
    hotelsInfo: [
      {
        hotelName: "Code",
        address: "street of Bohdan Khmelnytskyi, 157",
        tel: "+380682975027",
        email: "code@apart-hotel.com",
        coordinates: { lat: 49.85410453856136, lng: 24.043041132804692 },
        conveniences: [
          "Convenient location",
          "Car parking",
          "Close to malls, grocery stores",
          "Quiet place",
          "Laundry service, luggage storage, coffee snack vending machines",
          "up to 20 people",
        ],
        // rooms: [
        //   {hotel: 'Code', id: 12, floor: 1, number: 11, image: Code10Room11, persons: 4, price: 2400, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 13, floor: 1, number: 12, image: Code10Room12, persons: 2, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 14, floor: 2, number: 21, image: Code10Room21, persons: 3, price: 2100, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 15, floor: 2, number: 22, image: Code10Room22, persons: 2, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 16, floor: 3, number: 31, image: Code10Room31, persons: 2, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 17, floor: 3, number: 32, image: Code10Room32, persons: 2, price: 2000, occupied: [{checkIn: 0, checkOut: 0}] },
        // ],
        images: {
          forSlider: [Code10Room21, Code10Bath, Code10Room31],
        },
      },
    ],
    description: `Mini hotel URoom is located in the heart of Lviv on the street. Peace, in a historic home. It has a separate entrance from the side of the Lviv city center, 7 separate rooms for 2-4 people and a large common area. 
      
      For convenience, we have organized independent and safe access to the hotel. Each guest is given an individual access code to the hotel and to their room. Guests can check in and out of the hotel at a convenient time without wasting time on calls and meetings with the Hotel Administration. 
      
      Each room has luxurious Box Spring beds. Available in twin or double beds, some rooms have a sofa bed or armchair bed. We have made every effort to ensure that you sleep comfortably and that it is clean.`,
  },
];

export const info_en = {
  booking: "Booking",
  wellcome: {
    p: "We are waiting for you to visit, we are ready to receive you at anytime of the day.",
    btn: "CONNECT WITH US",
  },
};

export const optionsForGuests = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

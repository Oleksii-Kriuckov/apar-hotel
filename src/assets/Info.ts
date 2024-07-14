import { IHotelsInCity } from "./types";
import TiSORoom43 from "../../public/rooms/TiSO/room43/room43-view1.png";
import ArenaSummitRoom22V2 from "../../public/rooms/Arena-Summit/room22/room22-view2.png";
import ArenaSummitBathroom24 from "../../public/rooms/Arena-Summit/room24/bathroom24-view1.png";
import ArenaSummitRoom31 from "../../public/rooms/Arena-Summit/room32/room32-view1.png";
import ArenaSummitRoom11 from "../../public/rooms/Arena-Summit/room32/room32-view2.png";
import ArenaSummitRoom13 from "../../public/rooms/Arena-Summit/room32/room32-view3.png";
import ArenaSummitRoom14 from "../../public/rooms/Arena-Summit/room32/bathroom11-view1.png";
import ArenaSummitRoom21 from "../../public/rooms/Arena-Summit/room32/bathroom11-view1.png";
import ArenaSummitRoom32V3 from "../../public/rooms/Arena-Summit/room33/room33-view1.png";
import ArenaSummitRoom23V2 from "../../public/rooms/Arena-Summit/room33/room33-view2.png";
import ArenaSummitRoom23V3 from "../../public/rooms/Arena-Summit/room33/bathroom33-view1.png";
import IndependenceRoom12 from "../components/images/rooms/IndependenceRoom12.jpg";
import IndependenceRoom13 from "../components/images/rooms/IndependenceRoom13.jpg";
import IndependenceRoom14 from "../components/images/rooms/IndependenceRoom14.jpg";
import Code10Room21V1 from "../../public/rooms/Code10/room21/room21-view1.jpg";
import Code10Room21V2 from "../../public/rooms/Code10/room21/room21-view2.png";
import Code10Room21V3 from "../../public/rooms/Code10/room21/room21-bathroom.jpg";
import Code10Room32 from "../../public/rooms/Code10/room32/room32-view1.png";
import Code10Room21 from "../../public/rooms/Code10/room21/room21-view1.jpg";
import Code10Room31 from "../../public/rooms/Code10/room23/room23-view1.png";
import Code10Bath from "../../public/rooms/Code10/room21/room21-bathroom.jpg";
import TisoBath from "../../public/rooms/TiSO/room32/TiSO-room32-bathroom-view1.png";
import TisoRestaurant from "../../public/rooms/restaurant1.jpg";

export const hotels = [
  { city: "Kyiv", hotelName: '' },
  { city: "Kyiv", hotelName: '' },
  { city: "Lviv", hotelName: '' },
]
export const allHotels: IHotelsInCity[] = [
  {
    city: "Kyiv",
    hotelsInfo: [
      {
        hotelName: "Arena-Summit",
        address: "bul. of Lesia Ukrayinka 3",
        tel: "+380996619218",
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
        rooms: [
          {hotel: 'Arena-Summit', id: 1, floor: 1, number: 11, image: [], persons: 4, price: 1400, occupied: [{checkIn: 0, checkOut: 0}] },
          {hotel: 'Arena-Summit', id: 2, floor: 1, number: 12, image: [], persons: 3, price: 1100, occupied: [{checkIn: 0, checkOut: 0}] },
          {hotel: 'Arena-Summit', id: 3, floor: 1, number: 13, image: [], persons: 2, price: 1200, occupied: [{checkIn: 0, checkOut: 0}] },
          {hotel: 'Arena-Summit', id: 4, floor: 1, number: 14, image: [], persons: 2, price: 1200, occupied: [{checkIn: 0, checkOut: 0}] },
          {hotel: 'Arena-Summit', id: 5, floor: 2, number: 21, image: [], persons: 2, price: 1200, occupied: [{checkIn: 0, checkOut: 0}] },
          {hotel: 'Arena-Summit', id: 6, floor: 2, number: 22, image: [], persons: 2, price: 1100, occupied: [{checkIn: 0, checkOut: 0}] },
          {hotel: 'Arena-Summit', id: 7, floor: 2, number: 23, image: [], persons: 2, price: 1300, occupied: [{checkIn: 0, checkOut: 0}] },
        ],
        description: `Well-appointed rooms guarantee a quality stay in this apart-hotel. Room facilities include WiFi (free of charge). Upon request, accommodation in family rooms and non-smoking rooms. 
          The upper floors can be easily reached by elevator or stairs. Thanks to WiFi in public areas, guests can freely surf the Internet. 
          
          Luggage storage, safe, laundry room, room service and fire alarm system are available to guests.
          Those arriving with their own car can use the garage or parking lot. Shuttle bus services are available for a fee.`,
        images: {
          forSlider: [ArenaSummitRoom22V2, ArenaSummitRoom32V3, ArenaSummitBathroom24],
        },
      },
      {
        hotelName: "Tiso",
        address: "Zhylianska, street 59",
        tel: "+380952805220",
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
        description: `Our hotel very harmoniously combines all the necessary requirements for living of a modern person. The rooms are apartment format, but with hotel service and security. All apartments are equipped with a kitchen and everything necessary for self-cooking, and a private bathroom with shower.
          
          Among other amenities, all rooms have WiFi (free of charge). Non-smoking rooms are available. The elevator will take you to the upper floors.
          
          A safe, 24-hour security, room service and laundry are not a complete list of amenities at this hotel. WiFi in public areas.
          Our hotel has its own parking lot. Shuttle bus services are available for a fee.`,
        images: {
          forSlider: [TiSORoom43, TisoRestaurant, TisoBath],
        },
        // rooms: [
        //   {hotel: 'Independence', id: 8, floor: 1, number: 11, image: IndependenceRoom11, persons: 3, price: 1450, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Independence', id: 9, floor: 1, number: 12, image: IndependenceRoom12, persons: 3, price: 1500, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Independence', id: 10, floor: 1, number: 13, image: IndependenceRoom13, persons: 2, price: 1400, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Independence', id: 11, floor: 1, number: 14, image: IndependenceRoom14, persons: 2, price: 1450, occupied: [{checkIn: 0, checkOut: 0}] },
        // ],
      },
    ],
    // description: `In our hotels, all the necessary requirements for living a modern person are very harmoniously combined. The rooms are apartment format, but with hotel service and security. Fully comply with the requirements of the new law on hotels.

    // All apartments are equipped with a kitchen and everything you need for self-catering, a private bathroom with a shower. They are small but have everything you need. A special highlight is a sleeping place on the mezzanine floor. It will be convenient for you to live with us, both for one day and for a long period. 

    // In the apartments for the use of guests - bed linen, towels, toiletries, hair dryer, dishes, tea and coffee - free of charge.`,
  },
  {
    city: "Lviv",
    hotelsInfo: [
      {
        hotelName: "Code-10",
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
        //   {hotel: 'Code', id: 12, floor: 1, number: 11, image: Code10Room11, persons: 4, price: 1400, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 13, floor: 1, number: 12, image: Code10Room12, persons: 2, price: 1400, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 14, floor: 2, number: 21, image: Code10Room21, persons: 3, price: 1450, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 15, floor: 2, number: 22, image: Code10Room22, persons: 2, price: 1450, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 16, floor: 3, number: 31, image: Code10Room31, persons: 2, price: 1450, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Code', id: 17, floor: 3, number: 32, image: Code10Room32, persons: 2, price: 1450, occupied: [{checkIn: 0, checkOut: 0}] },
        // ],
        description: `Room facilities include WiFi access (free of charge). WiFi in public areas allows guests to keep abreast of events. Family rooms and non-smoking rooms are available upon request.
        
        The various facilities at this apartment hotel - such as luggage storage, transfer and meeting facilities - will make your stay especially comfortable. You can park your car in the hotel's own car park. 
        
        Walking through the hotel park will improve the mood. The staff of the tourist office will be happy to help you with the organization of tours and excursions.`,
        images: {
          forSlider: [Code10Room21, Code10Room31, Code10Bath],
        },
      },
    ],
    // description: `Mini hotel URoom is located in the heart of Lviv on the street. Peace, in a historic home. It has a separate entrance from the side of the Lviv city center, 7 separate rooms for 2-4 people and a large common area. 

    //   For convenience, we have organized independent and safe access to the hotel. Each guest is given an individual access code to the hotel and to their room. Guests can check in and out of the hotel at a convenient time without wasting time on calls and meetings with the Hotel Administration. 

    //   Each room has luxurious Box Spring beds. Available in twin or double beds, some rooms have a sofa bed or armchair bed. We have made every effort to ensure that you sleep comfortably and that it is clean.`,
  },
];

export const info_en = {
  booking: "Booking",
  learnMore: 'Learn more',
  wellcome: {
    p: "We are waiting for you to visit, we are ready to receive you at anytime of the day.",
    btn: "CONNECT WITH US",
  },
};

export const info_ua = {
  booking: "Забронювати",
  wellcome: {
    p: "Чекаємо на Вас в гості, готові Вас прийняти у будь-який час доби..",
    btn: "Зв'язатись з нами",
  },
};

export const optionsForGuests = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

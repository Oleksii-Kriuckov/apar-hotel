import Hotel from "../pages/Hotel";
import { IHotels } from "./types";
import roomImg from "../components/images/rooms/pexels-pixabay-271619.jpg";
import roomImg1 from "../components/images/rooms/marquis-3-min.jpg";
import roomImg2 from "../components/images/rooms/pexels-vecislavas-popa-1743231.jpg";
import roomImg3 from "../components/images/rooms/pexels-donald-tong-189293.jpg";
import roomImg4 from "../components/images/rooms/pexels-engin-akyurt-1579253.jpg";
import roomImg5 from "../components/images/rooms/pexels-hakim-santoso-3634741.jpg";
import roomImg6 from "../components/images/rooms/pexels-jonathan-borba-3144580.jpg";
import roomImg7 from "../components/images/rooms/pexels-pixabay-271614.jpg";
import roomImg8 from "../components/images/rooms/pexels-pixabay-164595.jpg";
import roomImg9 from "../components/images/rooms/pexels-pixabay-237371.jpg";
import roomImg10 from "../components/images/rooms/pexels-pixabay-271624.jpg";
import roomImg11 from "../components/images/rooms/pexels-pixabay-262048.jpg";
import roomImg12 from "../components/images/rooms/room-2-beds.jpg";
import bathroom from "../components/images/rooms/bathroom.jpg";
import bathroom2 from "../components/images/rooms/bathroom2.jpg";
import bathroom3 from "../components/images/rooms/bathroom3.jpg";
import restaurant from "../components/images/rooms/restaurant.jpg";
import restaurant2 from "../components/images/rooms/restaurant2.jpg";
import pool from "../components/images/rooms/pool.jpg";

export const hotels: IHotels[] = [
  {
    city: "Kyiv",
    hotelsInfo: [
      {
        hotel: "Khreschatyk",
        address: "St. Khreschatyk 14",
        tel: "+380674636054",
        coordinates: { lat: 50.45169140483114, lng: 30.52523556606943 },
        conveniences: [
          "Location - city center",
          "Car parking",
          "Comfortable beds and pillows",
          "Everything is very clean, including snow-white linen",
          "In the common area there is a full kitchen, a washing machine, an iron, in general, everything is like at home",
          "up to 40 people",
        ],
        images: {
          rooms: [roomImg, roomImg1, roomImg2, roomImg3, roomImg4],
          forSlider: [roomImg1, restaurant, bathroom2],
        },
      },
      {
        hotel: "Luxury",
        address: "bul. of Lesia Ukrayinka 7",
        tel: "+380675386767",
        coordinates: { lat: 50.43293422168239, lng: 30.53353608991025 },
        conveniences: [
          "Convenient location",
          "Car parking",
          "Near iconic sights",
          "Green area",
          "Laundry service, luggage storage, coffee snack vending machines",
          "up to 40 people",
        ],
        images: {
          rooms: [roomImg5, roomImg6, roomImg7, roomImg8],
          forSlider: [roomImg5, restaurant2, pool, bathroom3],
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
        hotel: "Code",
        address: "street of Bohdan Khmelnytskyi, 157",
        tel: "+380682975027",
        coordinates: { lat: 49.85410453856136, lng: 24.043041132804692 },
        conveniences: [
          "Convenient location",
          "Car parking",
          "Close to malls, grocery stores",
          "Quiet place",
          "Laundry service, luggage storage, coffee snack vending machines",
          "up to 20 people",
        ],
        images: {
          rooms: [roomImg9, roomImg10, roomImg11],
          forSlider: [roomImg10, bathroom, roomImg12],
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

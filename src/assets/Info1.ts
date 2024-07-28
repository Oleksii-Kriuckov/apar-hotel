import { IHotelsInCity } from "./types";
import TiSORoom43 from "../../public/rooms/TiSO/room43/room43-view1.png";
import ArenaSummitRoom22V2 from "../../public/rooms/Arena-Summit/room22/room22-view2.png";
import ArenaSummitBathroom24 from "../../public/rooms/Arena-Summit/room24/bathroom24-view1.png";

import ArenaSummitRoom32V3 from "../../public/rooms/Arena-Summit/room33/room33-view1.png";

import Code10Room21 from "../../public/rooms/Code10/room21/room21-view1.jpg";
import Code10Room31 from "../../public/rooms/Code10/room23/room23-view1.png";
import Code10Bath from "../../public/rooms/Code10/room21/room21-bathroom.jpg";
import TisoBath from "../../public/rooms/TiSO/room32/room32-v5.png";
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
        email: "arena-summit@apart-hotel.com",
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
        //   {hotel: 'Arena-Summit', id: 1, floor: 1, number: 11, image: [], persons: 4, price: 1400, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Arena-Summit', id: 2, floor: 1, number: 12, image: [], persons: 3, price: 1100, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Arena-Summit', id: 3, floor: 1, number: 13, image: [], persons: 2, price: 1200, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Arena-Summit', id: 4, floor: 1, number: 14, image: [], persons: 2, price: 1200, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Arena-Summit', id: 5, floor: 2, number: 21, image: [], persons: 2, price: 1200, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Arena-Summit', id: 6, floor: 2, number: 22, image: [], persons: 2, price: 1100, occupied: [{checkIn: 0, checkOut: 0}] },
        //   {hotel: 'Arena-Summit', id: 7, floor: 2, number: 23, image: [], persons: 2, price: 1300, occupied: [{checkIn: 0, checkOut: 0}] },
        // ],
        description: `Arena Summit Apart Hotel is suitable for both families and business trips. Upon request, accommodation in family rooms and non-smoking rooms. The location in the city center. 

          The hotel is very comfortable and cozy, the interior is made in a modern style. Absolutely all furniture was designed with maximum convenience for guests. All rooms equipped with mini-kitchenettes for a comfortable long stay. 24/7 reception and excellent service, including free Wi-Fi (in rooms and public areas), luggage storage, safe, laundry room, room service and fire alarm system are created for a comfortable stay of our guests.
          
          The upper floors can be easily reached by elevator or stairs. Those arriving with their own car can use the garage or parking lot. Shuttle bus services are available for a fee.`,
        images: {
          forSlider: [ArenaSummitRoom22V2, ArenaSummitRoom32V3, ArenaSummitBathroom24],
        },
      },
      {
        hotelName: "Tiso",
        address: "Zhylianska, street 59",
        tel: "+380952805220",
        email: "tiso@apart-hotel.com",
        coordinates: { lat: 50.4545998769799, lng: 30.520113578857607 },
        conveniences: [
          "Location - city center",
          "Car parking",
          "Comfortable beds and pillows",
          "Everything is very clean, including snow-white linen",
          "In the common area there is a full kitchen, a washing machine, an iron, in general, everything is like at home",
          "up to 40 people",
        ],
        description: `Our hotel very harmoniously combines all the necessary requirements for living of a modern person. The rooms are apartment format, but with hotel service and security. 
        
        Each room at Tiso ApartHotel includes bright décor,an air conditioner, a minibar, a flat-screen TV, and bathrooms come with a hairdryer. Among other amenities, all rooms have WiFi (free of charge). Non-smoking rooms are available. The elevator will take you to the upper floors.
        A safe, 24-hour security, room service and laundry are not a complete list of amenities at this hotel. WiFi in public areas.

        Restaurants can be found on the ground and 1st floors of the residential estate and several dining options are also available within a 5-minute walk of the property.

        Our hotel has its own parking lot. Shuttle bus services to Boryspil Airport are available for a fee.`,
        images: {
          forSlider: [TiSORoom43, TisoBath, TisoRestaurant],
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
        email: "code-10@apart-hotel.com",
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
        description: `Apart Hotel Code 10 located near the city center.  Free Wifi is featured throughout the property. Family rooms and non-smoking rooms are available upon request. Some rooms are allergy-free and soundproof, and certain ones have a terrace.
        
        All rooms have a desk, a flat-screen TV, an air conditioner, a private bathroom and towels. The various facilities at this apartment hotel - such as luggage storage, concierge service, transfer and meeting facilities - will make your stay especially comfortable.

        Walking through the hotel park will improve the mood. You can park your car in the hotel's own car park. 
        
        The staff of the tourist office will be happy to help you with the organization of tours and excursions.`,
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

`Ця кімната розрахована на 2х людей, розташована на 2му поверсі. Має власну кухню з мікрохвильовою пічкою та чайником. 
Міні холодильник вбудований в кухонні меблі. Також є кондиціонер та сматр телевізор. 
Ванна кімната в номері, має ванну, унітаз і умивальник. Сама ванна з джакузі.`

`Кімната на 2х людей, розташована на 2му поверсі. Має двоспальне ліжко, шафу, дзеркало, стіл та стільці. 
Також є кондиціонер та сматр телевізор. У ванній кімнаті є душова кабінка, унітаз та раковина. 
Їжу та напої з ресторану можна замовити в номер.`


`This room is on the fourth floor and designed for 2 people. It has its own kitchen, a microwave, a kettle.
Mini refrigerator built into the kitchen furniture. 
There is also a wardrobe, a double bed with bedside tables, air conditioning and smatr TV.
Bathroom has a bathtub with jacuzzi and shower`

`This room is on the second floor and designed for 3 or 4 people. 
It has own kitchen with microwave and electric kettle, a double bed with bedside tables, a wardrobe, a table and chairs. 
There is also air conditioning and smart TV. The bathroom has a bathtub with shower, a towel dryer, toilet and sink. 
Food and drinks from the restaurant can be ordered to the room.`

`The room is designed for 2 people and located on the second floor. This two-room suite consists of a bedroom and a dining room with kitchen.
There is a separate room with a wardrobe and armchairs. 
The kitchen has all necessary items for for comfortable cooking and eating, including refrigerator. There are also a sofa and a flat TV.
Bathroom has a sink, a hair dryer, a toilet, a bathtub with shower.
 
Food and drinks from the restaurant can be ordered to the room.`

`This room is designed for 3 people, located on the third floor. The armchair folds out, thereby creating a third sleeping place.
Room has its own kitchen with microwave and electric kettle. It also has an air conditioner, a table with chairs, a flat TV
There are bathtub, sink and toilet in bathroom.`

`This room is two-room suite and it is designed for 2 people. Upon entering the room you will find a hallway where there is a large wardrobe. 
Directly is the entrance to the bathroom, to the right is the bedroom, to the left is the dining room with kitchen.
The a bedroom has a double bed, a mirror and a desk. In the dining room there are an air conditioner, a flat TV and armchair.
Bathroom has a bathtub with shower and jacuzzi, toilet and sink.`

`This is three-room suit, designed for three people. 
There are bedroom with double bed, living room with sofa, smart TV, table and chairs, hallway with wardrobe and armchairs. 
This room does not have a kitchen, so food and drinks can be ordered in the room.
Bathroom has a sink, a towel dryer, a hair dryer, a toilet, a bathtub with shower`


`Room for 2 people, located on the fourth floor. 
It has own kitchen, a microwave, a kettle, an air conditioner, a flat TV, a double bed with bedside tables, a table and chairs.
Bathroom is standard one (bath, sink, toilet)`

`This room is on the fourth floor. 
It has own kitchen, a microwave, a kettle, an air conditioner, a flat TV, a wardrobe, a double bed with bedside tables.
Bathroom has a sink, a towel dryer, a toilet, a bathtub with shower and jacuzzi`

`A company of three people can stay in this two-room suite. 
Two people can sleep in the bedroom, and the third in the living room on the sofa. 
The living room also has a kitchen, table, chairs and a smart TV. All rooms have air conditioning.
Bathroom has a sink, a towel dryer, a toilet, a shower`

`By default, this room is designed for 2 people, but for an additional fee you can put a sofa that can accommodate another person. 
There is a kitchen with everything you need, and there is a large closet in the hallway. 
Also room has air conditioning and smart TV. Standard bathroom in the room.`
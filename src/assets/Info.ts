import { IHotelsInCity } from "./types";
import ArenaSummitRoom22V2 from "../../public/rooms/Arena-Summit/room22/room22-view2.png";
import ArenaSummitBathroom24 from "../../public/rooms/Arena-Summit/room24/bathroom24-view1.png";
import ArenaSummitRoom32V3 from "../../public/rooms/Arena-Summit/room33/room33-view1.png";

import Code10Room21 from "../../public/rooms/Code10/room21/room21-view1.jpg";
import Code10Room31 from "../../public/rooms/Code10/room23/room23-view1.png";
import Code10Bath from "../../public/rooms/Code10/room21/room21-bathroom.jpg";

import TiSORoom43 from "../../public/rooms/TiSO/room43/room43-view1.png";
import TisoBath from "../../public/rooms/TiSO/room32/room32-v5.png";
import TisoRestaurant from "../../public/rooms/restaurant1.jpg";

export const hotels = [
  { city: "Kyiv", name: 'Arena-Summit' },
  { city: "Kyiv", name: 'Tiso' },
  { city: "Lviv", name: 'Code-10' },
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
        description: `Arena Summit Apart Hotel is suitable for both families and business trips. 
        Upon request, accommodation in family rooms and non-smoking rooms. The location in the city center. 

          The hotel is very comfortable and cozy, the interior is made in a modern style. 
          Absolutely all furniture was designed with maximum convenience for guests. All rooms equipped with mini-kitchenettes for a comfortable long stay. 
          24/7 reception and excellent service, including free Wi-Fi (in rooms and public areas), luggage storage, safe, laundry room, room service and fire alarm system are created for a comfortable stay of our guests.
          
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
        
        Each room at Tiso ApartHotel includes bright décor, an air conditioner, a minibar, a flat-screen TV, and bathrooms come with a hairdryer. Among other amenities, all rooms have WiFi (free of charge). Non-smoking rooms are available. The elevator will take you to the upper floors. A safe, 24-hour security, room service and laundry are not a complete list of amenities at this hotel. WiFi in public areas.

        Restaurants can be found on the ground and 1st floors of the residential estate and several dining options are also available within a 5-minute walk of the property.

        Our hotel has its own parking lot. Shuttle bus services to Boryspil Airport are available for a fee.`,
        images: {
          forSlider: [TiSORoom43, TisoBath, TisoRestaurant],
        },
      },
    ],
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
        description: `Apart Hotel Code 10 located near the city center.  Free Wifi is featured throughout the property. 
        Family rooms and non-smoking rooms are available upon request. 
        Some rooms are allergy-free and soundproof, and certain ones have a terrace.
        
        All rooms have a desk, a flat-screen TV, an air conditioner, a private bathroom and towels. 
        The various facilities at this apartment hotel - such as luggage storage, concierge service, transfer and meeting facilities - will make your stay especially comfortable.

        Walking through the hotel park will improve the mood. You can park your car in the hotel's own car park. 
        
        The staff of the tourist office will be happy to help you with the organization of tours and excursions.`,
        images: {
          forSlider: [Code10Room21, Code10Room31, Code10Bath],
        },
      },
    ],
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
/*
`Ця кімната розрахована на 2х людей, розташована на 2му поверсі. Має власну кухню з мікрохвильовою пічкою та чайником. 
Міні холодильник вбудований в кухонні меблі. Також є кондиціонер та сматр телевізор. 
Ванна кімната в номері, має ванну, унітаз і умивальник. Сама ванна з джакузі.`

`Кімната на 2х людей, розташована на 2му поверсі. Має двоспальне ліжко, шафу, дзеркало, стіл та стільці. 
Також є кондиціонер та сматр телевізор. У ванній кімнаті є душова кабінка, унітаз та раковина. 
Їжу та напої з ресторану можна замовити в номер.`

`This double room is located on the fourth floor, which can be reached by stairs or elevator. 
It is made in the original luxury style, has a large hallway with a closet and a hanger. There is also air conditioning, smart TV. 
The bathroom has a bathtub with shower and jacuzzi, a towel dryer, a hair dryer, a toilet and a sink.
An intranet landline telephone is provided for ordering food or other services.`


`Це двомісний номер на червертому поверсі під дахом. Щоб дістатись до нього, є ліфт та сходи. У номері є балкон. 
Також є їдальня з кухнею, телевізором та канапою. В номері є кондиціонер та ванна кімната з душем та туалетом.`

`Ця кімната розрахована на 2х людей. Вона має двоспальне ліжко з тумбочками, шафу, крісла, комод, кондиціонер та телевізор.
У ванній кімнаті є ванна з душем, фен,  унітаз та раковина. Обслуговування номерів включає замовлення їжі`

`Two people can stay in this room. There are a double bed with bedside tables, a wardrobe, armchairs, a commode, air conditioning and a smart TV.
Bathroom has a bathtub with jacuzzi and shower, a toilet, a sink, a towel dryer and a hair dryer.
Food and drinks can be ordered to the room or you can use our restaurant.`

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
Bathroom has a sink, a hair dryer, a toilet, a bathtub with shower.`

`The room is located on the fourth floor and is designed for two people. 
There are a double bed with bedside tables, a smart TV, air conditioning, a wardrobe, a table and chairs. 
The bathroom has a bath with jacuzzi and shower, sink and toilet.
This room does not have a kitchen, so food and drinks can be ordered to the room.`  // 44

`This room is two-room suite and it is designed for 2 people. Upon entering the room you will find a hallway where there is a large wardrobe. 
Directly is the entrance to the bathroom, to the right is the bedroom, to the left is the dining room with kitchen.
The bedroom has a double bed, a mirror and a desk. In the dining room there are an air conditioner, a flat TV and armchair.
Bathroom has a bathtub with shower and jacuzzi, toilet and sink.`

`This two-bedroom luxury room is designed for three or four people. 
There is a double bed, leather sofa and armchairs, wardrobe in hallway, ottoman, bar, smart TV, air conditioning. 
The bathroom has a jacuzzi, shower, hairdryer, towel dryer, sink, toilet.
For your attention, a large selection of food and drinks that can be ordered in the room or visit our restaurant`

`This is three-room suit, designed for three people. 
There are bedroom with double bed, living room with sofa, smart TV, table and chairs, hallway with wardrobe and armchairs. 
This room does not have a kitchen, so food and drinks can be ordered in the room.
Bathroom has a sink, a towel dryer, a hair dryer, a toilet, a bathtub with shower`

`This room is designed for 2 people, located on the third floor. 
It has a double bed with bedside tables, a wardrobe, armchairs, a commode, air conditioning and a smart TV. 
The bathroom has a bath with shower, hairdryer, toilet and sink. Room service includes ordering food.`

`A family of three people (2 adults and child) can stay in this room. 
There are a double bed with bedside tables, a couch, an armchair, a smart TV, air conditioning.
Things can be left in the wardrobe in hallway or in the commode. 
The bathroom has a bath with shower, a hairdryer, a towel dryer, sink and toilet. 
Food can be ordered in the room or use our restaurant.`

`A company of three people can stay in this two-room suite. 
Two people can sleep in the bedroom, and the third one can sleep in the living room on the sofa. 
The living room also has a kitchen, table, chairs and a smart TV. All rooms have air conditioning.
Bathroom has a sink, a towel dryer, a toilet, a shower`

`By default, this room is designed for 2 people, but for an additional fee you can put a sofa that can accommodate another person. 
There is a kitchen with everything you need, and there is a large closet in the hallway. 
Also room has air conditioning and smart TV. Standard bathroom in the room.`

`By default, this room is designed for 2 people, but for an additional fee you can put a sofa that can accommodate third person.
There is also a wardrobe, a double bed with bedside tables, armchairs, a mirror, a hanger, air conditioning and smatr TV.
The bathroom has a bath with shower, hairdryer, toilet and sink.`
*/
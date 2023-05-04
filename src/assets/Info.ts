import { IHotels } from "./types";

export const hotels: IHotels[] = [
  {
    city: "Kyiv",
    hotelsInfo: [
      {
        address: "St. Khreschatyk 14",
        coordinates: {lat: 50.45169140483114, lng: 30.52523556606943},
        conveniences: [
          "Location - city center",
          "Car parking",
          "Comfortable beds and pillows",
          "Everything is very clean, including snow-white linen",
          "In the common area there is a full kitchen, a washing machine, an iron, in general, everything is like at home",
          "up to 40 people",
        ],
      },
      {
        address: "bul. of Lesia Ukrayinka 7",
        coordinates: {lat: 50.43293422168239, lng: 30.53353608991025},
        conveniences: [
          "Convenient location",
          "Car parking",
          "Near iconic sights",
          "Green area",
          "Laundry service, luggage storage, coffee snack vending machines",
          "up to 40 people",
        ],
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
        address: "street of Bohdan Khmelnytskyi, 157",
        coordinates: {lat: 49.85410453856136, lng: 24.043041132804692},
        conveniences: [
          "Convenient location",
          "Car parking",
          "Close to malls, grocery stores",
          "Quiet place",
          "Laundry service, luggage storage, coffee snack vending machines",
          "up to 20 people",
        ],
      },
    ],
    description: `Mini hotel URoom is located in the heart of Lviv on the street. Peace, in a historic home. It has a separate entrance from the side of the Lviv city center, 7 separate rooms for 2-4 people and a large common area. 
      
      For convenience, we have organized independent and safe access to the hotel. Each guest is given an individual access code to the hotel and to their room. Guests can check in and out of the hotel at a convenient time without wasting time on calls and meetings with the Hotel Administration. 
      
      Each room has luxurious Box Spring beds. Available in twin or double beds, some rooms have a sofa bed or armchair bed. We have made every effort to ensure that you sleep comfortably and that it is clean.`,
  },
];

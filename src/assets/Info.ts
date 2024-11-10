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
  { city: "Kyiv", city_ua: "Київ", name: 'Arena-Summit', tel: "+380996619218" },
  { city: "Kyiv", city_ua: "Київ", name: 'Tiso', tel: "+380952805220" },
  { city: "Lviv", city_ua: "Львів", name: 'Code-10', tel: "+380682975027" },
]

export const allHotels: IHotelsInCity[] = [
  {
    city: "Kyiv",
    city_ua: 'Київ',
    hotelsInfo: [
      {
        hotelName: "Arena-Summit",
        // address: "bul. of Lesia Ukrayinka 3",
        address: "бул. Лесі Українки, 3",
        tel: "+380996619218",
        email: "arena-summit@apart-hotel.com",
        coordinates: { lat: 50.43293422168239, lng: 30.53353608991025 },
        conveniences: [
          "Зручне розташування",
          "Парковка авто",
          "Комфортні ліжка та подушки з білосніжною білизною",
          "Зелена зона",
          "Пральня, кімната зберігання багажу, автомати з продажу кави та снеків",
          "Можемо прийняти до 26 осіб",
        ],
        // description: `Arena Summit Apart Hotel is suitable for both families and business trips. 
        // Upon request, accommodation in family rooms and non-smoking rooms. The location in the city center. 

        //   The hotel is very comfortable and cozy, the interior is made in a modern style. 
        //   Absolutely all furniture was designed with maximum convenience for guests. All rooms equipped with mini-kitchenettes for a comfortable long stay. 
        //   24/7 reception and excellent service, including free Wi-Fi (in rooms and public areas), luggage storage, safe, laundry room, room service and fire alarm system are created for a comfortable stay of our guests.
          
        //   The upper floors can be easily reached by elevator or stairs. Those arriving with their own car can use the garage or parking lot. Shuttle bus services are available for a fee.`,
        description: `Готель Arena Summit підійде як для сімейного відпочинку, так і для бізнес подорожей. Розташований в центі міста.
        За запитом розміщення в сімейних номерах та номерах для некурців.
        
        Готель дуже комфортний та затишний, інтер'єр зроблений в сучасному стилі.
        Абсолютно всі меблі розроблені з максимальною зручністю для гостей. Більшість кімнат оснащені власними міні-кухнями для довгого комфортного перебування.
        Цілодобовий ресепшн та бездоганий сервіс, включаючи безкоштовний Wi-Fi (в кімнатах та публічних місцях), кімната зберігання багажу, сейф, пральня, обслуговування номерів та протипожежна сигналізація зроблять комфортним перебування для наших гостей.
        
        На верхні поверхи можна легко піднятися на ліфті або сходами. Ті, хто приїжджає на власному автомобілі, можуть скористатися гаражем або автостоянкою. За окрему плату надаються послуги трансферу до аеропорту.`,
        images: {
          forSlider: [ArenaSummitRoom22V2, ArenaSummitRoom32V3, ArenaSummitBathroom24],
        },
      },
      {
        hotelName: "Tiso",
        address: "вул. Жилянська, 59",
        // address: "Zhylianska, street 59",
        tel: "+380952805220",
        email: "tiso@apart-hotel.com",
        coordinates: { lat: 50.4545998769799, lng: 30.520113578857607 },
        conveniences: [
          "Розташування - центр міста",
          "Підземна парковка",
          "Поруч знакові пам'ятки",
          "Затишні номери",
          "2 ресторани та замовлення їжі в номер",
          "В зоні загального користування повна кухня, пральна машина, праска, загалом все як вдома",
          "Готові прийняти до 24 осіб",
        ],
        // description: `Our hotel very harmoniously combines all the necessary requirements for living of a modern person. The rooms are apartment format, but with hotel service and security. 
        
        // Each room at Tiso ApartHotel includes bright décor, an air conditioner, a minibar, a flat-screen TV, and bathrooms come with a hairdryer. Among other amenities, all rooms have WiFi (free of charge). Non-smoking rooms are available. The elevator will take you to the upper floors. A safe, 24-hour security, room service and laundry are not a complete list of amenities at this hotel. WiFi in public areas.

        // Restaurants can be found on the ground and 1st floors of the residential estate and several dining options are also available within a 5-minute walk of the property.

        // Our hotel has its own parking lot. Shuttle bus services to Boryspil Airport are available for a fee.`,
        description: `Наш готель дуже гармонійно поєднує в собі всі необхідні вимоги для проживання сучасної людини. Номери квартирного формату, але з готельним сервісом та охороною.
        
        Усі номери апарт-готелю Tiso оформлені в яскравих тонах і оснащені кондиціонером, міні-баром, телевізором із плоским екраном і ванною кімнатою з феном. Серед інших зручностей у всіх номерах є Wi-Fi (безкоштовно). Є номери для некурців. На верхні поверхи вас підніме ліфт. Сейф, цілодобова охорона, обслуговування номерів і пральня - далеко не повний перелік зручностей цього готелю. WiFi в громадських місцях.
        
        На першому та другому поверхах готельного комплексу працюють ресторани, а в межах 5 хвилин ходьби від закладу працюють кілька закладів харчування.
        Наш готель має власну автостоянку. Трансфер до аеропорту Бориспіль надається за додаткову плату.`,
        images: {
          forSlider: [TiSORoom43, TisoBath, TisoRestaurant],
        },
      },
    ],
  },
  {
    city: "Lviv",
    city_ua: "Львів",
    hotelsInfo: [
      {
        hotelName: "Code-10",
        address: "вул. Богдана Хмельницького, 157",
        // address: "street of Bohdan Khmelnytskyi, 157",
        tel: "+380682975027",
        email: "code-10@apart-hotel.com",
        coordinates: { lat: 49.85410453856136, lng: 24.043041132804692 },
        conveniences: [
          "Зручне розташування",
          "Парковка авто",
          "Близько торгрвельні центри, продуктові магазини",
          "Затишне, тихе місце",
          "Пральня, кімната зберігання багажу, автомати з продажу кави та снеків",
          "Можемо прийняти до 30 людей",
        ],
        // description: `Apart Hotel Code 10 located near the city center. Free Wifi is featured throughout the property. 
        // Family rooms and non-smoking rooms are available upon request. 
        // Some rooms are allergy-free and soundproof, and certain ones have a terrace.
        
        // All rooms have a desk, a flat-screen TV, an air conditioner, a private bathroom and towels. 
        // The various facilities at this apartment hotel - such as luggage storage, concierge service, transfer and meeting facilities - will make your stay especially comfortable.

        // Walking through the hotel park will improve the mood. You can park your car in the hotel's own car park. 
        
        // The staff of the tourist office will be happy to help you with the organization of tours and excursions.`,
        description: `Готель Code 10 розташований біля центру міста. На всій території закладу надається безкоштовний Wi-Fi.
        За вимогою надаються сімейні номери та номери для некурців. Деякі номери гіпоалергенні та звуконепроникні, а деякі мають терасу або балкон.
        
        У всіх номерах є стіл та стільці, смарт телевізор, кондиціонер, окрема ванна кімната з феном та рушниками.
        Різноманітні зручності в цьому апарт-готелі, такі як камера зберігання багажу, послуги консьєржа, трансфер і приміщення для проведення засідань, зроблять ваше перебування особливо комфортним.
        
        Прогулянка парком готелю покращить настрій. Ви можете залишити свій автомобіль на власній автостоянці готелю.
        Працівники туристичного бюро з радістю допоможуть Вам з організацією турів та екскурсій.`,
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
  mainWarningMessage: `This site is presented as a demonstration of the author's own work. 
  You CANNOT actually book hotel rooms through this site. 
  Instead, the real business logic of booking is implemented here.
  Any information presented on this site may be inaccurate. `,
  notFindMessage: 'No rooms were found for your request'
};

export const info_ua = {
  booking: "Забронювати",
  wellcome: {
    p: "Чекаємо на Вас у гості, готові Вас прийняти у будь-який час доби",
    btn: "Зв'язатись з нами",
  },
  mainWarningMessage: `Цей сайт представлений як демонстрація власної роботи автора. 
  НЕ МОЖНА реально забронювати номери в готелях через цей сайт. 
  Натомість тут реалізована реальна бізнес-логіка бронювання.
  Будь-яка інформація, представлена ​​на цьому сайті може бути недостовірною.`,
  notFindMessage: 'За вашим запитом не було знайдено жодної кімнати'
};

export const optionsForGuests = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

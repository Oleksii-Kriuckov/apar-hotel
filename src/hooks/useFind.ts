import {IHotels} from '../assets/types'
import {hotels} from '../assets/Info'

function useFind(city: string) {
   const findCity = hotels.find(el => el.city === city);
    findCity
}
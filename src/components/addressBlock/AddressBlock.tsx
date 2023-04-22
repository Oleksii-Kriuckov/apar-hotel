import { PropsWithChildren } from "react";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
import map from '../images/map1.png'
import "./style/style.css";
import './style/adaptive.css'

type AddressBlockProps = PropsWithChildren<{children: string, convs: string[]}>

export const AddressBlock = (props: AddressBlockProps) => {
  return (
    <section className="addresses">
      <img src={map} alt="map" style={{width: '100%'}}/>
      <p>URoom ApartHotel by the address</p>
      <h3>{props.children}</h3>

      <ul>
        {props.convs.map(element => (
          <li>{element}</li>
        ))}
      </ul>
      <div className="buttons">
        <YellowButton color='black'>ЗАБРОНИРОВАТЬ</YellowButton>
        <TransparentButton color='blackBorder'>ПодРОБНЕЕ</TransparentButton>
      </div>
    </section>
  )
}
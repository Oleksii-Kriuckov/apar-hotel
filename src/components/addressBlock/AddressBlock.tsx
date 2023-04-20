import "./style/style.css";
import './style/adaptive.css'
import { PropsWithChildren } from "react";

type AddressBlockProps = PropsWithChildren<{children: string, convs: string[]}>

export const AddressBlock = (props: AddressBlockProps) => {
  return (
    <section className="addresses">
      {/* <img src="./images/map1.png" alt="map"> */}
      <p>URoom ApartHotel by the address</p>
      <h3>{props.children}</h3>

      <ul>
        {props.convs.map(element => (
          <li>{element}</li>
        ))}
      </ul>
      <div className="buttons">
        <button className="booking">BOOK NOW</button>
        <button>LEARN MORE</button>
      </div>
    </section>
  )
}
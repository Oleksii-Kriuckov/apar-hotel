import { PropsWithChildren } from "react";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
// import map from '../images/map1.png'
import { MyMapContainer } from "../../map/MyMapContainer";
import { MapChild } from "../../map/MapChild";
import { IHotelInfo } from "../../assets/types";
import "./style/style.css";
import "./style/adaptive.css";

type AddressBlockProps = {
  hotelInfo: IHotelInfo;
};

export const AddressBlock = ({hotelInfo}: AddressBlockProps) => {
  return (
    <section className="addresses">
      <MyMapContainer
        hotelLocation={hotelInfo.coordinates}
        zoom={16}
        >
        <MapChild location={hotelInfo.coordinates}/>
      </MyMapContainer>
      <p>URoom ApartHotel by the address</p>
      <h3>{hotelInfo.address}</h3>

      <ul>
        {hotelInfo.conveniences.map((element, ind) => (
          <li key={ind}>{element}</li>
        ))}
      </ul>
      <div className="buttons">
        <YellowButton width={175} color="black">
          BOOK NOW
        </YellowButton>
        <TransparentButton color="blackBorder">LEARN MORE</TransparentButton>
      </div>
    </section>
  );
};

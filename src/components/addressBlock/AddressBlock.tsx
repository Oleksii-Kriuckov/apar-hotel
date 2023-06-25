import { PropsWithChildren } from "react";
import TransparentButton from "../UI/Buttons/TransparentButton";
import YellowButton from "../UI/Buttons/YellowButton";
import { useNavigate, useParams } from "react-router-dom";
import { MyMapContainer } from "../../map/MyMapContainer";
import { MapChild } from "../../map/MapChild";
import { IHotelInfo } from "../../assets/types";
import "./style/style.css";
import "./style/adaptive.css";

type AddressBlockProps = {
  hotelInfo: IHotelInfo;
};

export const AddressBlock = ({ hotelInfo }: AddressBlockProps) => {
  let navigate = useNavigate();
  const { city } = useParams();

  return (
    <section className="address_block d-flex flex-column flex-md-row-reverse gap-md-4">
      <MyMapContainer hotelLocation={hotelInfo.coordinates} zoom={16}>
        <MapChild location={hotelInfo.coordinates} />
      </MyMapContainer>
      <div>
        <p>URoom ApartHotel by the address</p>
        <h3>{hotelInfo.address}</h3>

        <ul>
          {hotelInfo.conveniences.map((element, ind) => (
            <li key={ind}>{element}</li>
          ))}
        </ul>
        <div className="buttons">
          <YellowButton
            // width={175}
            color="black"
            onClick={() =>
              navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}`)
            }
          >
            BOOK NOW
          </YellowButton>
          <TransparentButton onClick={() => {}} color="blackBorder">
            <a href="#about_hotel">LEARN MORE</a>
          </TransparentButton>
        </div>
      </div>
    </section>
  );
};

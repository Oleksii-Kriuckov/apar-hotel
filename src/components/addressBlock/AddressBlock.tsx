// import ColorButton from "../UI/Buttons/ColorButton";
import { Button } from "antd";
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
      <div className="hotel_info">
        <p>
          Готель <strong>{hotelInfo.hotelName.replace('-', ' ')}</strong> розташований за адресою
        </p>
        <h3>{hotelInfo.address}</h3>

        <ul>
          {hotelInfo.conveniences.map((element, ind) => (
            <li key={ind}>{element}</li>
          ))}
        </ul>
        
        <div className="address_block_buttons">
          <Button
            size="large"
            type="primary"
            className="address_block_btn booking_btn"
            onClick={() =>
              navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}`)
            }
          >
            Забронювати
          </Button>

          <Button
            size="large"
            href="#navbar"
            className="address_block_btn ghost_button"
            onClick={() => {navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}/about-hotel`)}}
          >
            Детальніше
          </Button>
        </div>
      </div>
    </section>
  );
};

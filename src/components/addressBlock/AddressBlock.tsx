import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { MyMapContainer } from "../../map/MyMapContainer";
import { MapChild } from "../../map/MapChild";
import { IHotelInfo } from "../../assets/types";
import { LinkWithIcon } from "../UI/Links/LinkWithIcon";
import { RoomInfo } from "../roomBlock/RoomInfo";
import phone from "../images/Phone.png";
import { useRecoilValue } from "recoil";
import { bookingRoom$ } from "../../recoil/atoms";
import { useAppNav } from "../../hooks/useAppNav";
import "./style/adaptive.css";
import "./style/style.css";

type AddressBlockProps = {
  hotelInfo: IHotelInfo;
  descriptionRoomPage?: boolean
};

export const AddressBlock = ({ hotelInfo, descriptionRoomPage }: AddressBlockProps) => {
  let navigate = useNavigate();
  const { city } = useParams();
  const bookingRoom = useRecoilValue(bookingRoom$)
  const { navigateBooking } = useAppNav(bookingRoom, city!)

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

        <div className="tel">
          <LinkWithIcon alt="phone" src={phone} isDropDown={false}>{`${hotelInfo.tel}`}</LinkWithIcon>
        </div>

        {descriptionRoomPage ?
          // @ts-ignore
          <RoomInfo roomInfo={bookingRoom} descriptionRoomPage /> :
          <ul>
            {hotelInfo.conveniences.map((element, ind) => (
              <li key={ind}>{element}</li>
            ))}
          </ul>
        }

        <div className="address_block_buttons">
          <Button
            size="large"
            type="primary"
            className="address_block_btn booking_btn"
            onClick={descriptionRoomPage ?
              navigateBooking :
              () => navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}`)
            }
          >
            Забронювати
          </Button>

          <Button
            size="large"
            className="address_block_btn ghost_button"
            onClick={descriptionRoomPage ?
              () => { window.scrollTo(0, 0) } :
              () => {
                navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}/about-hotel`)
                window.scrollTo(0, 0)
              }
            }
          >
            Детальніше
          </Button>
        </div>
      </div>
    </section>
  );
};

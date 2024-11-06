import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { MyMapContainer } from "../../map/MyMapContainer";
import { MapChild } from "../../map/MapChild";
import { IHotelInfo } from "../../assets/types";
import { LinkWithIcon } from "../UI/Links/LinkWithIcon";
import phone from "../images/Phone.png";
import "./style/style.css";
import "./style/adaptive.css";
import { useRecoilState } from "recoil";
import { bookingRoom$ } from "../../recoil/atoms";
import { RoomInfo } from "../roomBlock/RoomInfo";
import { useAppNav } from "../../hooks/useAppNav";
// import useUserGeoLocation from "../../hooks/useGeoLocation";
// import useLocation from "../../hooks/useLocation";

type AddressBlockProps = {
  hotelInfo: IHotelInfo;
  descriptionRoomPage?: boolean
};

export const AddressBlock = ({ hotelInfo, descriptionRoomPage }: AddressBlockProps) => {
  let navigate = useNavigate();
  const { city } = useParams();
  const [bookingRoom, setBookingRoom] = useRecoilState(bookingRoom$)
  // @ts-ignore
  const { navigateBooking, navigateAboutRoom } = useAppNav(bookingRoom, city!)

  // const { position } = useUserGeoLocation();
  // const { userLocation } = useLocation(position);

  return (
    <section className="address_block d-flex flex-column flex-md-row-reverse gap-md-4">
      <MyMapContainer hotelLocation={hotelInfo.coordinates} zoom={16}>
        <MapChild location={hotelInfo.coordinates} />
      </MyMapContainer>
      <div className="hotel_info">
        <p>
          Hotel <strong>{hotelInfo.hotelName.replace('-', ' ')}</strong> by the address
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
            onClick={
              descriptionRoomPage ?
                navigateBooking :
                () => navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}`)
            }
          >
            Book now
          </Button>

          <Button
            size="large"
            className="address_block_btn ghost_button"
            onClick={
              descriptionRoomPage ?
                () => { window.scrollTo(0, 0) } :
                () => {
                  navigate(`/${city}/${hotelInfo.hotelName.toLowerCase()}/about-hotel`)
                  window.scrollTo(0, 0)
                }
            }
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

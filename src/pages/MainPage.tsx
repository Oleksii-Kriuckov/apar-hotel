import { hotelInfo } from "../assets/Info";
import { Article } from "../components/article/Article";
import { Slider } from "../components/slider/slider";
import ToBookBlock from "../components/ToBookBlock/ToBookBlock";
import keyhole_color from "../components/images/Group 1317.png";
import keyhole from "../components/images/Group 1318.png";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Wellcome from "../components/wellcomeBlock/Wellcome";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <main>
      <div className="background">
        <img
          src={keyhole_color}
          alt="keyhole_color"
          className="keyhole_color"
        />
      </div>
      <div className="background">
        <img src={keyhole} alt="keyhole" className="keyhole" />
      </div>
      <Slider />
      <ToBookBlock>{hotelInfo[0].city}</ToBookBlock>
      <Article>{hotelInfo[0].description}</Article>
      <h4 id="our_addresses">Наши адреса</h4>

      <AddressBlock convs={hotelInfo[0].hotels[0].conveniences}>
        {hotelInfo[0].hotels[0].address}
      </AddressBlock>

      <AddressBlock convs={hotelInfo[0].hotels[0].conveniences}>
        {hotelInfo[0].hotels[1].address}
      </AddressBlock>

      <Wellcome/>
    </main>
  );
};

export default MainPage;

import { hotels } from "../assets/Info";
import { Article } from "../components/article/Article";
import { MyCarousel } from "../components/Slider/Slider";
import ToBookBlock from "../components/ToBookBlock/ToBookBlock";
import keyhole_color from "../components/images/Group 1317.png";
import keyhole from "../components/images/Group 1318.png";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";

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
      <MyCarousel />
      <ToBookBlock>{hotels[0].city}</ToBookBlock>
      <Article>{hotels[0].description}</Article>
      <h4 id="our_addresses">Our address</h4>

      <AddressBlock hotelInfo={hotels[0].hotelsInfos[0]}/>
      <AddressBlock hotelInfo={hotels[0].hotelsInfos[1]}/>

      <Welcome/>
    </main>
  );
};

export default MainPage;

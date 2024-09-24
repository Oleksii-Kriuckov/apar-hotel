import { useParams } from "react-router-dom";
import { AddressBlock } from "../components/addressBlock/AddressBlock";
import Welcome from "../components/welcomeBlock/Welcome";
import { findData } from "../functions/functions";
import TitleBlock from "../components/TitleBlock/TitleBlock";
import ModalWindow from "../components/ModalWindow/ModalWindow";

const MainPage = () => {
  const { city } = useParams();
  const { findCity } = findData(city!);

  return (
    <main>
      <ModalWindow/>
      {/* <TitleBlock>Для вас готелі у <span className="highlight">{(city! && city === 'kyiv') ? 'Києві' : 'Львові'}</span></TitleBlock> */}
      <TitleBlock><span>Your hotels in <span className="highlight">{city!}</span></span> </TitleBlock>
  
      <h3 className="our_addresses">Our address</h3>
      {findCity!.hotelsInfo.map((hotel) => (
        <AddressBlock key={hotel.address} hotelInfo={hotel} />
      ))}
      <Welcome />
    </main>
  );
};

export default MainPage;

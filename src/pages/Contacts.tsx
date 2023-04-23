import { useState } from "react";
import MediaLinks from "../components/UI/Links/MediaLinks";
import LicenseLink from "../components/UI/Links/LicenseLink";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import map1 from "../components/images/map1.png"

const Contacts = () => {
  return (
    <div>
      <h3 className="header_h3">Контакты:</h3>
      <ul className="contacts">
        <li>г. Волгоград, ул. Мира, д. 21</li>
        <li>+7 (961) 658-32-02</li>
        <li>vlg@urooms.ru</li>
      </ul>

      <MediaLinks />
      <BookingMessage/>
      <LicenseLink/>

      <h3 className="header_h3">Как проехать:</h3>
      <img src={map1} alt="map" className="map"/>
    </div>
  );
};

export default Contacts;

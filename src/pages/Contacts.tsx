import { useState } from "react";
import MediaLinks from "../components/UI/Links/MediaLinks";
import LicenseLink from "../components/UI/Links/LicenseLink";
import BookingMessage from "../components/bookingMessage/BookingMessage";
import map1 from "../components/images/map1.png"
import { useParams } from "react-router-dom";
import useFind from "../hooks/useFind";

const Contacts = () => {
  const { city } = useParams();
  const { findCity } = useFind(city!);
  
  return (
    <div>
      <h3 className="header_h3">Контакты:</h3>
      <ul className="contacts">
        <li>address</li>
        <li>tel</li>
        <li>email</li>
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

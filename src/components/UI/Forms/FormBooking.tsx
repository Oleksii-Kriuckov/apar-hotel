import React from "react";
import {Button} from 'antd'
import "./styles/style.css";
import "./styles/adaptive.css";

type Props = {};

const FormBooking = (props: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const onClick = () => onSubmit;
  
  const rewriteData = () => {
    // const b = doc(db, 'items', 'JYYYnVljcqwNOLWM0jgB')
    // setDoc(b, {price: 32, name: 'Bar'})
  };

  return (
    <form
      id="form_booking"
      className="form d-flex flex-column"
      style={{ gap: 20 }}
    >
      <div className="input_block">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="John Smith" />
      </div>

      <div className="input_block">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+380965123456"
        />
      </div>

      <div className="input_block">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="jsmith@gmail.com"
        />
      </div>

      <Button className="booking_btn" onClick={onClick} >
        Booking
      </Button>
    </form>
  );
};

export default FormBooking;

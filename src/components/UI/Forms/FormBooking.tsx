import React from "react";
import { Button, Input } from "antd";
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
      className="form d-flex flex-column flex-lg-row "
      style={{ gap: 20 }}
    >
      <div className="inputs_wrap d-flex flex-column flex-md-row">
        <div className="input_block input_block_booking">
          <label htmlFor="name">Name</label>
          <Input size="large" name="name" id="name" placeholder="John Smith" />
        </div>

        <div className="input_block input_block_booking">
          <label htmlFor="phone">Phone</label>
          <Input
            size="large"
            type="tel"
            // status="warning"
            name="phone"
            id="phone"
            placeholder="+380965123456"
          />
        </div>

        <div className="input_block input_block_booking">
          <label htmlFor="email">E-mail</label>
          <Input
            size="large"
            type="email"
            name="email"
            id="email"
            placeholder="jsmith@gmail.com"
          />
        </div>
      </div>

      <Button
        size="large"
        id="booking"
        className="booking_btn"
        onClick={onClick}
      >
        Booking
      </Button>
    </form>
  );
};

export default FormBooking;

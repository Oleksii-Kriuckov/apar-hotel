import React from "react";
import YellowButton from "../Buttons/YellowButton";

type Props = {};

const FormBooking = (props: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const onClick = () => onSubmit;

  return (
    <div className="mobile" style={{ gap: 20 }}>
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

      <YellowButton onClick={onClick} width={200} color="black">
        SEND
      </YellowButton>
    </div>
  );
};

export default FormBooking;

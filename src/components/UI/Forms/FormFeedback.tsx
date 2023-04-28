import React from "react";
import YellowButton from "../Buttons/YellowButton";

type Props = {};

const FormFeedback = (props: Props) => {
  return (
    <div className="mobile" style={{ gap: 20 }}>
      <div className="input_block">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Smith"
        />
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
      <div className="input_block">
        <label htmlFor="file">Attach file:</label>
        <input type="file" name="file" id="file" placeholder="Select files" />
      </div>
      <div className="input_block">
        <label htmlFor="message"> Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
        />
      </div>

      <div className="d-flex align-items-baseline gap-3">
        <input type="checkbox" name="confirm" id="confirm" />
        <label htmlFor="confirm">
          By clicking on the "Submit" button, I consent to
          the processing of personal data
        </label>
      </div>

      <YellowButton width={200} color="black">
       SEND
      </YellowButton>
    </div>
  );
};

export default FormFeedback;

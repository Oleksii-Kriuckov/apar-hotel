import { Dropdown, Form, InputGroup, SplitButton } from "react-bootstrap";
import "./styles/style.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TransparentButton from "../Buttons/TransparentButton";
import Select from "../Select/Select";
import React, { ReactElement } from "react";

type Props = {};

const CheckForm = (props: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("onSubmit");
    event.preventDefault();
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <form className="form_search" onSubmit={onSubmit}>
      <h4>Check-in - 14.00, check-out - 12.00</h4>

      <div className="search d-flex flex-wrap">
        <div className="input_block">
          <label htmlFor="checkIn">Check-in</label>
          <input
            type="date"
            className="form-control"
            name="checkIn"
            id="checkIn"
            onChange={changeInput}
          />
        </div>

        <div className="input_block">
          <label htmlFor="checkOut">Check-out</label>
          <input
            className="form-control"
            type="date"
            name="checkOut"
            id="checkOut"
            onChange={changeInput}
          />
        </div>

        <div className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select />
        </div>

        <div className="input_block">
          <TransparentButton onClick={() => {  }} color="whiteBorder">
            Search
          </TransparentButton>
        </div>
      </div>
    </form>
  );
};

export default CheckForm;

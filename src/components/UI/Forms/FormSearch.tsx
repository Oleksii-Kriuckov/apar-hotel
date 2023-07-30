import { Dropdown, InputGroup, SplitButton } from "react-bootstrap";
import { Form, useParams } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TransparentButton from "../Buttons/TransparentButton";
import Select from "../Select/Select";
import React, { ReactElement } from "react";
import "./styles/style.css";
import findData from "../../../functions/findData";

type Props = {};

const CheckForm = (props: Props) => {
  const { city, hotel } = useParams();

  const { findCity, findHotel } = findData(city!, hotel!);

  return (
    <Form
      className="form_search"
      action={`/${findCity!.city.toLowerCase()}/${findHotel!.hotelName.toLowerCase()}`}
      method="post"
    >
      <h4>Check-in - 14.00, check-out - 12.00</h4>

      <div className="search d-flex flex-wrap">
        <div className="input_block">
          <label htmlFor="checkIn">Check-in</label>
          <input
            type="date"
            className="form-control"
            name="checkIn"
            id="checkIn"
          />
        </div>

        <div className="input_block">
          <label htmlFor="checkOut">Check-out</label>
          <input
            className="form-control"
            type="date"
            name="checkOut"
            id="checkOut"
          />
        </div>

        <div className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select />
        </div>

        <div className="input_block">
          <TransparentButton onClick={() => {}} color="whiteBorder">
            Search
          </TransparentButton>
        </div>
      </div>
    </Form>
  );
};

export default CheckForm;

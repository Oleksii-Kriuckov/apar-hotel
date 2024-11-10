import { Form, useParams } from "react-router-dom";
import { formatDays } from "../../../functions/functions";
import { DatePicker, Button, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { useEffect, useState } from "react";
import { optionsForGuests } from "../../../assets/Info";
import { useRecoilState, useSetRecoilState } from "recoil";
import { datePickerRange$, persons$ } from "../../../recoil/atoms";
import { HotelNames } from "../../../assets/types";
import { useQuery } from "../../../hooks/useQuery";
import "./styles/style.css";
import { Booking_ROUTES } from "../../../routers/paths";

const { RangePicker } = DatePicker;

// Can not select days before today
const disabledPastDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().startOf("day");
};

const FormSearch = () => {
  const { city, hotel } = useParams();
  const { queryRooms } = useQuery();
  const [persons, setPersons] = useRecoilState(persons$)
  const [datePickerValue, setDatePickerValue] = useRecoilState<[Dayjs, Dayjs]>(datePickerRange$);

  useEffect(() => {
    return () => {
      if (!location.pathname.includes('about-room') && !Booking_ROUTES.includes(location.pathname)) {
        setDatePickerValue([dayjs(), dayjs().add(1, "day"),])
        setPersons(1)
      }
    }
  }, [])

  const changeDatePickerRange = (value: [Dayjs, Dayjs]) => {
    if (value) {
      setDatePickerValue(value)
    }
  };

  return (
    <Form id="form_search">
      <h4>
        Check-in - 14.00, <br /> check-out - 12.00
      </h4>

      <div className="search d-flex">
        <div id="rangePicker" className="input_block">
          <label htmlFor="rangePicker">Check-in and check-out date</label>
          <RangePicker
            size="large"
            disabledDate={disabledPastDate}
            placeholder={["check-in", "check-out"]}
            popupClassName="popup_calendar"
            defaultValue={datePickerValue}
            // @ts-ignore
            onChange={changeDatePickerRange}
            value={datePickerValue}
          />
        </div>

        <div id="guests" className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select
            options={hotel == 'arena-summit' ? optionsForGuests.slice(0, -1) : optionsForGuests}
            size="large" value={persons}
            onChange={(e) => setPersons(e)}
          />
        </div>

        <div id="search_btn" className="input_block">
          <Button
            className="norm_height"
            ghost
            size="large"
            onClick={() => queryRooms(hotel as HotelNames, persons)}
          >
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default FormSearch;
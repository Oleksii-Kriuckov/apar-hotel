import { Form, useParams } from "react-router-dom";
import { findData, formatDays } from "../../../functions/functions";
import { DatePicker, Button, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { useEffect, useState } from "react";
import { optionsForGuests } from "../../../assets/Info";
import { useRecoilState, useSetRecoilState } from "recoil";
import { dateRange$ } from "../../../recoil/atoms";
import { HotelNames, IRoom } from "../../../assets/types";
import "./styles/style.css";
import { useQuery } from "../../../hooks/useQuery";

type Props = {};

const { RangePicker } = DatePicker;

// Can not select days before today
const disabledPastDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().startOf("day");
};

const FormSearch = (props: Props) => {
  const { city, hotel } = useParams();
  const [dateRange, setDateRange ] = useRecoilState(dateRange$);
  const { queryRooms } = useQuery();
  const [persons, setPersons] = useState(1)
  const [datePickerValue, setDatePickerValue] = useState<[Dayjs, Dayjs]>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  const { findCity, findHotel } = findData(city!, hotel!);

  const onChange = (value: [Dayjs, Dayjs]) => {
    if (value) {
      setDatePickerValue(value)
      setDateRange(formatDays(value));
  }};

  const searchRooms = (value: [Dayjs, Dayjs]) => {
    queryRooms(hotel as HotelNames, persons);
  };

  return (
    <Form
      id="form_search"
      action={`/${findCity!.city.toLowerCase()}/${findHotel!.hotelName.toLowerCase()}`}
      method="post"
    >
      <h4>
        Check-in - 14.00, <br /> check-out - 12.00
      </h4>

      <div className="search d-flex">
        <div id="rangePicker" className="input_block">
          <label htmlFor="rangePicker">Check-in and check-out date</label>
          <RangePicker
            size="large"
            disabledDate={disabledPastDate}
            // className="norm_height"
            placeholder={["check-in", "check-out"]}
            popupClassName="popup_calendar"
            defaultValue={datePickerValue}
            onChange={onChange}
            // onChange={() => onChange()}
            value={datePickerValue}
          />
        </div>

        <div id="guests" className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select options={optionsForGuests} size="large" value={persons} onChange={(e)=> setPersons(e)}/>
        </div>

        <div id="search_btn" className="input_block">
          <Button
            className="norm_height"
            ghost
            size="large"
            onClick={() => searchRooms(datePickerValue)}
          >
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default FormSearch;

// const deleteItem = async (id: string) => {
//   await deleteDoc(doc(db, "items", id));
// };

// setDoc(base, {
//   hotel: "luxury",
//   floor: 1,
//   image: '/src/components/images/rooms/LuxuryRoom11.jpg',
//   number: 11,
//   persons: 2,
//   price: 2100,
//   occupied: []
// })
{
  /* <DatePicker
  className="norm_height"
  placeholder="Sign in date"
  format="YYYY-MM-DD"
  disabledDate={disabledPastDate}
  onChange={(date) => console.log(date?.set("hours", 14).unix())}
/>
<DatePicker
className="norm_height"
placeholder="Sign out date"
format="YYYY-MM-DD"
disabledDate={disabledPastAndNowDate}
onChange={(date) => console.log(date?.set("hour", 12).unix())}
/> */
}

{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
<DateRangePicker disablePast calendars={2} localeText={{ start: "Check-in", end: "Check-out" }}/>
</LocalizationProvider> */
}

{
  /* <div className="input_block">
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
</div> */
}

import { Form, useParams } from "react-router-dom";
import { deleteDoc } from "firebase/firestore";
import { findData } from "../../../functions/findData";
import { DatePicker, Button, Select } from "antd";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { db } from "../../../firebase/firebase";
import { useState } from "react";
import { optionsForGuests } from "../../../assets/Info";
import { useSetRecoilState } from "recoil";
import { dateRange$, freeRooms$ } from "../../../recoil/atoms";
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
  const setDateRange = useSetRecoilState(dateRange$);
  const { queryRooms } = useQuery();
  const [datePickerValue, setDatePickerValue] = useState<[Dayjs, Dayjs]>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  const { findCity, findHotel } = findData(city!, hotel!);

  const onChange = (
    value: RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    if (value) {
      setDatePickerValue(value);
    }
    console.log("Formatted Selected Time: ", dateString);
  };

  const searchRooms = (value: [Dayjs, Dayjs]) => {
    setDateRange([value[0].valueOf(), value[1].valueOf()]);

    queryRooms(hotel as HotelNames);
  };
  // const deleteItem = async (id: string) => {
  //   await deleteDoc(doc(db, "items", id));
  // };

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
            // defaultValue={datePickerValue}
            onChange={onChange}
            value={datePickerValue}
          />
        </div>

        <div id="guests" className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select defaultValue={1} options={optionsForGuests} size="large" />
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

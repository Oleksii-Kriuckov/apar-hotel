import { Form, useParams } from "react-router-dom";
import { findData, formatDays } from "../../../functions/functions";
import { DatePicker, Button, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { useState } from "react";
import { optionsForGuests } from "../../../assets/Info";
import { useSetRecoilState } from "recoil";
import { dateRange$ } from "../../../recoil/atoms";
import { HotelNames } from "../../../assets/types";
import { useQuery } from "../../../hooks/useQuery";
import "./styles/style.css";

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
  const [persons, setPersons] = useState(1)
  const [datePickerValue, setDatePickerValue] = useState<[Dayjs, Dayjs]>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  const { findCity, findHotel } = findData(city!, hotel!);

  const changeDatePickerRange = (value: [Dayjs, Dayjs]) => {
    if (value) {
      setDatePickerValue(value)
      setDateRange(formatDays(value));
  }};

  return (
    <Form
      id="form_search"
      action={`/${findCity!.city.toLowerCase()}/${findHotel!.hotelName.toLowerCase()}`}
      method="post"
    >
      <h4>
        Заїзд - 14.00, <br /> Виїзд - 11.00
      </h4>

      <div className="search d-flex">
        <div id="rangePicker" className="input_block">
          <label htmlFor="rangePicker">Дати заїзду та виїзду</label>
          <RangePicker
            size="large"
            disabledDate={disabledPastDate}
            placeholder={["check-in", "check-out"]}
            popupClassName="popup_calendar"
            defaultValue={datePickerValue}
            onChange={changeDatePickerRange}
            value={datePickerValue}
          />
        </div>

        <div id="guests" className="input_block">
          <label htmlFor="guests">Кількість гостей</label>
          <Select options={optionsForGuests} size="large" value={persons} onChange={(e)=> setPersons(e)}/>
        </div>

        <div id="search_btn" className="input_block">
          <Button
            className="norm_height"
            ghost
            size="large"
            onClick={() => queryRooms(hotel as HotelNames, persons)}
          >
            Пошук
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default FormSearch;


import { Form, useParams } from "react-router-dom";
import { DatePicker, Button, Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { useEffect } from "react";
import { optionsForGuests } from "../../../assets/Info";
import { useRecoilState } from "recoil";
import { datePickerRange$, persons$ } from "../../../recoil/atoms";
import { HotelNames } from "../../../assets/types";
import { useQuery } from "../../../hooks/useQuery";
import { Booking_ROUTES } from "../../../routers/paths";
import "./styles/style.css";

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
        Заїзд - 14.00, <br /> Виїзд - 12.00
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
            // @ts-ignore
            onChange={changeDatePickerRange}
            value={datePickerValue}
          />
        </div>

        <div id="guests" className="input_block">
          <label htmlFor="guests">Кількість гостей</label>
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
            Пошук
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default FormSearch;


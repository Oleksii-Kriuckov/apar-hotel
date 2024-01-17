import { Form, useParams } from "react-router-dom";
import TransparentButton from "../Buttons/TransparentButton";
// import Select from "../Select/Select";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import findData from "../../../functions/findData";
import { DatePicker, DatePickerProps, Button, Select } from "antd";
import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { db } from "../../../firebase/firebase";
import { useState } from "react";
import "./styles/style.css";
import { optionsForGuests } from "../../../assets/Info";

type Props = {};

const { RangePicker } = DatePicker;
const disabledPastDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().startOf("day");
};
const disabledPastAndNowDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

const CheckingForm = (props: Props) => {
  const { city, hotel } = useParams();
  // const [items, setItems] = useState<ItemType[]>([]);

  const { findCity, findHotel } = findData(city!, hotel!);

  const findRoom = () => {
    // const q = query(collection(db, "items"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   let itemsArr: ItemType[] = [];
    //   console.log(querySnapshot.docs[0].id)
    //   console.log(querySnapshot.docs[0].data())
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() = {name: string, price: number}
    //     itemsArr.push({ ...doc.data(), id: doc.id });
    //   });
    //   setItems(itemsArr);
    //   return () => unsubscribe();
    // });
  };
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };
  // const deleteItem = async (id: string) => {
  //   await deleteDoc(doc(db, "items", id));
  // };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form
      id="form_search"
      action={`/${findCity!.city.toLowerCase()}/${findHotel!.hotelName.toLowerCase()}`}
      method="post"
    >
      <h4>Check-in - 14.00, <br/> check-out - 12.00</h4>

      <div className="search d-flex">
        <div id="rangePicker" className="input_block">
          <label htmlFor="rangePicker">Check-in and check-out date</label>
          <RangePicker
            size="large"
            disabledDate={disabledPastDate}
            // className="norm_height"
            placeholder={["check-in", "check-out"]}
            popupClassName="popup_calendar"
          />
        </div>

        <div id="guests" className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select
            defaultValue={1}
            options={optionsForGuests}
            size="large"
          />
        </div>

        <div id="search_btn" className="input_block">
          <Button className="norm_height" ghost size="large">
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default CheckingForm;
{
  /* <TransparentButton onClick={() => {}} color="whiteBorder">
  Search
</TransparentButton> */
}
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

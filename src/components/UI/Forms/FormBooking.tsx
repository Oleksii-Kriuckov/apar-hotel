import React from "react";
import { Button, Form, Input, Select, InputNumber, Grid } from "antd";
import codes from "../../../assets/codes.json";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateRange$,
  bookingRoom$,
  showBookingForm$,
  showSuccessMessage$,
} from "../../../recoil/atoms";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { HotelNames } from "../../../assets/types";
import "./styles/style.css";
import "./styles/adaptive.css";

const { Option } = Select;
const { useBreakpoint } = Grid;

export const FormBooking: React.FC = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();

  const dateRange = useRecoilValue(dateRange$);
  const bookingRoom = useRecoilValue(bookingRoom$);
  const setShowBookingForm = useSetRecoilState(showBookingForm$);
  const showSuccessMessage = useSetRecoilState(showSuccessMessage$);

  // const bookingRoom = useRecoilValue(bookingRoom$)

  // send dataRange in data base to corresponding RoomObject
  const bookRoom = (values: any) => {
    const base = doc(db, "rooms", bookingRoom.id);
    const [items] = bookingRoom.occupied;

    if (items) {
      updateDoc(base, {
        occupied: [items, { checkIn: dateRange[0], checkOut: dateRange[1] }],
      });
    } else {
      updateDoc(base, {
        occupied: [{ checkIn: dateRange[0], checkOut: dateRange[1] }],
      });
    }
    // console.log('id: ', bookingRoom.id);

    setShowBookingForm(false);
    showSuccessMessage(true);

    form.resetFields();

    setTimeout(() => {
      showSuccessMessage(false);
    }, 3000);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select showSearch size="large" style={{ width: 92 }}>
        {codes.countries.map((el) => (
          <Option key={el.code} value={el.code}>
            {el.code}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <h4 style={{ textAlign: "center", paddingBottom: 10 }}>
        Будь ласка, заповніть форму
      </h4>

      <Form
        id="form_booking"
        name="form_booking"
        className="form row row-cols-sm-1"
        // className="form d-flex flex-column flex-lg-row align-items-lg-center"
        form={form}
        labelCol={{ span: 6, offset: 0 }}
        layout={screens.md ? "vertical" : "horizontal"}
        onFinish={bookRoom}
        initialValues={{ prefix: "+380" }}
        scrollToFirstError
      >
        <div className="row row-cols-sm-1 row-cols-md-3">
          <Form.Item
            name="name"
            label="Ім'я"
            // className="input_block input_block_booking"
            rules={[{ required: true, message: "Будь ласка, введіть ім'я!" }]}
          >
            <Input size="large" placeholder="Тарас Шевченко" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Номер телефону"
            // className="input_block input_block_booking"
            rules={[
              { required: true, message: "Будь ласка, введіть номер телефону!" },
              { type: "integer", message: "Номер має бути цілим числом" },
              // Don't work positive rule
              // Don't work length of min number
            ]}
          >
            <InputNumber
              minLength={7}
              size="large"
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              placeholder="965123456"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Ел. пошта"
            // className="input_block input_block_booking"
            rules={[
              { type: "email", message: "Ел. пошта не дійсна!" },
              { required: true, message: "Будь ласка, введіть ел. пошту!" },
            ]}
          >
            <Input size="large" placeholder="shevchenko@ukr.net" />
          </Form.Item>
        </div>

        <Form.Item wrapperCol={{ offset: (screens.xs || screens.md) ? 0 : 6 }}>
          <Button
            size="large"
            id="booking_btn"
            type="primary"
            className="booking_btn"
            htmlType="submit"
          >
            Забронювати
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};

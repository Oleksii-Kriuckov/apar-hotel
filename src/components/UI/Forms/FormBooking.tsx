import React from "react";
import { Button, Form, Input, Select, InputNumber, Grid } from "antd";
import codes from "../../../assets/codes.json";
import { useSetRecoilState } from "recoil";
import {  showSuccessMessage$} from "../../../recoil/atoms";
import "./styles/style.css";
import "./styles/adaptive.css";
import { useQuery } from "../../../hooks/useQuery";

const { Option } = Select;
const { useBreakpoint } = Grid;

export const FormBooking: React.FC = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const { bookRoom } = useQuery()

  const showSuccessMessage = useSetRecoilState(showSuccessMessage$);

  const submit = () => {
    bookRoom()

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
        form={form}
        labelCol={{ span: 6, offset: 0 }}
        layout={screens.md ? "vertical" : "horizontal"}
        onFinish={submit}
        initialValues={{ prefix: "+380" }}
        scrollToFirstError
      >
        <div className="row row-cols-sm-1 row-cols-md-3">
          <Form.Item
            name="name"
            label="Ім'я"
            rules={[{ required: true, message: "Будь ласка, введіть ім'я!" }]}
          >
            <Input size="large" placeholder="Тарас Шевченко" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Номер телефону (не меньше 7 цифр)"
            rules={[
              { required: true, message: "Будь ласка, введіть номер телефону!" },
              { type: "integer", message: "Номер має бути цілим числом" },
              // Don't work positive rule
            ]}
          >
            <InputNumber
              minLength={7}
              size="large"
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              placeholder="965123456"
              // value={phone}
              // onChange={(value) => {
              //   if (value && Number(value) < 0) Math.abs(Number(value))
              //   console.log(value)
              //   setPhone(Number(value))
              // }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Ел. пошта"
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

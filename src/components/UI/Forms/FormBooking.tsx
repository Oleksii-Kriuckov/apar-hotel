import React from "react";
import { Button, Form, Input, Select, InputNumber, Grid } from "antd";
import codes from "../../../assets/codes.json";
import { useSetRecoilState } from "recoil";
import {  showSuccessMessage$} from "../../../recoil/atoms";
import { useQuery } from "../../../hooks/useQuery";
import "./styles/style.css";
import "./styles/adaptive.css";

const { Option } = Select;
const { useBreakpoint } = Grid;

export const FormBooking: React.FC = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const { bookRoom } = useQuery()
  // const [phone, setPhone] = useState(null);

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
        Please fill in this form
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
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input size="large" placeholder="John Smith" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone number (at least 7 digits)"
            rules={[
              { required: true, message: "Please input your phone number!" },
              { type: "integer", message: "The number should be integer" },
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
            label="E-mail"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input size="large" placeholder="jsmith@gmail.com" />
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
            Booking
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

import React from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";
import codes from "../../../assets/codes.json";
import "./styles/style.css";
import "./styles/adaptive.css";
// https://ant.design/components/form

const { Option } = Select;

export const FormBooking : React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select showSearch size="large" className="prefix">
        {codes.countries.map((el) => (
          <Option value={el.code}>{el.code}</Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <Form
      name="form_booking"
      className="form d-flex flex-column flex-lg-row align-items-lg-center"
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        prefix: "+380",
      }}
      scrollToFirstError
    >
      <div className="inputs_wrap d-flex flex-column flex-md-row">
        <Form.Item
          name="name"

          label="Name"
          className="input_block input_block_booking"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input size="large" placeholder="John Smith" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          className="input_block input_block_booking"
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
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          className="input_block input_block_booking"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input size="large" placeholder="jsmith@gmail.com" />
        </Form.Item>
      </div>

      <Button
        size="large"
        id="booking"
        className="booking_btn"
        htmlType="submit"
      >
        Booking
      </Button>
    </Form>
  );
};

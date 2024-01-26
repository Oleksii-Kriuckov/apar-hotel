import React from "react";
<<<<<<< HEAD
import { Button, Form, Input, Select, InputNumber } from "antd";
import codes from "../../../assets/codes.json";
=======
import { Button, Input, Form } from "antd"; // https://ant.design/components/form
import "./styles/style.css";
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b
import "./styles/adaptive.css";
import "./styles/style.css";

const { Option } = Select;

<<<<<<< HEAD
export const FormBooking : React.FC = () => {
=======
const FormBooking = (props: Props) => {
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
<<<<<<< HEAD
=======

  // const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  // const onClick = () => onSubmit;
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b

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
<<<<<<< HEAD
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
=======
      id="form_booking"
      className="form d-flex flex-column flex-lg-row "
      layout="vertical"
      form={form}
      onFinish={onFinish}
      // variant="outlined"
      autoComplete="off"
    >
      <div className="inputs_wrap d-flex flex-column flex-md-row">
        <Form.Item
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b
          label="Name"
          className="input_block input_block_booking"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
<<<<<<< HEAD
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
=======
          {/* <label htmlFor="name">Name</label> */}
          <Input size="large" name="name" id="name" placeholder="John Smith" />
        </Form.Item>

        <Form.Item
          label="Phone"
          className="input_block input_block_booking"
          // rules={[{ type: "" }]}
        >
          {/* <label htmlFor="phone">Phone</label> */}
          <Input
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b
            size="large"
            addonBefore={prefixSelector}
            style={{ width: "100%" }}
            placeholder="965123456"
          />
        </Form.Item>

        <Form.Item
<<<<<<< HEAD
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
=======
          className="input_block input_block_booking"
          label="Email"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          {/* <label htmlFor="email">E-mail</label> */}
          <Input
            size="large"
            type="email"
            name="email"
            id="email"
            placeholder="jsmith@gmail.com"
          />
>>>>>>> e86ed68e95afe78295ef9af68edce48ae7ce526b
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



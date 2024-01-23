import React from "react";
import { Button, Input, Form } from "antd"; // https://ant.design/components/form
import "./styles/style.css";
import "./styles/adaptive.css";

type Props = {};

const FormBooking = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  // const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  // const onClick = () => onSubmit;

  const rewriteData = () => {
    // const b = doc(db, 'items', 'JYYYnVljcqwNOLWM0jgB')
    // setDoc(b, {price: 32, name: 'Bar'})
  };

  return (
    <Form
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
          label="Name"
          className="input_block input_block_booking"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
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
            size="large"
            type="tel"
            // status="warning"
            name="phone"
            id="phone"
            placeholder="+380965123456"
          />
        </Form.Item>

        <Form.Item
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

export default FormBooking;

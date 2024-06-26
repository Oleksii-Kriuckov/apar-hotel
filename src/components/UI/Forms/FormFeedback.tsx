import React from "react";
import codes from "../../../assets/codes.json";
import { Button, Input, Form, Select, Grid, Checkbox } from "antd";
import { DropeZone } from "./DropeZone";
import "./styles/style.css";

const { Option } = Select;
const { TextArea } = Input;
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const { useBreakpoint } = Grid;

export const FormFeedback: React.FC = () => {
  const screens = useBreakpoint();

  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select showSearch size="large" style={{ width: 92 }}>
        {codes.countries.map((country) => (
          <Option key={country.name} value={country.code}>{country.code}</Option>
        ))}
      </Select>
    </Form.Item>
  );

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Submit");
  };

  return (
    <Form
      id="form_feedback"
      name="form_feedback"
      className="form row row-cols-sm-1"
      form={form}
      labelCol={{ span: 6, offset: 0 }}
      onFinish={onSubmit}
      layout={screens.md ? "vertical" : "horizontal"}
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
          label="Phone Number"
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input
            size="large"
            minLength={7}
            addonBefore={prefixSelector}
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
          <Input size="large" />
        </Form.Item>
      </div>

      <div className="row row-cols-md-2"       >
        <Form.Item className="col-md-6 padend" id="drop" label="Attach file:" valuePropName="fileList" getValueFromEvent={normFile}>
          <DropeZone />
        </Form.Item>

        <Form.Item className="col-md-6 padstart" id="texArea_1" label='Message:'>
          <TextArea itemID="" size="large" name="message" rows={2} id="message" placeholder="Message" />
        </Form.Item>
      </div>

      <Form.Item wrapperCol={{ offset: (screens.xs || screens.md) ? 0 : 6 }}>
        <Checkbox id="confirm">
          By clicking on the "Submit" button, I consent to the processing of personal data
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: (screens.xs || screens.md) ? 0 : 6 }}>
        <Button
          size="large"
          id="send_btn"
          type="primary"
          className="booking_btn"
          color="black"
          htmlType="submit"
        >
          SEND
        </Button>
      </Form.Item>
    </Form>
  );
};
import React from "react";
import codes from "../../../assets/codes.json";
import { Button, Input, Upload, Form, Select, Grid} from "antd";
import "./styles/style.css";
import { DropeZonePreviews } from "./DropeZonePreviews";
import { DropeZone } from "./DropeZone";

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
  // console.log(screens)

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
      form={form}
      onFinish={onSubmit}
      layout="horizontal"
      initialValues={{ prefix: "+380" }}
      className="form d-flex flex-column flex-md-row flex-md-wrap align-items-lg-center"
      style={{ gap: 20 }}
      scrollToFirstError
    >
      {/* <div className="inputs_wrap"></div> */}
        <Form.Item
          name="name"
          label="Name"
          // className="input_block input_block_booking"
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
            style={{ width: "100%" }}
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

        <Form.Item id="drop" label="Attach file:" valuePropName="fileList" getValueFromEvent={normFile}>
          {/* <Upload action="/upload.do" style={{ display: 'block', width: 300 }} id="upload_field" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload> */}
            <DropeZone />
        </Form.Item>

        <Form.Item id="texArea_1" label='Message:'>
          <TextArea itemID="" size="large" name="message" rows={2} id="message" placeholder="Message" />
        </Form.Item>

        <div className="d-flex align-items-baseline gap-3">
          <input type="checkbox" name="confirm" id="confirm" />
          <label htmlFor="confirm">
            By clicking on the "Submit" button, I consent to the processing of
            personal data
          </label>
        </div>

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
    </Form>
  );
};

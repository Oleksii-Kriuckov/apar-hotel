import React, { useState } from "react";
import codes from "../../../assets/codes.json";
import { Button, Input, Form, Select, Grid, Checkbox, InputNumber } from "antd";
import { DropeZone } from "./DropeZone";
import { useSetRecoilState } from "recoil";
import { isShowModalFeedback$ } from "../../../recoil/atoms";
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
  const setIsModalOpen = useSetRecoilState(isShowModalFeedback$);
  const [checked, setChecked] = useState(false);
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

  const onSubmit = () => {
    setIsModalOpen(true)
    form.resetFields()
    setChecked(false)
    setTimeout(() => setIsModalOpen(false), 3000)
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
          label="Phone number (at least 7 digits)"
          rules={[
            { required: true, message: "Please input your phone number!" },
            { type: "integer", message: "The number should be integer" },
            // {type: 'regexp'}
          ]}
        >
          <InputNumber
            size="large"
            minLength={7}
            addonBefore={prefixSelector}
            placeholder="965123456"
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
          <Input size="large" placeholder="shevchenko@ukr.net" />
        </Form.Item>
      </div>

      <div className="row row-cols-md-2">
        <Form.Item
          className="col-md-6 padend"
          id="drop"
          label="Attach file:"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <DropeZone />
        </Form.Item>

        <Form.Item
          className="col-md-6 padstart"
          name="texArea_1"
          label='Message:'
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <TextArea
            id="message"
            size="large"
            name="message"
            // rows={2}
            minLength={3}
            placeholder="Input a message"
          />
        </Form.Item>
      </div>

      <Form.Item
        wrapperCol={{ offset: (screens.xs || screens.md) ? 0 : 6 }}
        required
      >
        <Checkbox id="confirm" checked={checked} onChange={() => setChecked(!checked)}>
          I consent to the processing of personal data
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
          disabled={!checked}
        >
          SEND
        </Button>
      </Form.Item>
    </Form>
  );
};
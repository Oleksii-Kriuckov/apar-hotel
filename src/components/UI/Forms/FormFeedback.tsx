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
  const  setIsModalOpen = useSetRecoilState(isShowModalFeedback$);
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
          label="Ім'я"
          rules={[{ required: true, message: "Будь ласка, введіть ім'я!" }]}
        >
          <Input size="large" placeholder="Тарас Шевченко" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Номер телефону"
          rules={[
            { required: true, message: "Будь ласка, введіть номер телефону!" },
            { type: "integer", message: "Номер має бути цілим числом" },
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
          label="Ел. пошта"
          rules={[
            { type: "email", message: "Ел. пошта не дійсна!" },
            { required: true, message: "Будь ласка, введіть ел. пошту!" },
          ]}
        >
          <Input size="large" placeholder="shevchenko@ukr.net" />
        </Form.Item>
      </div>

      <div className="row row-cols-md-2">
        <Form.Item
          className="col-md-6 padend"
          id="drop"
          label="Додайте файл:"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <DropeZone />
        </Form.Item>

        <Form.Item
          className="col-md-6 padstart"
          name="texArea_1"
          label='Повідомлення:'
          rules={[{ required: true, message: "Будь ласка, введіть повідомлення" }]}
        >
          <TextArea
            id="message"
            size="large"
            name="message"
            // rows={2}
            minLength={3}
            placeholder="Введіть повідомлення"
          />
        </Form.Item>
      </div>

      <Form.Item
        wrapperCol={{ offset: (screens.xs || screens.md) ? 0 : 6 }}
        required
      >
        <Checkbox id="confirm" checked={checked} onChange={() => setChecked(!checked)}>
          Я даю згоду на обробку персональних даних
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
          Надіслати
        </Button>
      </Form.Item>
    </Form>
  );
};
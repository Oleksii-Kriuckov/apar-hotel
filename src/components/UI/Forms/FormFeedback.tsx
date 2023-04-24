import React from "react";
import YellowButton from "../Buttons/YellowButton";

type Props = {};

const FormFeedback = (props: Props) => {
  return (
    <div className="mobile" style={{ gap: 20 }}>
      <div className="input_block">
        <label htmlFor="name">Контактное лицо / Name *</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Иван Иванович Иванов / John Smith"
        />
      </div>
      <div className="input_block">
        <label htmlFor="phone">Телефон / Phone *</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="89023123456 / +34905123456"
        />
      </div>
      <div className="input_block">
        <label htmlFor="email">Эл. почта / E-mail *</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="ivanov@yandex.ru / jsmith@gmail.com"
        />
      </div>
      <div className="input_block">
        <label htmlFor="file">Прикрепить файл / Attach file:</label>
        <input type="file" name="file" id="file" placeholder="Выбрать файлы" />
      </div>
      <div className="input_block">
        <label htmlFor="message">Сообщение / Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Сообщение / Message"
        />
      </div>

      <div className="d-flex align-items-baseline gap-3">
        <input type="checkbox" name="confirm" id="confirm" />
        <label htmlFor="confirm">
          Нажимая на кнопку "Отправить", я даю согласие на обработку
          персональных данных. (By clicking on the "Submit" button, I consent to
          the processing of personal data)
        </label>
      </div>

      <YellowButton width={200} color="black">
        ОТПРАВИТЬ / SEND
      </YellowButton>
    </div>
  );
};

export default FormFeedback;

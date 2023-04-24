import React from "react";
import FormFeedback from "../components/UI/Forms/FormFeedback";

type Props = {};

const Message = (props: Props) => {
  return (
    <div>
      <h3 className="header_h3">Отправить сообщение</h3>
      <section className="lows_extract">
        Согласно Российского Законодательства иностранные граждане, лица без
        гражданства или Российские граждане находящиеся не в регионе проживания,
        обязаны встать на миграционный учет по месту пребывания. Для наших
        гостей мы делаем постановку на миграционный учет бесплатно, по средствам
        электронного документооборота с ГУ МВД России по г. Москве. Если Вы
        относитесь к этим категориям гостей, пожалуйста, заполните форму ниже.
        <br /> <br />
        According to Russian Legislation, foreign citizens, persons without
        citizenship or Russian citizens who are not in the region accommodation,
        must be registered at the place of residence. For our guests we make a
        registration on the migratory account free, by means of electronic
        document flow with the state Ministry of internal Affairs of Moscow. If
        you belong to these categories of guests, please fill out the form
        below.
      </section>

      <FormFeedback/>
    </div>
  );
};

export default Message;

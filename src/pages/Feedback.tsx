import React from "react";
import { FormFeedback } from "../components/UI/Forms/FormFeedback";
import ModalFeedback from "../components/ModalWindow/ModalFeedback";

const Feedback = () => {
  return (
    <div>
      <h3 id="feedback_header" className="header_h3">Надайте зворотній зв'язок</h3>
      <FormFeedback />
      <ModalFeedback/>
    </div>
  );
};

export default Feedback;

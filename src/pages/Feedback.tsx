import React from "react";
import {FormFeedback} from "../components/UI/Forms/FormFeedback";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <div>
      <h3 className="header_h3">Send Feedback</h3>
      <FormFeedback/>
    </div>
  );
};

export default Feedback;

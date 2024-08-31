import React from "react";
import { FormFeedback } from "../components/UI/Forms/FormFeedback";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <div>
      <h3 id="feedback_header" className="header_h3">Надайте зворотній зв'язок</h3>
      <FormFeedback />

      {/* <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className=" col col-lg-6">Column</div>
          <div className="col">Column</div>
        </div>
      </div> */}
    </div>
  );
};

export default Feedback;

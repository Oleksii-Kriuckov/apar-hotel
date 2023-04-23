import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import license from "../../images/license.png";
import closeButton from "../../images/closeButton.png";
import "./style.css";
import "./adaptive.css";
import CloseButton from "react-bootstrap/esm/CloseButton";

function LicenseLink() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <p style={{ marginTop: 25 }}>
        <span className="show_license" onClick={() => setModalShow(true)}>
          Посмотреть лицензию
        </span>
      </p>

      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        id="modal"
      >
        <CloseButton
          variant="white"
          id="closeButtonWhite"
          onClick={() => setModalShow(false)}
        />
        <CloseButton id="closeButton" onClick={() => setModalShow(false)} />

        <img src={license} alt="" />
      </Modal>
    </>
  );
}

export default LicenseLink;

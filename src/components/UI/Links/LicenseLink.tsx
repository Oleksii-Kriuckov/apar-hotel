import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import license from "../../images/license.png";
import CloseButton from "react-bootstrap/esm/CloseButton";
import './style.css'

function LicenseLink() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <a className="show_license" onClick={() => setModalShow(true)}>
        Documents
      </a>

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

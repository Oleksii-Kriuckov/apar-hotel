import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import license from "../../images/license.png";
import { FloatButton } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import './style.css'

function LicenseLink() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <a className="show_license" onClick={() => setModalShow(true)}>
        Documents
      </a>

      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        id="modal"
      >
        <FloatButton
          className="close_button"
          shape='square'
          icon={<CloseOutlined />}
          onClick={() => setModalShow(false)}
        />

        <img src={license} alt="license" />
      </Modal>
    </>
  );
}

export default LicenseLink;

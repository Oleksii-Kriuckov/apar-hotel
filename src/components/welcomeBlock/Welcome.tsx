import { info_en } from "../../assets/Info";
import { Button } from 'antd'
import keyhole from "../images/keyhole2.png";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { Feedback_ROUTE } from "../../routers/paths";

const Welcome = () => {
  let navigate = useNavigate();
  const { city } = useParams();

  return (
    <div className="welcome_block text-center">
      <div className="welcome">
        <p>
          {info_en.wellcome.p}
        </p>
        <Button ghost onClick={() => navigate(Feedback_ROUTE)} id="welcome_block_btn">
          {info_en.wellcome.btn}
        </Button>
      </div>

      <img className="big_keyhole" src={keyhole} alt="keyhole" />
      <img className="big_keyhole" src={keyhole} alt="keyhole" />
    </div>
  );
};

export default Welcome;

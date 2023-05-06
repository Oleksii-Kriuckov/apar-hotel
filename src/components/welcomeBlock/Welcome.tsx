import { info_en } from "../../assets/Info";
import TransparentButton from "../UI/Buttons/TransparentButton";
import keyhole from "../images/keyhole.png";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { Feedback_ROUTE } from "../../routers/paths";

const Wellcome = () => {
  let navigate = useNavigate();
  const { city } = useParams();

  return (
    <div className="wellcome_block text-center">
      <div className="wellcome">
        <p>
          {info_en.wellcome.p}
        </p>
        <TransparentButton onClick={() => navigate(Feedback_ROUTE)} color="blackBorder">
          {info_en.wellcome.btn}
        </TransparentButton>
      </div>

      <img className="big_keyhole" src={keyhole} alt="keyhole" />
    </div>
  );
};

export default Wellcome;

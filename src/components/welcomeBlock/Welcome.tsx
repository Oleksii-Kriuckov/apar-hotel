import { info_en } from "../../assets/Info";
import TransparentButton from "../UI/Buttons/TransparentButton";
import keyhole from "../images/keyhole.png";
import "./style.css";

const Wellcome = () => {
  return (
    <div className="wellcome_block text-center">
      <div className="wellcome">
        <p>
          {info_en.wellcome.p}
        </p>
        <TransparentButton color="blackBorder">
          {info_en.wellcome.btn}
        </TransparentButton>
      </div>

      <img className="big_keyhole" src={keyhole} alt="keyhole" />
    </div>
  );
};

export default Wellcome;

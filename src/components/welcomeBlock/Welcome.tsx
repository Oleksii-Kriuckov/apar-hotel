import TransparentButton from "../UI/Buttons/TransparentButton";
import keyhole from "../images/keyhole.png";
import "./style.css";

const Wellcome = () => {
  return (
    <div className="wellcome_block text-center">
      <div className="wellcome">
        <p>
          We are waiting for you to visit, we are ready to receive you at any
          time of the day.
        </p>
        <TransparentButton color="blackBorder">
          CONNECT WITH US
        </TransparentButton>
      </div>

      <img className="big_keyhole" src={keyhole} alt="keyhole" />
    </div>
  );
};

export default Wellcome;

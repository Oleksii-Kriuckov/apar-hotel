import TransparentButton from "../UI/Buttons/TransparentButton";
import "./style.css";

const Wellcome = () => {
  return (
    <div className="wellcome text-center">
        <p>We are waiting for you to visit, we are ready to receive you at any time of the day.</p>
        <TransparentButton color='blackBorder'>CONNECT WITH US</TransparentButton>
    </div>
  )
}

export default Wellcome
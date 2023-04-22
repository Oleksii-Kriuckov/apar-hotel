import TransparentButton from "../UI/Buttons/TransparentButton";
import "./style.css";


type Props = {}

const Wellcome = (props: Props) => {
  return (
    <div className="wellcome text-center">
        <p>Ждем Вас в гости, готовы Вас принять в любое время суток.</p>
        <TransparentButton color='blackBorder'>СВЯЗАТЬСЯ С НАМИ</TransparentButton>
    </div>
  )
}

export default Wellcome
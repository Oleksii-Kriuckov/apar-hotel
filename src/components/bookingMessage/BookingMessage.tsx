import clock from "../images/Clock.png";
import "./style.css";

type Props = {};

const BookingMessage = (props: Props) => {
  return (
    // <div className="book_mes_wrap">
      <div className="bookingMessage">
        <img src={clock} alt="clock" />
        <p>
          Бронювання номерів здійснюється <strong> цілодобово!</strong>{" "}
        </p>
      </div>
    // </div>
  );
};

export default BookingMessage;

import { Dropdown, Form, InputGroup, SplitButton } from "react-bootstrap";
import "./style.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type Props = {};

const CheckForm = (props: Props) => {
  return (
    <form className="form d-flex">
      <h4>Время заезда - 14.00, время выезда - 12.00</h4>

      <div className="input_block">
        <label htmlFor="checkIn">Заезд</label>
        <input type="date" name="checkIn" id="checkIn" />
      </div>

      <div className="input_block">
        <label htmlFor="checkOut">Выезд</label>
        <input type="date" name="checkOut" id="checkOut" />
      </div>

      <div className="input_block">
        <label htmlFor="guests">Гостей</label>
        <input type="number" name="guests" id="guests" />
      </div>

      <button className="searching">ПОИСК</button>
    </form>
  );
};

export default CheckForm;

import { Select } from "@mui/material";

type Props = {};

const MySelect = (props: Props) => {
  return (
    <select 
      className="form-select form-select-lg" 
      aria-label=".form-select-lg example"
      id="select"
      name="people"
    >
      <option className="option" value="1">1</option>
      <option className="option" value="2">2</option>
      <option className="option" value="3">3</option>
      <option className="option" value="4">4</option>
    </select>
  );
};

export default MySelect;

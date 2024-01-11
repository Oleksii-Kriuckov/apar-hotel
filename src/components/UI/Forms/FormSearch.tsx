import { Dropdown, InputGroup, SplitButton } from "react-bootstrap";
import { Form, useParams } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TransparentButton from "../Buttons/TransparentButton";
import Select from "../Select/Select";
import { collection, query, onSnapshot, addDoc, doc, setDoc, deleteDoc} from "firebase/firestore";
import findData from "../../../functions/findData";
import "./styles/style.css";
import { db } from "../../../firebase/firebase";
import { useState } from "react";

type Props = {};

const CheckForm = (props: Props) => {
  const { city, hotel } = useParams();
  // const [items, setItems] = useState<ItemType[]>([]);

  const { findCity, findHotel } = findData(city!, hotel!);

  const findRoom = () => {
    // const q = query(collection(db, "items"));

    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   let itemsArr: ItemType[] = [];
    //   console.log(querySnapshot.docs[0].id)
    //   console.log(querySnapshot.docs[0].data())
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() = {name: string, price: number}
    //     itemsArr.push({ ...doc.data(), id: doc.id });  
    //   });
    //   setItems(itemsArr);
    //   return () => unsubscribe();
    // });
  };
  
  const rewriteData = () => { 
    // const b = doc(db, 'items', 'JYYYnVljcqwNOLWM0jgB')
    // setDoc(b, {price: 32, name: 'Bar'})
   }

  const addRoom = async () => {
    // e.preventDefault();
    const newRoom: RoomType = {
      // id: 1,
      hotelName: 'Luxury',
      number: 12,
      occupied: [] 
    }
    await addDoc(collection(db, 'rooms'), newRoom)
  };
  
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <Form
      id="form_search"
      // className="form_search"
      action={`/${findCity!.city.toLowerCase()}/${findHotel!.hotelName.toLowerCase()}`}
      method="post"
    >
      <h4>Check-in - 14.00, check-out - 12.00</h4>

      <div className="search d-flex flex-wrap">
        <div className="input_block">
          <label htmlFor="checkIn">Check-in</label>
          <input
            type="date"
            className="form-control"
            name="checkIn"
            id="checkIn"
          />
        </div>

        <div className="input_block">
          <label htmlFor="checkOut">Check-out</label>
          <input
            className="form-control"
            type="date"
            name="checkOut"
            id="checkOut"
          />
        </div>

        <div className="input_block">
          <label htmlFor="guests">Guests</label>
          <Select />
        </div>

        <div className="input_block">
          <TransparentButton onClick={addRoom} color="whiteBorder">
            Search
          </TransparentButton>
        </div>
      </div>
    </Form>
  );
};

export default CheckForm;

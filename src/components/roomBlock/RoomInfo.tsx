import { IRoom } from '../../assets/types'
import conveniences from "../images/conveniences.png";
import './style.css'

type Props = {
  roomInfo: IRoom,
  descriptionRoomPage?: boolean
}

export const RoomInfo = ({ roomInfo, descriptionRoomPage }: Props) => {
  return (
    <div className="room_info">
      <ul>
        <li>Number: {roomInfo.number}</li>
        <li>Floor: {roomInfo.floor}</li>
        <li>Persons: {roomInfo.persons}</li>
        {descriptionRoomPage && <li>Price: {roomInfo.price} hrn</li>}
      </ul>
      <img
        src={conveniences}
        alt="conveniences"
        className="conveniences"
      />
    </div>
  )
}
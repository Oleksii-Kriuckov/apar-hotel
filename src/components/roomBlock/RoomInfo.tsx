import { IRoom } from '../../assets/types'
import conveniences from "../images/conveniences.png";
import './style.css'

type Props = {
  roomInfo: IRoom,
  descriptionRoomPage?: boolean
}

export const RoomInfo = ({roomInfo, descriptionRoomPage}: Props) => {
  return (
    <div className="room_info">
      <ul>
        <li>Номер: {roomInfo.number}</li>
        <li>Поверх: {roomInfo.floor}</li>
        <li>Кількість осіб: {roomInfo.persons}</li>
        {descriptionRoomPage && <li>Ціна: {roomInfo.price} грн</li>}
      </ul>
      <img
        src={conveniences}
        alt="conveniences"
        className="conveniences"
      />
    </div>
  )
}
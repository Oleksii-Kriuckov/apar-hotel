import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { useSetRecoilState } from "recoil";
import { unoccupiedRooms$, showNotFindMessage$, persons$, datePickerRange$ } from "../../../recoil/atoms";
import dayjs from "dayjs";

type Props = PropsWithChildren<{ to: string, children: string | JSX.Element }>

export const MyHookLink = ({ to, children }: Props) => {
  const setUnoccupiedRooms = useSetRecoilState(unoccupiedRooms$)
  const setShowNotFindMessage = useSetRecoilState(showNotFindMessage$)
  const setDatePickerValue = useSetRecoilState(datePickerRange$)
  const setPersons = useSetRecoilState(persons$)

  const clickLink = () => {
    setUnoccupiedRooms([])
    setShowNotFindMessage(false)
    setDatePickerValue([dayjs(), dayjs().add(1, "day"),])
    setPersons(1)
  }
  return (
    <Link to={to} onClick={clickLink}>
      {children}
    </Link>
  )
}
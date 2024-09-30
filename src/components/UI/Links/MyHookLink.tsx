import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { useSetRecoilState } from "recoil";
import { unoccupiedRooms$, showNotFindMessage$ } from "../../../recoil/atoms";

type Props = PropsWithChildren<{to: string, children: string | JSX.Element}>

export const MyHookLink = ({to, children}: Props) => {
  const setUnoccupiedRooms = useSetRecoilState(unoccupiedRooms$)
  const setShowNotFindMessage = useSetRecoilState(showNotFindMessage$)
  
  const clickLink =()=> {
    setUnoccupiedRooms([])
    setShowNotFindMessage(false)
  }
  return (
    <Link to={to} onClick={clickLink}>
      {children}
    </Link>
  )
}
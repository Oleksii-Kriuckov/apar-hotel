import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { useSetRecoilState } from "recoil";
import { unoccupiedRooms$ } from "../../../recoil/atoms";

type Props = PropsWithChildren<{to: string, children: string | JSX.Element}>

export const MyHookLink = ({to, children}: Props) => {
  const setUnoccupiedRooms = useSetRecoilState(unoccupiedRooms$)
  
  return (
    <Link to={to} onClick={() => setUnoccupiedRooms([])}>
      {children}
    </Link>
  )
}
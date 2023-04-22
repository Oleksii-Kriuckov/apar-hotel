import React, { Children } from 'react'
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{children: string, src: any, alt: string}>

export const HeaderLink = (props: Props) => {
  return (
    <div>
        <img src={props.src} alt={props.alt} className='linkImg me-1'/>
        <span style={{textTransform: 'uppercase'}}>{props.children}</span>
    </div>
  )
}
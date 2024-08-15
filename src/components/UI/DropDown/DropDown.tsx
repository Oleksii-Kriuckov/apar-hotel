import { PropsWithChildren } from "react";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './style.css'

type Props = PropsWithChildren<{ children: string; items: MenuProps['items']; styles: object }>;

export const MyDropDown = ({children, items, styles}: Props) => {
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space style={styles} onClick={()=> console.log('click')}>
        {children}
        {/* <DownOutlined /> */}
      </Space>
    </Dropdown >
  )
}
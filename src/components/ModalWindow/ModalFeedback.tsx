import React, { useState } from 'react';
import { Button, ConfigProvider, Modal, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { useRecoilState } from 'recoil';
import '../UI/Buttons/style.css'

type Props = {}

const ModalFeedback: React.FC = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => { 
    setIsModalOpen(true)
    setTimeout(() => setIsModalOpen(false), 3000)
  }

  return (
    <>
      <Button onClick={openModal}>Open</Button>
        <Modal
          title="Ви успішно відправили повідомлення"
          open={isModalOpen}
          // afterClose={() => setIsModalOpen(false)}
          // onOk={}
          onCancel={() => setIsModalOpen(false)}
          closable={false}
          centered
          // maskClosable={false}
          footer={[
            <Button
              type='primary'
              className='modal_fdb'
              key='Ok'
              onClick={() => setIsModalOpen(false)}
            >
              Ok
            </Button>
          ]}
        />
    </>
  );
};

export default ModalFeedback;
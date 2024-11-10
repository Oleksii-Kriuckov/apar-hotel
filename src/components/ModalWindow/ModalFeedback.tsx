import React from 'react';
import { Button, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { isShowModalFeedback$ } from '../../recoil/atoms';
import '../UI/Buttons/style.css'

const ModalFeedback: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isShowModalFeedback$);

  return (
    <>
      <Modal
        title="Ви успішно відправили повідомлення"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        closable={false}
        centered
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
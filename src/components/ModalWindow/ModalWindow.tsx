import React, { useState } from 'react';
import { Button, ConfigProvider, Modal, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { useRecoilState } from 'recoil';
import { isShowModal$ } from '../../recoil/atoms';
import { info_ua } from '../../assets/Info';
import '../UI/Buttons/style.css'

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    // background: token.blue1,
    padding: token.paddingSM,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    // border: '1px solid #333',
  },
}));

const ModalWindow: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isShowModal$);
  const { styles } = useStyle();
  const token = useTheme();

  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  };

  const modalStyles = {
    header: {
      // borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
      marginTop: 10
    },
    body: {
      // boxShadow: 'inset 0 0 5px #a91959',
      paddingTop: 20,
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    // footer: {
    //   borderTop: '1px solid #333',
    // },
    content: {
      boxShadow: '0 0 30px #394959',
    },
  };

  return (
    <>
      <ConfigProvider
        modal={{
          classNames,
          styles: modalStyles,
        }}
      >
        <Modal
          title="Важливе повідомлення"
          open={isModalOpen}
          // afterClose={() => setIsModalOpen(false)}
          // onOk={}
          // onCancel={() => setIsModalOpen(false)}
          closable={false}
          centered
          // maskClosable={false}
          footer={[
            <Button
              type='primary'
              className='modal_btn'
              key='Ok'
              onClick={() => setIsModalOpen(false)}
            >
              Ok
            </Button>
          ]}
        >
          <p style={{ fontSize: 'large' }}>{info_ua.mainWarningMessage}</p>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalWindow;
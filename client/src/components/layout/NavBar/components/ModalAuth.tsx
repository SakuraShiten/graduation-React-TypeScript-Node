import React, { FC } from 'react'
import Modal from '../../../modules/Modal'
import { InputsAuth } from '../../../widgets/InputsAuth';
import TTest from '../../../widgets/TTest';

interface ModalAuthProps {
  activeModalAuth: boolean;
  setActiveModal: (arg: boolean) => void;
}



const ModalAuth: FC<ModalAuthProps> = ({ activeModalAuth, setActiveModal }) => {

  return (
    <Modal
      activeModal={activeModalAuth}
      setActiveModal={setActiveModal}
    >
      <InputsAuth />
      <TTest />
    </Modal>
  )
}

export default ModalAuth
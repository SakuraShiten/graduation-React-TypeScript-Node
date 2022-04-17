import React, { FC, useCallback, useState } from 'react'
import Modal from '../../../modules/Modal'
import UniversalBtn from '../../../widgets/UniversalBtn';
import UniversalInput from '../../../widgets/UniversalInput';
import styled from 'styled-components';

const StyledForm = styled.form`
  text-align: center;
  z-index: 9999;
`

interface ModalAuthProps {
  activeModalAuth: boolean;
  setActiveModal: (arg: boolean) => void;
}



const ModalAuth: FC<ModalAuthProps> = ({ activeModalAuth, setActiveModal }) => {

  const [authPhone, setAuthPhone] = useState<string>("")
  const [authPass, setAuthPass] = useState<string>("")

  const changePhone = (e: React.ChangeEvent<{ rawValue: string }>) => {
    setAuthPhone(e.target.rawValue)
  }
  const changePassword = (e: React.ChangeEvent<{ rawValue: string }>) => {
    setAuthPass(e.target.rawValue)
  }
  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(authPhone, authPass)
  }

  return (
    <Modal
      activeModal={activeModalAuth}
      setActiveModal={setActiveModal}
    >
      <StyledForm onSubmit={formSubmit}>
        <h2>Авторизация</h2>
        <UniversalInput
          options={{
            prefix: '+7',
            blocks: [2, 3, 3, 2, 2],
            delimiters: ['(', ')', '-', '-'],
            numericOnly: true,
            noImmediatePrefix: true
          }}
          placeholder="Номер телефона"
          onChange={changePhone}
        />
        <UniversalInput
          placeholder="Пароль"
          onChange={changePassword}
        />
        {/* Добавить компонентом предложение регистрации */}
        <UniversalBtn type="submit">Авторизироваться</UniversalBtn>

      </StyledForm>
    </Modal>
  )
}

export default ModalAuth
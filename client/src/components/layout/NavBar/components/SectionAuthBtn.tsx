import React, { FC, useState } from 'react'
import styled from 'styled-components';
import Modal from '../../../modules/Modal';
import ModalAuth from './ModalAuth';
import NavBtn from './NavBtn';

const StyledSectionBtn = styled.div`
position: absolute;
display: flex;
top: 50%;
transform: translateY(-50%);
right: 0px;
justify-content: space-around;
`

const SectionBtn: FC = () => {
    const [activeModalAuth, setActiveModalAuth] = useState<boolean>(false)

    return (
        <div>
            <ModalAuth
                activeModalAuth={activeModalAuth}
                setActiveModal={setActiveModalAuth}
            />
            <StyledSectionBtn>
                <NavBtn onClick={() => setActiveModalAuth(true)}>Авторизироваться</NavBtn>
            </StyledSectionBtn>
        </div>
    )
}

export default SectionBtn
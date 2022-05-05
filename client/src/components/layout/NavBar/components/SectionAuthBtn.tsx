import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../../../context/AuthContext';
import Modal from '../../../modules/Modal';
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
    const navigate = useNavigate();
    const { isAuth } = useAuthContext()
    return (
        <div>
            <StyledSectionBtn>
                <NavBtn onClick={() => navigate('moder')}>
                    {isAuth ? "Панель модерации" : "Авторизироваться"}
                    </NavBtn>
            </StyledSectionBtn>
        </div>
    )
}

export default SectionBtn
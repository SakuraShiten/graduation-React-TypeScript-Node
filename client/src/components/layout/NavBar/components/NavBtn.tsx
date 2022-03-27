import React, { FC } from 'react'
import styled from 'styled-components';

// изменить типа на кнопку
const StyledNavBtn = styled.p`
    font-size: 16px;
    color: #000;
    cursor: pointer;
    margin-right: 30px;
    position: relative;
    transition: 0.3s;
    &::before{
        position:absolute;
        bottom:0;
        left:50%;
        width:0%;
        transform: translateX(-50%);
        border-bottom:1.5px solid #000;
        transition: 0.3s;
        content:"";
    }
    &:hover{
        &::before{
            width:100%;
        }
    }
`

interface NavBtnProps {
    onClick: () => void;
}

const NavBtn: FC<NavBtnProps> = ({ children, onClick }) => {
    return (
        <StyledNavBtn onClick={onClick}>{children}</StyledNavBtn>
    )
}

export default NavBtn
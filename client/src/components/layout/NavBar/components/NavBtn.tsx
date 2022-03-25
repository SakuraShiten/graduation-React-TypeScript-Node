import React, { FC } from 'react'
import styled from 'styled-components';

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

const NavBtn: FC = ({ children }) => {
    return (
        <StyledNavBtn>{children}</StyledNavBtn>
    )
}

export default NavBtn
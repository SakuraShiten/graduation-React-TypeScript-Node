import React, { FC } from 'react'
import styled from 'styled-components';

const StyledUniversalBtn = styled.button`
    background-color: #fff;
    border: 1px solid #000;
    padding: 2px 10px 2px 10px;
    font-size: 16px;
    cursor: pointer;
    transition:0.3s;
    margin-top: 10px;
    :hover{
        background-color: #000;
        color: #fff;
    }
`

interface UniversalBtnProps {
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button',
}

const UniversalBtn: FC<UniversalBtnProps> = ({ children, onClick, type }) => {
    return (
        <StyledUniversalBtn type={type || "button"} onClick={onClick}>{children}</StyledUniversalBtn>
    )
}

export default UniversalBtn
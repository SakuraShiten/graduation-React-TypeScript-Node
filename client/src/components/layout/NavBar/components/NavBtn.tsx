import React, { FC } from 'react'
import styled from 'styled-components';

const StyledNavBtn = styled.p`
font-size: 16px;
color: #000;
cursor: pointer;
margin-right: 30px;
`

const NavBtn: FC = ({ children }) => {
    return (
        <StyledNavBtn>{children}</StyledNavBtn>
    )
}

export default NavBtn
import React, { FC } from 'react'
import { IURL } from '../../../types/types'
import styled from 'styled-components';
import SectionBtn from './components/SectionBtn';
import Logo from './components/Logo';

const StyledNavBar = styled.div`
    width: 100vw;
    height:10vh;
    background-color: #fff;
    align-items: center;
    position: relative;
`

const NavBar: FC = () => {
    return (
        <StyledNavBar>
            <SectionBtn />
            <Logo />
        </StyledNavBar>
    )
}

export default NavBar
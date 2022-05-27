import React, { FC } from 'react'
import styled from 'styled-components';
import SectionNavBtn from './components/SectionNavBtn';
import Logo from './components/Logo';
import SectionAuthBtn from './components/SectionAuthBtn';
import Modal from '../../modules/Modal';

const StyledNavBar = styled.div`
    width: 100%;
    height:10vh;
    background-color: #fff;
    align-items: center;
    position: relative;
`


const NavBar: FC = () => {

    return (
        <StyledNavBar>
            <SectionNavBtn />
            <Logo />
            <SectionAuthBtn />
        </StyledNavBar>
    )
}

export default NavBar
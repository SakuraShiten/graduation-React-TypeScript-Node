import React, { FC } from 'react'
import NavBar from '../../components/layout/NavBar/NavBar'
import styled from 'styled-components';
import fonImage from './static/fon.jpg'

const StyledIndexFon = styled.div`
    width: 100vw;
    height: 50vh;
    background: url(${fonImage});
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: 66% 73%;
    display:flex;
    flex-direction: column;
    align-items: center;
    color:#fff;
   
    &>h1{
        margin-top:15vh;
        font-size: 40px;
        text-shadow: 0px 1px 10px black,
        0px 1px 10px black,
        1px 0px 10px black,
        -1px 0px 10px black;
    }
    &>p{
        margin-top:6vh;
        cursor: pointer;
        font-size: 24px;
        text-decoration: underline;
        text-shadow: 0px 1px 5px black;
    }
`

const StyledIndexInfo = styled.div`


`

const Index: FC = () => {
    return (
        <div>
            <NavBar />
            <StyledIndexFon>
                <h1>Боулинг клуб / Ресторан</h1>
                <p>Забронировать сейчас</p>
            </StyledIndexFon>
            <StyledIndexInfo>
                
            </StyledIndexInfo>
        </div>
    )
}

export default Index
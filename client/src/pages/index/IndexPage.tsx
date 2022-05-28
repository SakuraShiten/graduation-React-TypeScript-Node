import React, { FC } from 'react'
import NavBar from '../../components/layout/NavBar/NavBar'
import styled, { keyframes } from 'styled-components';
import fonImage from './static/fon.jpg'
import AnimLine from './AnimLine';
import FonBtn from './FonBtn';


const StyledIndexFon = styled.div`
    width: 100vw;
    height: 60vh;
    background: url(${fonImage});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0% 52%;
    display:flex;
    flex-direction: column;
    align-items: center;
    color:#fff;
    &>h1{
        margin-top:17vh;
        font-size: 40px;
        /* text-shadow: 0px 1px 10px black,
        0px 1px 10px black,
        1px 0px 10px black,
        -1px 0px 10px black; */
    }
    @media only screen and (max-width: 768px){
        background-size: cover;
        margin-top: 5vh;
        
        background-position: left;

        >h1{
            font-size:7vw;
        }
    }
`

const StyledIndexInfo = styled.div`
    position: relative;
    display: flex;
    padding: 0 100px 0 100px;
    justify-content: space-between;
    background-color: #fffcf7;
    height: 30vh;
    >div:not(:last-child){
        flex-basis:30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        >p{
            font-size: 18px;
            margin-top: 0.5vh;
            border-bottom: 1px solid #000;
            
        }
        >h3{
            margin-top: 3vh;
            font-size: 22px;
        }
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        margin-bottom: 2vh;
        height: auto;
    }
`

const Index: FC = () => {
    return (
        <div>
            <StyledIndexFon>
                <h1>Боулинг клуб / Ресторан</h1>
                <FonBtn />
            </StyledIndexFon>
            <StyledIndexInfo>
                <div>
                    <h3>У нас имеется:</h3>
                    <p>Танцпол</p>
                    <p>Караоке зал</p>
                    <p>Паровые коктейли</p>
                    <p>Большой банкетный зал</p>
                </div>
                <div>
                    <h3>Время работы:</h3>
                    <p>Четверг-воскресенье<br></br>с 18.00 до 6:00</p>
                    <p>Понедельник-Среда<br></br>Нерабочие дни</p>
                </div>

                <div>
                    <h3>Телефон для справок:</h3>
                    <p>8 (3476) 34-69-00</p>
                    <p>8 (917) 045-80-00</p>
                </div>
                <AnimLine />
            </StyledIndexInfo>
        </div>
    )
}

export default Index
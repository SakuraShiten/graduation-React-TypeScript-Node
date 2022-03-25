import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components';

const AnimationBtnFon = keyframes`
0%{
    width:100%;
    bottom:0;
}
45%{
    width:0%;
    bottom:0;
    transform: translateX(100%);
}
55%{
    transform: translateX(150%);
    width:0%;
    bottom:100%;
}
100%{
    transform: translateX(0%);
    width:100%;
    bottom:100%;
}
`
const StyledFonBtn = styled.p`
    margin-top:1vh;
    cursor: pointer;
    font-size: 24px;
    text-shadow: 0px 1px 5px black;
    transition: 0.3s;
    position: relative;
    ::before{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        border-bottom:3px solid #fff;
        transition: 0.3s;
        content:"";
    }
    :hover::before{
        animation: ${AnimationBtnFon} 1s linear;
        bottom:100%;
    }
`

const FonBtn: FC = () => {
    return (
      <StyledFonBtn>Забронировать сейчас</StyledFonBtn>
    )
}

export default FonBtn
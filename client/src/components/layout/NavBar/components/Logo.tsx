import React, { FC } from 'react'
import styled from 'styled-components';

const StyledLogo = styled.div`
font-size: 20px;
padding: 5px 10px 5px  10px;
color:#000;
border: 2.5px solid #000;
display: flex;
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px){
    
}
`

const Logo: FC = () => {
    return (
        <StyledLogo>
            <p>Боулинг клуб</p>
        </StyledLogo>
    )
}

export default Logo
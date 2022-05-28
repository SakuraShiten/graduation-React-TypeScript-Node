import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { listURL } from '../../../../utils/navigation'
import NavBtn from './NavBtn';

const StyledSectionBtn = styled.div`
position: absolute;
display: flex;
top: 50%;
transform: translateY(-50%);
left: 40px;
justify-content: space-around;
@media only screen and (max-width: 768px){
    left:0;
    width:100%;
    top:7vh;
    transform: none;
    >p{
        width: 30%;
        margin: 0;
        text-align: center;
    }
}
`

const SectionBtn: FC = () => {
    const navigate = useNavigate();
    return (
        <StyledSectionBtn>
            {listURL.map(item => <NavBtn onClick={() =>navigate(item.URL)}key={item.URL}>{item.header}</NavBtn>)} 
        
        </StyledSectionBtn>
    )
}

export default SectionBtn
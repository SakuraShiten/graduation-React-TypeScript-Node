import React, { FC } from 'react'
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
`

const SectionBtn: FC = () => {
    return (
        <StyledSectionBtn>
            {listURL.map(item => <NavBtn>{item.header}</NavBtn>)}
        </StyledSectionBtn>
    )
}

export default SectionBtn
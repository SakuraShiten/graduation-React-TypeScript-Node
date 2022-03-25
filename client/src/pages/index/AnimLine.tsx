import React, { FC } from 'react'
import styled, {keyframes} from 'styled-components';

const AnimationLine = keyframes`
    0%{width: 100%; left:0%;}
    10%{width: 100%; left:0%;}
    20%{width: 20%; left:10%;}
    30%{width: 20%; left:10%;}
    45%{width: 20%; left:40%;}
    55%{width: 20%; left:40%;}
    65%{width: 20%; left:70%;}
    75%{width: 20%; left:70%;}
    90%{width: 100%; left:0%;}
    100%{width: 100%; left:0%;}
`

const StyledAnimLine = styled.div`
    position: absolute;
    width: 100%;
    left:0%;
    top:0.5vh;
    animation: ${AnimationLine} 15s linear infinite;
    background-color: #000;
    height: 0.5vh;
`

const AnimLine: FC = () => {
    return (
        <StyledAnimLine>
            <div></div>
            <div></div>
        </StyledAnimLine>
    )
}

export default AnimLine
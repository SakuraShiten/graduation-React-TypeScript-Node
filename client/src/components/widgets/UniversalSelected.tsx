import React, { FC } from 'react'
import styled from 'styled-components';

const StyledUniversalSelect = styled.select`
    margin-top:10px;
    position: relative;
    width: 100%;
    font-size:18px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #000;
    position: relative;
    transition: 0.2s;
    padding: 5px 10px;
    background-color: #fff;
    :focus{
        outline: none;
        border: 2px solid #2b96f1;
    }
    :active{
        border-color: #2b96f1;
    }
`

interface UniversalSelected {
    onChange?: (event: React.ChangeEvent) => void;
}

const UniversalSelected: FC<UniversalSelected> = ({  onChange }) => {
    return (
        <StyledUniversalSelect
            onChange={onChange}
            defaultValue="none"
            required
        >
            <option disabled value="none">Услуга</option>
            <option value="Боулинг">Боулинг</option>
            <option value="Караоке зал">Караоке зал</option>
            <option value="Танцпол">Танцпол</option>
        </StyledUniversalSelect>
    )
}

export default UniversalSelected
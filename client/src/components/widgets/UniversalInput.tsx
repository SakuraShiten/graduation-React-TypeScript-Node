import React, { FC, useCallback } from 'react'
import styled from 'styled-components';
import Cleave from 'cleave.js/react';

const StyledUniversalInput = styled.div`
    margin-top:10px;
    position: relative;
    >input{
        width: 100%;
        font-size:18px;
        padding: 5px;
        border-radius: 10px;
        border: 2px solid #000;
        position: relative;
        transition: 0.2s;
        padding: 5px 10px;
        :not([value=""]){
            +label{
                top:0px;
                font-size:14px;
            }
        }
       
        :focus{
            outline:none;
            border-color: #2b96f1;
            +label{
                top:0px;
                font-size:14px;
                color:#2b96f1;
            }
        }
    }
    >label{
        padding: 0px 3px;
        background-color: #fff;
        transition: 0.2s;
        color:#000;
        left:10px;
        transform: translateY(-50%);
        top:50%;
        position: absolute;
        pointer-events:none;
        z-index: inherit;
    }
`

interface UniversalInputProps {
    // onChange?: (event: React.ChangeEvent<HTMLInputElement & { rawValue: string }>) => void,
    onChange?: (e: any) => void,
    options?: {},
    placeholder: string,
    type?: any,
    value?: string
}

const UniversalInput: FC<UniversalInputProps> = ({ value, onChange, options = null, placeholder, type = "text" }) => {
    return (
        <StyledUniversalInput>
            {options
                ? <Cleave
                    options={options || {}}
                    onChange={onChange}
                    type={type}
                />
                : <input
                    onChange={onChange}
                    type={type}
                    value={value}
                />}
            <label>{type !== "file" && placeholder}</label>
        </StyledUniversalInput>
    )
}

export default UniversalInput
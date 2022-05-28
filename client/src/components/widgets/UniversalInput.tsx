import React, { FC, useCallback } from 'react'
import styled from 'styled-components';
import IMask from 'imask';

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
    onChange?: (e: any) => void,
    placeholder: string,
    type?: any,
    value?: string
    required?:boolean
}

const UniversalInput: FC<UniversalInputProps> = ({required =false, value, onChange, placeholder, type = "text" }) => {
   
    return (
        <StyledUniversalInput>
            <input id="asd"
                onChange={onChange}
                type={type}
                value={value}
                required={required}
            />
            <label>{type !== "file" && placeholder}</label>
        </StyledUniversalInput>
    )
}

export default UniversalInput
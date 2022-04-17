import React, { FC, useState } from 'react'
import styled from 'styled-components';

const StyledDayItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1.5px solid #000;
  border-radius: 4px;
  min-width: 10%;
  max-width: 20%;
  width: 13%;
  cursor: pointer;
  align-items: center;
  justify-content:center;
  transition:0.3s;
  margin: 0.3vh 0.3vh;
  color:${props => !props.active ? "#000" : "#fff"};
  background-color: ${props => !props.active ? "#fff" : "#2b96f1"};
  :hover{
    border-color: ${props => !props.active ? "#2b96f1" : "#000"};
    color:${props => !props.active ? "#2b96f1" : "#000"};
  }
  
`

interface DayItemProps {
  header?: string,
  body?: string,
  active?: boolean,
  onClick?: () => void,
}

const DayItem: FC<DayItemProps> = ({ header, body, onClick = () => { }, active = false }) => {

  const handlerClick = (e: any) => {
    e.stopPropagation()
    onClick()
  }

  return (
    <StyledDayItem active={active} onClick={handlerClick}>
      <h2>{header}</h2>
      <p>{body}</p>
    </StyledDayItem>
  )
}

export default DayItem
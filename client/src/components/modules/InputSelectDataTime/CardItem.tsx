import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { toast } from 'react-toastify';


const StyledDayItem = styled.div<{ cardVariant: any }>`
  box-shadow: 2px;
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
  color:${({ cardVariant }) => cardVariant == "select" ? "#000" :
    cardVariant === "active" ? "#fff" : "#fff"};
  background-color: ${({ cardVariant }) => cardVariant == "select" ? "#fff" :
    cardVariant === "active" ? "#2b96f1" : "#000"};
  :hover{
  color:${({ cardVariant }) => cardVariant == "select" ? "#2b96f1" :
    cardVariant === "active" ? "#000" : "#fff"};
  border-color: ${({ cardVariant }) => cardVariant == "select" ? "#2b96f1" :
    cardVariant === "active" ? "#000" : "#000"};
}

`




interface DayItemProps {
  header?: string,
  body?: string,
  active?: "select" | "active" | "disabled",
  onClick?: () => void,
}

const DayItem: FC<DayItemProps> = ({ header, body, onClick = () => { }, active = "select" }) => {

  const handlerClick = (e: any) => {
    e.stopPropagation()
    if (active !== "disabled")
      onClick()
    else toast.warning("Выбирайте только ближайшие часы")
  }

  return (
    <StyledDayItem cardVariant={active} onClick={handlerClick} >
      <h2>{header}</h2>
      <p>{body}</p>
    </StyledDayItem >
  )
}

export default DayItem
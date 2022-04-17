import React, { FC, useEffect } from 'react'
import NavBar from '../../components/layout/NavBar/NavBar'
import styled from 'styled-components';
import FormNewBooking from '../../components/modules/FormNewBooking';

const StyledBookingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  >h1{
    color:#fff;
    background:#000 ;
    width: 100%;
    text-align: center;
  }   
  
`

const BookingPage: FC = () => {

  return (
    <div>
      <NavBar />
      <StyledBookingPage>
        <h1>Бронирование</h1>
        <FormNewBooking />
      </StyledBookingPage>

    </div>
  )
}

export default BookingPage
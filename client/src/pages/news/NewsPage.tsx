import React, { FC } from 'react'
import NavBar from '../../components/layout/NavBar/NavBar'
import styled from 'styled-components';
import UniversalBtn from '../../components/widgets/UniversalBtn';
import Modal from '../../components/modules/Modal';

const StyledNewsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  >h2{
    color:#fff;
    width:100%;
    text-align: center;
    background-color: #000000;
   
  }
`
const StyledImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
::before,::after{
  content:"";
  background-color:#000;
  position:absolute;
  width:30%;
  height:60%;
  z-index:-1;
}
::before{
  top:-4px;
  left:-4px;
}
::after{
  bottom:-4px;
  right:-4px;
}
>img{

  width: 100%;
  height:100%;
  object-fit: cover;
  object-position: center;
}
`
const StyledNewsPage_Content = styled.div`
  display: flex;
  width: 85%;
  margin-top: 3vh;
  justify-content:space-between;
  height: 70vh;
  
  >div{
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 75vh;
    >p{
      margin-top: 2vh;
      height:100%;
      
    }
  }
`
const StyledNewsPage_Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledNewsPage_GroupBtn = styled.div`
  display: flex;
  width:40%;
  justify-content: space-between;
  align-self: flex-end;
`

const NewsPage: FC = () => {
  return (
    <div>
      <NavBar />
      <StyledNewsPage>
        <h2>Наши новости</h2>
        <StyledNewsPage_Content>
          <div>
            <StyledNewsPage_Header>
              <h3>Заголовок</h3>
              <p>Дата</p>
            </StyledNewsPage_Header>
            <p>Текст Текст Текст ТекстТекстТекстТекст Текст Текст ТекстТекстТекстТекст Текст Текст ТекстТекстТекстТекст Текст Текст ТекстТекстТекстТекст Текст Текст ТекстТекстТекстТекст Текст Текст ТекстТекстТекст</p>
            <StyledNewsPage_GroupBtn>
              <UniversalBtn onClick={() => console.log("asdasd")}>Назад</UniversalBtn>
              <UniversalBtn onClick={() => console.log("asdasd")}>Вперёд</UniversalBtn>
            </StyledNewsPage_GroupBtn>
          </div>
          <StyledImage>
            <img src="https://sun9-83.userapi.com/impf/nDGZ5fR8nj4hS1RSbDZ5LB2d0IU-t2kqTJYuUA/jyiogyXR5kU.jpg?size=1080x1350&quality=96&sign=2f20de14e4911de50d302a428c98d4bc&type=album" alt="картинка" />
          </StyledImage>
        </StyledNewsPage_Content>
      </StyledNewsPage>
    </div>
  )
}

export default NewsPage
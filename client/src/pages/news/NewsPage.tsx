import React, { FC, useEffect, useState } from 'react'
import NavBar from '../../components/layout/NavBar/NavBar'
import styled from 'styled-components';
import UniversalBtn from '../../components/widgets/UniversalBtn';
import { INews } from '../../types/types';
import { fetchNewsGetAll } from '../../API/publicAPI';

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
  const [allNews, setAllNews] = useState<INews[]>([])
  const [selectNews, setSelectNews] = useState<number>(0)

  const nextSelectNews = () => {
    const count: number = selectNews + 1 > allNews.length - 1 ? 0 : selectNews + 1
    setSelectNews(count)
  }
  const prevSelectNews = () => {
    const count: number = selectNews - 1 < 0 ? allNews.length - 1 : selectNews - 1
    setSelectNews(count)
  }

  const loadAllNews = async () => {
    fetchNewsGetAll()
      .then(data =>
        setAllNews(data)
      )
  }

  useEffect(() => {
    loadAllNews()
  }, [])

  return (
    <div>
      <StyledNewsPage>
        <h2>Наши новости</h2>
        <StyledNewsPage_Content>
          <div>
            <StyledNewsPage_Header>
              <h3>{allNews[selectNews]?.header}</h3>
              <p>{new Date(allNews[selectNews]?.date).toLocaleDateString()}</p>
            </StyledNewsPage_Header>
            <p>{allNews[selectNews]?.body}</p>
            <StyledNewsPage_GroupBtn>
              <UniversalBtn onClick={prevSelectNews}>Назад</UniversalBtn>
              <UniversalBtn onClick={nextSelectNews}>Вперёд</UniversalBtn>
            </StyledNewsPage_GroupBtn>
          </div>
          <StyledImage>
            <img src={process.env.REACT_APP_API_URL + '/image/' + allNews[selectNews]?.img} alt="картинка" />
          </StyledImage>
        </StyledNewsPage_Content>
      </StyledNewsPage>
    </div>
  )
}

export default NewsPage
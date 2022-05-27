import { FC } from 'react'
import styled from 'styled-components'
import UniversalBtn from '../../../components/widgets/UniversalBtn'

const StyledNewsItem = styled.div`
    >p{
    }
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    padding: 0.5vh 0;
    display: flex;
    flex-direction: column;
    width: 50vw;
    justify-content:space-between;
    margin:  2vh 0 ;
`

interface NewsItemProps {
    headerText: string[],
    extra?: string
    btnText?: string,
    onClick?: () => void,
    btnOff?: boolean
}

const NewsItem: FC<NewsItemProps> = ({ extra = "", headerText, onClick, btnText, btnOff = true }) => {
    return (
        <StyledNewsItem>
            {headerText.map(item => <p>{item}</p>)}
            {extra && <p>{extra}</p>}
            {btnOff && <UniversalBtn onClick={onClick}>{btnText}</UniversalBtn>}
        </StyledNewsItem>
    )
}
export default NewsItem
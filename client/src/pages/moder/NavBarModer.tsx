import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify';


const StyledNavBarModer = styled.div`
    display: flex;
    background-color: #000;
    color:#fff;
    width: 100%;
    height: 5vh;
    align-items: center;
    padding:0 3vw;
   
`

const StyledNavBarBtn = styled.p<{ active: boolean }>`
    transition: 0.3s;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    padding: 0 0.5vw;
    margin: 0 0.1vw;
    border: 1px solid #000;
    background-color: ${({ active }) => active ? "#fff" : "#000"};
    color: ${({ active }) => active ? "#000" : "#fff"};
    transform: ${({ active }) => active ? "translateY(10%)" : "translateY(0%)"};
    :hover{
        background-color: #fff;
        color: #000;
        transform: translateY(10%);
    }
    :last-child{
        margin-left: auto;
    } 
`

interface NavBarModerProps {
    arrayNavBarBtn: string[]
    selectPanel: string
    setSelectPanel: (value: string) => void
}

const NavBarModer: FC<NavBarModerProps> = ({ arrayNavBarBtn, selectPanel, setSelectPanel }) => {

    const { isAuth, setIsAuth } = useAuthContext()
    const [moderHeader, setModerHeader] = useState<string | null>(null)


    const deauthorization = () => {
        toast.success("Успешная деавторизация")
        localStorage.removeItem('login')
        localStorage.removeItem('password')
        localStorage.removeItem('fio')
        localStorage.removeItem('role')
        setIsAuth(false)
    }



    const changeSelectPanel = (value: string) => {
        setSelectPanel(value)
    }

    return (
        <StyledNavBarModer>
            {arrayNavBarBtn.map(item =>
                <StyledNavBarBtn onClick={() => changeSelectPanel(item)}
                    key={item} active={item === selectPanel}>{item}</StyledNavBarBtn>
            )}
            <StyledNavBarBtn active={false} onClick={deauthorization}>{localStorage.getItem('fio')} : Выйти</StyledNavBarBtn>
        </StyledNavBarModer>
    )
}
export default NavBarModer
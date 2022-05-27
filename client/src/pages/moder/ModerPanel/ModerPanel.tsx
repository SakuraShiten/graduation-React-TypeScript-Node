import { FC, useState } from 'react'
import styled from 'styled-components'
import NavBarModer from '../NavBarModer'
import BookingPanel from './BookingPanel'
import ClientPanel from './ClientPanel'
import NewsPanel from './NewsPanel'
import NoticePanel from './NoticePanel'
import UserPanel from './UserPanel'

const StyledModerPanel = styled.div`
    width: 100%;
`

interface ModerPanelProps {

}

const ModerPanel: FC<ModerPanelProps> = () => {
    const arrayNavBarBtn = [
        "Новости", "Бронирование", "Клиенты", "Уведомления"
    ]
    if (localStorage.getItem('role') === "ADMIN") arrayNavBarBtn.push("Модераторы")
    const [selectPanel, setSelectPanel] = useState<string>(arrayNavBarBtn[0])
    // поменять на циферную привязку из массива


    return (
        <StyledModerPanel>
            <NavBarModer
                arrayNavBarBtn={arrayNavBarBtn}
                selectPanel={selectPanel}
                setSelectPanel={(value) => setSelectPanel(value)}
            />
            {selectPanel === "Новости" && <NewsPanel />}
            {selectPanel === "Бронирование" && <BookingPanel />}
            {selectPanel === "Клиенты" && <ClientPanel />}
            {selectPanel === "Уведомления" && <NoticePanel />}
            {selectPanel === "Модераторы" && <UserPanel />}
        </StyledModerPanel>
    )
}
export default ModerPanel
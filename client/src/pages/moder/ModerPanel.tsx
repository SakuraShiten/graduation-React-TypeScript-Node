import { FC, useState } from 'react'
import styled from 'styled-components'
import NavBarModer from './NavBarModer'

const StyledModerPanel = styled.div`
    width: 100%;
`

interface ModerPanelProps {

}

const ModerPanel: FC<ModerPanelProps> = () => {
    const arrayNavBarBtn = [
        "Новости", "Бронирование", "Клиенты", "Уведомления", "Модераторы"
    ]
    const [selectPanel, setSelectPanel] = useState<string>(arrayNavBarBtn[0])



    return (
        <StyledModerPanel>
            <NavBarModer
                arrayNavBarBtn={arrayNavBarBtn}
                selectPanel={selectPanel}
                setSelectPanel={(value) => setSelectPanel(value)}
            />
        </StyledModerPanel>
    )
}
export default ModerPanel
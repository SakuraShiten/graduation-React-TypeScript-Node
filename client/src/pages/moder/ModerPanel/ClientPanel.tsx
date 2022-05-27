import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchClietGetAll } from '../../../API/publicAPI'
import ModerItem from './ModerItem'

const StyledClientPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface ClientPanelProps {

}

const ClientPanel: FC<ClientPanelProps> = () => {

    const [clientList, setClientList] = useState<[{ fio: string, tel: string, mail: string,_id: string}]>()

    useEffect(() => {
        fetchClietGetAll()
            .then(data => setClientList(data))
    }, [])

    return (
        <StyledClientPanel>
            {clientList && clientList.map(item =>
                <ModerItem
                    key={item._id}
                    headerText={[
                        `ФИО: ${item.fio}`,
                        `Контакты: ${item.tel} ${item.mail}`
                    ]}
                    btnOff={false}
                />
            )}
        </StyledClientPanel>
    )
}
export default ClientPanel
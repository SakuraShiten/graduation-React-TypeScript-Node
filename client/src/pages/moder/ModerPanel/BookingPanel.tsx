import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { fetchBookingCancel, fetchBookingGetAll } from '../../../API/publicAPI'
import { IBooking, IBookingAndClient } from '../../../types/types'
import { timeFormatter } from '../../../utils/utilsFunc'
import ModerItem from './ModerItem'

const StyledBookingPanel = styled.div`
    >h1{
        margin-top: 2vh;
    }
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
`

interface BookingPanelProps {

}

const BookingPanel: FC<BookingPanelProps> = () => {

    const [bookingList, setBookingList] = useState<IBookingAndClient[] | null>(null)

    const bookingCancel = (_id: string) => {
        fetchBookingCancel(_id, localStorage.getItem('login'), localStorage.getItem('password'))
            .then(data => {
                toast.success("Заказ отменён")
                loadBookink()
            })
    }

    const loadBookink = () => {
        fetchBookingGetAll()
            .then(data => {
                setBookingList(data)
            })
    }

    useEffect(() => {
        loadBookink()
    }, [])

    return (
        <StyledBookingPanel>
            <h1>Список заказов</h1>
            {bookingList && bookingList.map(item =>
                <ModerItem
                    key={item._id}
                    headerText={[
                        `День: ${item.date}, Врёмя: ${timeFormatter(JSON.parse(item.time))}`,
                        `Сервис: ${item.service}`,
                        `Статус: ${item.status}`,
                        `Клиент: ${item.ownerClient.fio}`,
                        `Контакты: ${item.ownerClient.tel} ${item.ownerClient.mail}`,
                        `Описание: ${item?.about || "Отсутствует"}`,
                    ]}
                    extra={item.ownerUser && `Отменил: ${item.ownerUser?.fio}`}
                    btnText="Отменить"
                    onClick={() => bookingCancel(item._id)}
                    btnOff={!item.ownerUser}
                />
            )}
        </StyledBookingPanel>
    )
}
export default BookingPanel
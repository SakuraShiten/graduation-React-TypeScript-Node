import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { IBooking } from '../../../types/types'
import { createDayList } from '../../../utils/utilsFunc'
import CardItem from './CardItem'

const StyledListDay = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

interface ListDayProps {
    formData: IBooking,
    setFormData: (data: IBooking) => void,
}

const ListDay: FC<ListDayProps> = ({ formData, setFormData }) => {
    const [dayList, setDayList] = useState<{ dayName: string, dayNumber: string }[]>([])

    const changeDayList = (day: string) => {
        setFormData({ ...formData, date: day })
    }

    useEffect(() => {
        setDayList(createDayList(8))
    }, [])

    return (
        <StyledListDay>
            {dayList.map(item => <CardItem
                key={item.dayNumber}
                header={item.dayName}
                body={item.dayNumber}
                onClick={() => changeDayList(item.dayNumber)}
            />)
            }
        </StyledListDay>
    )
}
export default ListDay
import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { fetchGetSpacesTime } from '../../../API/publicAPI'
import { useIsLoading } from '../../../hooks/useIsLoading'
import { IBooking } from '../../../types/types'
import CardItem from './CardItem'

const StyledListTime = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: center;
`

interface ListTimeProps {
    formData: IBooking,
    setFormData: (data: IBooking) => void,
}

const ListTime: FC<ListTimeProps> = ({ formData, setFormData }) => {
    const [spaceTime, isLoadSpaceTime, loadSpaceTime] = useIsLoading(fetchGetSpacesTime)

    useEffect(() => {
        if (formData.date) loadSpaceTime(formData.date,formData.service)
    }, [formData.date])

    const checkActiveCard = (item: number) => {
        const checkEmpty = formData.time.length
        const checkActive = formData.time.includes(item)
        if (!checkEmpty) return "select"
        if (checkActive) return "active"
        for (let i = 0; i < checkEmpty; i++) {
            if (item + 1 === formData.time[i]) return "select"
            if (item - 1 === formData.time[i]) return "select"
            if (item === 23 && formData.time.includes(0)) return "select"
            if (item === 0 && formData.time.includes(23)) return "select"
        }
        return "disabled"
    }

    const changeTimeList = (time: number) => {
        if (formData.time.includes(time)) {
            if ((time !== formData.time[0] && time !== formData.time.pop()) ||
                (time === 23 && (formData.time.includes(22) || formData.time.includes(0))) ||
                (time === 0 && (formData.time.includes(23) || formData.time.includes(1))))
                setFormData({
                    ...formData, time: []
                })
            else setFormData({
                ...formData, time: [...formData.time.filter(t => t !== time)]
            })
        } else setFormData({
            ...formData, time: [...formData.time, time].sort((a, b) => { return a - b })
        })
    }

    return (
        <StyledListTime>
            {isLoadSpaceTime
                ? <h2>Загрузка...</h2>
                : spaceTime.map(item =>
                    <CardItem
                        key={item}
                        body={item + ":00"}
                        onClick={() => changeTimeList(Number(item))}
                        active={checkActiveCard(item)}
                    />
                )
            }
        </StyledListTime>
    )
}
export default ListTime
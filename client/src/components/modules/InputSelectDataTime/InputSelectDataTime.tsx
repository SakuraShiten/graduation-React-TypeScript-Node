import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { fetchGetSpacesTime } from '../../../API/publicAPI';
import { IBooking } from '../../../types/types';
import CardItem from './CardItem';

const StyledInput = styled.div<{ activeSelect: boolean }>`
    transition: 0.4s;
    margin-top:10px;
    flex-wrap: wrap;
    font-size:18px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #000;
    position: relative;
  
    padding: 5px 10px;
    display: flex;
    >span{
        position: absolute;
        right: 0;
        top:-4vh;
        cursor: pointer;
    }
    >p{
        width: 100%;
        text-align: start;
    }
    justify-content: center;
    height: ${props => !props.activeSelect ? "6vh" : "20vh"};
    width: ${props => !props.activeSelect ? "30vw" : "60vw"};
    transform: translateX(${props => !props.activeSelect ? "0%" : "-15vw"});
`

interface InputSelectDataTimeProps {
    formData: IBooking,
    setFormData: (data: IBooking) => void
}

const InputSelectDataTime: FC<InputSelectDataTimeProps> = ({ formData, setFormData }) => {
    const [activeSelect, setActiveSelect] = useState<boolean>(false)
    const [dayList, setDayList] = useState<{ dayName: string, dayNumber: string }[]>([])
    const [timeList, setTimeList] = useState<string[]>([])
    const [isLoading,setIsLoading] = useState<boolean>

    const changeTimeList = (time: number) => {
        if (formData.time.includes(time))
            setFormData({ ...formData, time: [...formData.time.filter(t => t !== time)] })
        else
            setFormData({
                ...formData, time: [...formData.time, time].sort((a, b) => { return a - b })
            })
    }

    const onActiveSelect = () => {
        setActiveSelect(true)
        setTimeList([])
        setFormData({ ...formData, date: "", time: [] })
    }

    const offActiveSelect = (e: any) => {
        e.stopPropagation()
        setActiveSelect(false)
    }

    const changeDayList = (day: string) => {
        setFormData({ ...formData, date: day })
    }

    const createDayList = () => {
        const date = new Date();
        const dateArray = []
        for (let i = 0; i < 6; i++) {
            const dayCount = new Date(date.getTime() + ((i + 1) * 24 * 60 * 60 * 1000))
                .toLocaleDateString("ru", { weekday: "short", day: 'numeric', month: 'numeric' })
            dateArray.push({
                dayName: dayCount.split(',')[0],
                dayNumber: dayCount.split(',')[1].trim()
            })
        }
        setDayList(dateArray)
    }

    const createTimeList = () => {
        fetchGetSpacesTime(formData.date)
            .then(data => setTimeList(data))
    }

    useEffect(() => {
        createDayList()
    }, [])

    useEffect(() => {
        if (formData.date) createTimeList()

    }, [formData.date])

    return (
        <StyledInput activeSelect={activeSelect} onClick={onActiveSelect}>
            {activeSelect ? <span onClick={offActiveSelect}>Закрыть</span> : null}
            {!activeSelect ? <p>Дата и время</p>
                : !formData.date ? dayList.map(item =>
                    <CardItem
                        key={item.dayNumber}
                        header={item.dayName}
                        body={item.dayNumber}
                        onClick={() => changeDayList(item.dayNumber)}
                    />
                ) : timeList.map(item =>
                    <CardItem
                        key={item}
                        body={item + ":00"}
                        onClick={() => changeTimeList(Number(item))}
                        active={formData.time.includes(Number(item))}
                    />
                )
            }
        </StyledInput>
    )
}

export default InputSelectDataTime
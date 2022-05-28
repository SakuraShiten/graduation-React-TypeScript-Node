import { FC, useState } from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { IBooking } from '../../../types/types';
import { timeFormatter } from '../../../utils/utilsFunc';
import ListDay from './ListDay';
import ListTime from './ListTime';

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
    height: ${props => !props.activeSelect ? "6vh" : "20vh"};
    width: ${props => !props.activeSelect ? "30vw" : "60vw"};
    transform: translateX(${props => !props.activeSelect ? "0%" : "-15vw"});
    @media only screen and (max-width: 768px){
        margin-top: ${props =>!props.activeSelect ?"1vh": "5vh"};
        transform: translateX(0%);
        width: ${props => !props.activeSelect ? "30vw" : "95% !important"};
        >div{
            
            flex-direction: row;
            flex-wrap: wrap;
            justify-content:center;
            >div{
                width:30%;
            }
        }
    }
`

interface InputSelectDataTimeProps {
    formData: IBooking,
    setFormData: (data: IBooking) => void
}

const InputSelectDataTime: FC<InputSelectDataTimeProps> = ({ formData, setFormData }) => {
    const [activeSelect, setActiveSelect] = useState<boolean>(false)

    const onActiveSelect = () => {
        if (formData.service === '') {
            toast.info("Сначала выберите услугу")
            return
        }
        setActiveSelect(true)
        setFormData({ ...formData, date: "", time: [] })
    }

    const offActiveSelect = (e: any) => {
        e.stopPropagation()
        setActiveSelect(false)
    }

    return (
        <StyledInput activeSelect={activeSelect} onClick={onActiveSelect}>
            {activeSelect
                ? <span onClick={offActiveSelect}>Закрыть</span>
                : <p>{!formData.time.length
                    ? "Дата и время"
                    : `День ${formData.date}, Время ${timeFormatter((formData.time))}`}</p>}
            {activeSelect && !formData.date
                ? < ListDay
                    formData={formData}
                    setFormData={setFormData}
                />
                : null}
            {activeSelect && formData.date
                ? <ListTime
                    formData={formData}
                    setFormData={setFormData}
                />
                : null}
        </StyledInput>
    )
}

export default InputSelectDataTime
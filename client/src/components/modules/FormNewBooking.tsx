import React, { useState } from 'react'
import styled from 'styled-components';
import UniversalBtn from '../widgets/UniversalBtn';
import UniversalInput from '../widgets/UniversalInput';
import UniversalSelected from '../widgets/UniversalSelected';
import InputSelectDataTime from './InputSelectDataTime/InputSelectDataTime';
import { ToastContainer, toast } from 'react-toastify';
import { fetchCreateBooking } from '../../API/publicAPI';
import { IBooking } from '../../types/types';
import { phoneMask, timeFormatter } from '../../utils/utilsFunc';
const StyledForm = styled.form`
    margin-top:2vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
@media only screen and (max-width: 768px){
    width: 100vw;
    align-items: center;
   
    >div{
        width: 80%;
    }
    >select{
        width: 80%;
    }
}
`
const Label = styled.h2`
    margin-top: 4vh;
    @media only screen and (max-width: 768px){
        font-size: 10vw;
        width: 100%;
        text-align:center;
    }
`


const FormNewBooking = () => {
    const [load, setLoad] = useState<boolean>(false)

    const [formData, setFormData] = useState<IBooking>({
        fio: '',
        tel: '',
        email: '',
        service: '',
        date: '',
        time: [],
        about: '',
    })

    const setValueFormFio = (e: any) => {
        setFormData({ ...formData, fio: e.target.value })
    }
    const setValueFormTel = (e: any) => {
        const mask = phoneMask(e.target.value)
        setFormData({ ...formData, tel: mask })
    }
    const setValueFormEmail = (e: any) => {
        setFormData({ ...formData, email: e.target.value })
    }
    const setValueFormService = (e: any) => {
        setFormData({ ...formData, service: e.target.value })
    }
    const setValueFormAbout = (e: any) => {
        setFormData({ ...formData, about: e.target.value })
    }

    const formSubmit = (e: any) => {
        e.preventDefault()
        if(formData.tel.length<16) {
            toast.error("Заполните номер полностью")
            return
        }
        if(formData.time.length<1) {
            toast.error("Выберите время бронирования")
            return
        }
        fetchCreateBooking(formData.fio, formData.tel, formData.email,
            formData.service, formData.date, formData.time, formData.about)
            .then(data => setLoad(true))
    }

    return (
        <div>
            {!load
                ? <StyledForm onSubmit={formSubmit}>
                    <UniversalInput
                        onChange={setValueFormFio}
                        placeholder="Имя"
                        value={formData.fio}
                        required={true}
                    />
                    <UniversalInput
                        onChange={setValueFormTel}
                        placeholder="Телефон"
                        type="tel"
                        value={formData.tel}
                        required={true}
                    />
                    <UniversalInput
                        onChange={setValueFormEmail}
                        type="email"
                        placeholder="Электронная почта"
                        required={true}
                        value={formData.email}
                    />
                    <UniversalSelected
                        onChange={setValueFormService}
                    />
                    <InputSelectDataTime
                        formData={formData}
                        setFormData={(data: IBooking) => setFormData(data)}
                    />
                    <UniversalInput
                        onChange={setValueFormAbout}
                        placeholder="Описание (не обязательно)"
                        value={formData.about}
                    />
                    <UniversalBtn type="submit">Отправить</UniversalBtn>
                    <ToastContainer />
                </StyledForm>
                : <Label>{`Вы успешно забронировали ${formData.service}, на время ${timeFormatter(formData.time)}`}</Label>}
        </div>
    )
}

export default FormNewBooking
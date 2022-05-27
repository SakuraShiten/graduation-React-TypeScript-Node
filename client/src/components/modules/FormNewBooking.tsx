import React, { useState } from 'react'
import styled from 'styled-components';
import UniversalBtn from '../widgets/UniversalBtn';
import UniversalInput from '../widgets/UniversalInput';
import UniversalSelected from '../widgets/UniversalSelected';
import InputSelectDataTime from './InputSelectDataTime/InputSelectDataTime';
import { ToastContainer, toast } from 'react-toastify';
import { fetchCreateBooking } from '../../API/publicAPI';
import { IBooking } from '../../types/types';
import { timeFormatter } from '../../utils/utilsFunc';
const StyledForm = styled.form`
    margin-top:2vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
  
`
const Label = styled.h2`
    margin-top: 4vh;
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

    const setValueFormFio = (e: React.ChangeEvent<{ rawValue: string }>) => {
        setFormData({ ...formData, fio: e.target.rawValue })
    }
    const setValueFormTel = (e: React.ChangeEvent<{ rawValue: string }>) => {
        setFormData({ ...formData, tel: e.target.rawValue })
    }
    const setValueFormEmail = (e: React.ChangeEvent<{ rawValue: string }>) => {
        setFormData({ ...formData, email: e.target.rawValue })
    }
    const setValueFormService = (e: any) => {
        setFormData({ ...formData, service: e.target.value })
    }
    const setValueFormAbout = (e: any) => {
        setFormData({ ...formData, about: e.target.value })
    }

    const formSubmit = (e: any) => {
        e.preventDefault()
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
                        options={{}}
                    />
                    <UniversalInput
                        onChange={setValueFormTel}
                        placeholder="Телефон"
                        options={{
                            prefix: '+7',
                            blocks: [2, 3, 3, 2, 2],
                            delimiters: ['(', ')', '-', '-'],
                            numericOnly: true,
                            noImmediatePrefix: true
                        }}
                    />
                    <UniversalInput
                        onChange={setValueFormEmail}
                        options={{}}
                        placeholder="Электронная почта"
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
                        options={{}}
                        placeholder="Описание (не обязательно)"
                    />
                    <UniversalBtn type="submit">Отправить</UniversalBtn>
                    <ToastContainer />
                </StyledForm>
                : <Label>{`Вы успешно забронировали ${formData.service}, на время ${timeFormatter(formData.time)}`}</Label>}
        </div>
    )
}

export default FormNewBooking
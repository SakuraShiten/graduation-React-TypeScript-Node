import { FC, useState } from 'react'
import styled from 'styled-components'
import CustomForm from '../../components/widgets/CustomForm'
import { fetchCheckAuth, fetchUserGet } from '../../API/publicAPI'
import { useIsLoading } from '../../hooks/useIsLoading'
import { toast } from 'react-toastify';
import { MyAuthContext, useAuthContext } from '../../context/AuthContext'


const StyledAuth = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
    >h1{
        text-align: center;
        background-color:#000;
        color: #fff;
        width: 100%;
    }    
    >form{
        width: 40vw;
        margin-top:3vh;
    }
`

interface AuthProps {

}

const Auth: FC<AuthProps> = () => {
    const [formValue, setFormValue] = useState<{ login: string, password: string }>({ login: '', password: '' })
    const [dataCheck, isLoadingCheck, loadCheck] = useIsLoading(fetchUserGet)
    const { setIsAuth } = useAuthContext()

    const formSubmit = async (e: any) => {
        e.preventDefault()
        const checkNull = formValue.login !== '' && formValue.password !== ''
        if (!checkNull) {
            toast.warning("Заполните все поля")
            return
        }
        const data = await loadCheck(formValue.login, formValue.password)
        if (data) {
            toast.success("Успешная авторизация")
            localStorage.setItem('login',data.login)
            localStorage.setItem('password',data.password)
            localStorage.setItem('fio',data.fio)
            localStorage.setItem('role',data.role)
            setIsAuth(true)
        } else {
            toast.error("Неверные данные")
        }
    }

    return (
        <StyledAuth>
            <h1>Авторизация</h1>
            <CustomForm
                state={formValue}
                setState={setFormValue}
                onSubmit={formSubmit}
                textBtn={"Авторизироваться"}
                obj={[
                    { name: "login", type: "text", placeholder: "Логин" },
                    { name: "password", type: "text", placeholder: "Пароль" }
                ]}
                activeBtn={isLoadingCheck}
            />
        </StyledAuth>
    )
}
export default Auth
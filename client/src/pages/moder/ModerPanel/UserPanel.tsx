import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { fetchUserCreate, fetchUserDelete, fetchUserGetAll } from '../../../API/publicAPI'
import CustomForm from '../../../components/widgets/CustomForm'
import ModerItem from './ModerItem'

const StyledUserPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    >form{
        align-self: center;
        width: 50%;
        display: flex;
        flex-direction: column;
        >input[type=file]{
            margin-top:1vh;
        }
    }
    >h1{
        margin-top:1vh;
    }
    >h2{
        margin-top:2vh;
    }
`

interface UserPanelProps {

}

const UserPanel: FC<UserPanelProps> = () => {

    const [userList, setUserList] = useState<{ _id: string, fio: string, login: string }[]>()
    const [formUser, setFormUser] = useState<{ login: string, password: string, fio: string }>({ login: "", password: "", fio: "" })

    const loadUser = async () => {
        fetchUserGetAll()
            .then(data => setUserList(data))
    }

    useEffect(() => {
        loadUser()
    }, [])

    const deleteModer = async (id: string) => {
        const login = localStorage.getItem('login') || ''
        const password = localStorage.getItem('password') || ''
        fetchUserDelete(id, login, password)
            .then(data => {
                toast.success("Модератор удалён")
                loadUser()
            })
    }

    const createModer = async (e: any) => {
        e.preventDefault()
        fetchUserCreate(formUser.login, formUser.password, formUser.fio)
            .then(data => {
                toast.success("Модератор добавлен")
                loadUser()
            })
    }

    return (
        <StyledUserPanel>
            <h1>Добавить модератора</h1>
            <CustomForm
                obj={[
                    { name: "login", type: "text", placeholder: "Логин" },
                    { name: "password", type: "text", placeholder: "Пароль" },
                    { name: "fio", type: "text", placeholder: "ФИО" },
                ]}
                state={formUser}
                setState={setFormUser}
                textBtn="Добавить модератора"
                onSubmit={e => createModer(e)}
            />
            <h2>Модераторы</h2>
            {userList && userList.map((item) =>
                <ModerItem
                    key={item._id}
                    headerText={[
                        `ФИО: ${item.fio}, Логин ${item.login}`
                    ]}
                    btnText={"Удалить"}
                    onClick={() => deleteModer(item._id)}
                />
            )}
        </StyledUserPanel>
    )
}
export default UserPanel
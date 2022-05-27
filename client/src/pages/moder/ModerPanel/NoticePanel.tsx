import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { fetchNewsDelete, fetchNoticeCreate, fetchNoticeDelete, fetchNoticeGetAll } from '../../../API/publicAPI'
import CustomForm from '../../../components/widgets/CustomForm'
import ModerItem from './ModerItem'

const StyledNoticePanel = styled.div`
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

interface NoticePanelProps {

}

const NoticePanel: FC<NoticePanelProps> = () => {

    const [noticeList, setNoticeList] = useState<{ _id: string, mail: string, owner: { fio: string, login: string } }[]>([])

    const [formNotice, setFormNotice] = useState<{ mail: string }>({ mail: "" })

    const loadNotice = async () => {
        fetchNoticeGetAll()
            .then(data => {
                const role = localStorage.getItem('role') || ''
                const login = localStorage.getItem('login') || ''
                if (role === "ADMIN")
                    setNoticeList(data)
                else setNoticeList([...data.filter(item => item.owner.login === login)])
            })
    }

    useEffect(() => {
        loadNotice()
    }, [])

    const noticeDelete = async (id: string) => {
        fetchNoticeDelete(id)
            .then(data => {
                toast.success("Почта удалена")
                loadNotice()
            })
    }

    const formSubmit = async (e: any) => {
        e.preventDefault()
        const login = localStorage.getItem('login') || ''
        const password = localStorage.getItem('password') || ''
        fetchNoticeCreate(formNotice.mail, login, password)
            .then(data => {
                toast.success("Почта добавлена")
                loadNotice()
            })
    }

    return (
        <StyledNoticePanel>
            <h1>Добавить почту</h1>
            <CustomForm
                obj={[
                    { name: "mail", type: "text", placeholder: "Почта" },
                ]}
                state={formNotice}
                setState={setFormNotice}
                textBtn="Добавить почту"
                onSubmit={e => formSubmit(e)}
            />
            <h2>Почты</h2>
            {noticeList && noticeList.map((item) =>
                <ModerItem
                    key={item._id}
                    headerText={[
                        `Почта: ${item.mail}, Владелец ${item.owner?.fio || "Удалён"}`
                    ]}
                    btnText={"Удалить"}
                    onClick={() => noticeDelete(item._id)}
                />
            )}
        </StyledNoticePanel>
    )
}
export default NoticePanel
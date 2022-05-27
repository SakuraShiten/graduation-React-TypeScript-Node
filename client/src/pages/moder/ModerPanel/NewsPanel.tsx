import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { fetchNewsCreate, fetchNewsDelete, fetchNewsGetAll } from '../../../API/publicAPI'
import CustomForm from '../../../components/widgets/CustomForm'
import UniversalBtn from '../../../components/widgets/UniversalBtn'
import UniversalInput from '../../../components/widgets/UniversalInput'
import { INews } from '../../../types/types'
import ModerItem from './ModerItem'

const StyledNewsPanel = styled.div`
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

interface NewsPanelProps {

}

const NewsPanel: FC<NewsPanelProps> = () => {
    const [formNews, setFormNews] = useState<{ header: string, body: string, img: FileList | [] | null }>({ header: "", body: '', img: [] });
    const [newsList, setNewsList] = useState<INews[]>([])

    useEffect(() => {
        fetchNewsGetAll()
            .then(data => setNewsList(data))
    }, [])

    const deleteNews = async (_id: string, header: string) => {
        fetchNewsDelete(_id, localStorage.getItem('login'), localStorage.getItem('password'))
            .then(data => {
                toast.success(`Новость: ${header} удалена`)
                setNewsList([...newsList.filter(item => item._id !== _id)])
            })
    }

    const formSubmit = async (e: any) => {
        e.preventDefault();
        const formSend = new FormData()
        formSend.append('login', localStorage.getItem('login') || "")
        formSend.append('password', localStorage.getItem('password') || "")
        formSend.append('header', formNews.header)
        formSend.append('body', formNews.body)
        const image = formNews.img !== null ? formNews.img[0] : ""
        formSend.append('img', image)
        fetchNewsCreate(
            formSend
        ).then((data) => {
            toast.success("Новость добавлена")
            setNewsList([...newsList, data])
        })
    }

    return (
        <StyledNewsPanel>
            <h1>Добавить новую новость</h1>
            <form onSubmit={formSubmit}>
                <UniversalInput
                    placeholder="Заголовок"
                    onChange={(e) => setFormNews({ ...formNews, header: e.target.value })}
                    value={formNews.header}
                />
                <UniversalInput
                    placeholder="Содержание"
                    onChange={(e) => setFormNews({ ...formNews, body: e.target.value })}
                    value={formNews.body}
                />
                <input type="file"
                    onChange={(e) => setFormNews({ ...formNews, img: e.target.files })}></input>
                <UniversalBtn type="submit">Добавить новость</UniversalBtn>
            </form>
            <h2>Новости</h2>
            {newsList && newsList.map(item =>
                <ModerItem
                    key={item._id}
                    headerText={[`Новость: ${item.header}, 
                    Дата: ${new Date(item.date).toLocaleDateString()}`]}
                    btnText="Удалить"
                    onClick={() => deleteNews(item._id, item.header)}
                />)}
        </StyledNewsPanel >
    )
}
export default NewsPanel
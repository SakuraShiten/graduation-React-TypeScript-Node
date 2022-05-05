import { IURL } from '../types/types'
import IndexPage from '../pages/index/IndexPage'
import NewsPage from '../pages/news/NewsPage'
import BookingPage from '../pages/booking/BookingPage'

export const listURL: IURL[] = [
    {
        header: 'Главная',
        URL: "/",
        component: <IndexPage />
    },
    {
        header: 'Новости',
        URL: "/news",
        component: <NewsPage />
    },
    {
        header: 'Забронировать',
        URL: "/booking",
        component: <BookingPage />
    }
]
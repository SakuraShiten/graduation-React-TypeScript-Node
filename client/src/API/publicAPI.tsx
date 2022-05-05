import { INews } from "../types/types";
import { $host } from "./index";


export const fetchNewsGetAll = async () => {
    const { data } = await $host.post<INews[]>('api/news/')
    return data
}

export const fetchGetSpacesTime = async (day: string,service: string) => {
    const { data } = await $host.post<string[]>('api/booking/space', { day,service })
    return data
}

export const fetchCreateBooking = async (fio: string, tel: string, mail: string,
    service: string, date: string, time: number[], about: string = "") => {
    const user = await $host.post('api/client/create', { fio, tel, mail })
    const { data } = await $host.post('api/booking/create', { service, date, time: JSON.stringify(time), about, id: user.data._id })
    return data
}

export const fetchCheckAuth = async (login: string, password: string) => {
    const { data } = await $host.post('api/user/check', { login, password })
    return data
}
export const fetchUserGet = async (login: string, password: string) => {
    const { data } = await $host.post('api/user/get', { login, password })
    return data
}
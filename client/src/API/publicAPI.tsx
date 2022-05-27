import { IBookingAndClient, INews } from "../types/types";
import { $host } from "./index";


export const fetchNewsGetAll = async () => {
    const { data } = await $host.post<INews[]>('api/news/')
    return data
}

export const fetchGetSpacesTime = async (day: string, service: string) => {
    const { data } = await $host.post<string[]>('api/booking/space', { day, service })
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
export const fetchNewsCreate = async (form: FormData) => {
    const { data } = await $host.post('api/news/create', form)
    return data
}

export const fetchNewsDelete = async (id: string, login: string | null, password: string | null) => {
    const { data } = await $host.post('api/news/delete', { id, login, password })
    return data
}

export const fetchBookingGetAll = async () => {
    const { data } = await $host.post<IBookingAndClient[]>('api/booking/')
    return data
}

export const fetchBookingCancel = async (id: string, login: string | null, password: string | null) => {
    const { data } = await $host.post('api/booking/cancel', { id, login, password })
    return data
}

export const fetchClietGetAll = async () => {
    const { data } = await $host.post('api/client/')
    return data
}
export const fetchNoticeGetAll = async () => {
    const { data } = await $host.post<{ _id: string, mail: string, owner: { fio: string, login: string } }[]>('api/notice/')
    return data
}
export const fetchNoticeDelete = async (id: string) => {
    const { data } = await $host.post('api/notice/delete', { id })
    return data
}
export const fetchNoticeCreate = async (mail: string, login: string, password: string) => {
    const { data } = await $host.post('api/notice/create', { mail, login, password })
    return data
}
export const fetchUserGetAll = async () => {
    const { data } = await $host.post<{ _id: string, fio: string, login: string }[]>('api/user/')
    return data
}
export const fetchUserDelete = async (id: string, login: string, password: string) => {
    const { data } = await $host.post('api/user/delete', { id, login, password })
    return data
}
export const fetchUserCreate = async (login: string, password: string, fio: string) => {
    const { data } = await $host.post('api/user/create', { login, password, fio })
    return data
}
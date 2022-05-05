import React,{ FC } from "react"

export interface IURL {
    header: string,
    URL: string,
    component: React.ReactElement<FC>
}
export interface INews {
    _id: string,
    header: string,
    body: string,
    img: string,
    date: Date,
    owner: any
}
export interface IBooking {
    fio: string,
    tel: string,
    email: string,
    service: string,
    date: string,
    time: number[],
    about: string,
}
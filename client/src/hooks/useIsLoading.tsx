import { useState } from "react"

export const useIsLoading = (query: any) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const load = (...item: any) => {
        setData([])
        setIsLoading(true)
        query(...item).then((result: any) => {
            setIsLoading(false)
            setData(result)
        })
    }

    return [data, isLoading, load] as const
}
import { useState } from "react"

export const useIsLoading = (query: any) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const load = async (...item: any) => {
        setData([])
        setIsLoading(true)
        const result:any = await query(...item)
        setIsLoading(false)
        setData(result)
        return result
    }

    return [data, isLoading, load] as const
}
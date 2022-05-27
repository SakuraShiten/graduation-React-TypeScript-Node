export const createDayList = (count: number = 6) => {
    const date = new Date();
    const dateArray = []
    for (let i = 0; i < count; i++) {
        const dayCount = new Date(date.getTime() + ((i + 1) * 24 * 60 * 60 * 1000))
            .toLocaleDateString("ru", { weekday: "short", day: 'numeric', month: 'numeric' })
        dateArray.push({
            dayName: dayCount.split(',')[0],
            dayNumber: dayCount.split(',')[1].trim()
        })
    }
    const result = dateArray.filter(item=>item.dayName !== ('пн' || "вт" || "ср"))
    return result
}

export const timeFormatter = (array: number[] | string[]) => {
    array = array.map(item=>Number(item))
    let result = ""
    if (array.length === 1) {
        let start = array[0]
        let end = array[0] + 1 >= 24 ? 0 : array[0] + 1
        result += `${start}:00-${end}:00`
    } else {
        let start = array.map(item => {
            if (String(item).length === 1) return item + 1000
            else return item
        })
        start.sort((a, b) => { return a - b })
        start = start.map(item => {
            if (String(item).length === 4) return item - 1000
            else return item
        })
        result += `${start[0]}:00-${Number(start.pop()) + 1}:00`
    }
    return result as string
}
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
    const result = dateArray.filter(item => item.dayName !== ('пн' || "вт" || "ср"))
    return result
}

export const timeFormatter = (array: number[] | string[]) => {
    array = array.map(item => Number(item))
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

export const phoneMask = (tel: string) => {
    let match: any = tel.replace(/\+7|\(|\)|\-/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    console.log(match)
    let mask = ""
    if (match && match[1]) mask += `+7(${match[1]}`
    if (match && match[2]) mask += `)${match[2]}`
    if (match && match[3]) mask += `-${match[3]}`
    if (match && match[4]) mask += `-${match[4]}`
    // console.log(mask)
    return mask
}
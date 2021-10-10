function prefixWithZero(input: number) {
    if (input < 10) {
        return `0${input}`
    }

    return input;
}

/**
 * 
 * @param monthNumericValue The number assiociated with month, range 0-11.
 * Returns 
 */
export function getMonthLastDateForPayment(inputDate: Date, lastDayOffset = 0) {
    const inputDateMonth = inputDate.getMonth();
    const inputDateYear = inputDate.getFullYear();

    const lastDayOfMonth = new Date(inputDateYear, inputDateMonth + 1, 0 - lastDayOffset)

    const weekday = lastDayOfMonth.getDay();

    if (weekday === 0 || weekday === 6) {
        return getMonthLastDateForPayment(inputDate, lastDayOffset + 1)
    }

    const day = lastDayOfMonth.getDate();
    const month = lastDayOfMonth.getMonth();
    const year = lastDayOfMonth.getFullYear();

    return `${prefixWithZero(day)}.${prefixWithZero(month + 1)}.${year}`
}

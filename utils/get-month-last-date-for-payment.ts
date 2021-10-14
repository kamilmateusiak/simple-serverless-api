import { tz } from "moment-timezone";
import { defaultTimezone } from "../constants/timezone";

function prefixWithZero(input: number) {
    if (input < 10) {
        return `0${input}`
    }

    return input;
}

/**
 * @param year The year of the date we are checking payment for
 * @param month The number assiociated with month, range 0-11.
 * @returns Date of payment in the given month in format MM/DD/YYYY
 */
export function getMonthLastDateForPayment(month: number, year: number, timezone = defaultTimezone, lastDayOffset = 0): string {
    const lastDayOfMonth = new Date(tz(new Date(year, month + 1, 0 - lastDayOffset), timezone).format());

    const weekday = lastDayOfMonth.getDay();

    if (weekday === 0 || weekday === 6) {
        return getMonthLastDateForPayment(month, year, timezone, lastDayOffset + 1)
    }

    return `${prefixWithZero(lastDayOfMonth.getMonth() + 1)}/${prefixWithZero(lastDayOfMonth.getDate())}/${lastDayOfMonth.getFullYear()}`
}

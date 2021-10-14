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
export function getMonthDateForBonusPayment(month: number, year: number, timezone = defaultTimezone, lastDayOffset = 0): string {
    const date = new Date(tz(new Date(year, month, 15 + lastDayOffset), timezone).format());

    const weekday = date.getDay();

    if (weekday === 0 || weekday === 6) {
        return getMonthDateForBonusPayment(month, year, timezone, lastDayOffset + 1)
    }

    return `${prefixWithZero(date.getMonth() + 1)}/${prefixWithZero(date.getDate())}/${date.getFullYear()}`
}

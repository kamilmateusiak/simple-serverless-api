import { tz } from "moment-timezone";
import { defaultTimezone } from "../constants/timezone";

export function extractDateComponents(dateString: string, timezone = defaultTimezone) {
    const inputDate = new Date(tz(dateString, timezone).format());

    return {
        month: inputDate.getMonth(),
        year: inputDate.getFullYear()
    }
}

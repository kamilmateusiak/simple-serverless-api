import { tz } from "moment-timezone";
import { TimezoneFormatErrors } from "../constants/errors";

export function validateTimezone(timezone: unknown) {
    if (typeof timezone !== "string") {
        throw new TypeError(TimezoneFormatErrors.NotString)
    }

    const isValid = !!tz.zone(timezone);

    if (!isValid) {
        throw new TypeError(TimezoneFormatErrors.WrongFormat)
    }
}
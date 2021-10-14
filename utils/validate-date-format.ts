import { DateFormatErrors } from "../constants/errors";
import { dateFormatRegex } from "../constants/regex";

export function validateDateFormat(dateString: unknown): void {
    if (!dateString) {
        throw new TypeError(DateFormatErrors.NotDefined);
    }

    if (typeof dateString !== "string") {
        throw new TypeError(DateFormatErrors.NotString);
    }
    
    if (!dateString.match(dateFormatRegex)) {
        throw new TypeError(DateFormatErrors.WrongFormat);
    }
}
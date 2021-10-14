import { DateFormatErrors } from "../../constants/errors";
import { validateDateFormat } from "../../utils/validate-date-format";

describe('validateDateFormat', function () {
    it("should throw an error if date is not defined", () => {
        try {
            // @ts-ignore
            validateDateFormat()
        } catch (e) {
            expect(e.message).toBe(DateFormatErrors.NotDefined)
        }
    })

    it("should throw an error if date is not a string", () => {
        try {
            validateDateFormat(12)
        } catch (e) {
            expect(e.message).toBe(DateFormatErrors.NotString)
        }
    })

    it("should throw an error if date has wrong format", () => {
        try {
            validateDateFormat("12.12/2020")
        } catch (e) {
            expect(e.message).toBe(DateFormatErrors.WrongFormat)
        }
    })

    it("should not throw any error if date is correct", () => {
        expect(validateDateFormat("12/12/2020")).toBe(void 0);
    })
});

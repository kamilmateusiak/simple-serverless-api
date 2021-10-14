import { TimezoneFormatErrors } from "../../.build/constants/errors";
import { validateTimezone } from "../../utils/validate-timezone";

describe('validateTimezone', function () {
    it("should throw an error if timezone is not a string", () => {
        try {
            validateTimezone(12)
        } catch (e) {
            expect(e.message).toBe(TimezoneFormatErrors.NotString)
        }
    })

    it("should throw an error if timezonee has wrong format", () => {
        try {
            validateTimezone("Tatooine")
        } catch (e) {
            expect(e.message).toBe(TimezoneFormatErrors.WrongFormat)
        }
    })

    it("should not throw any error if timezone is correct", () => {
        expect(validateTimezone("UTC")).toBe(void 0);
    })
});

import { extractDateComponents } from "../../utils/extract-date-components";

describe('extractDateComponents', function () {
    it("should return correct year and month for the given date string", () => {
        expect(extractDateComponents("12/12/2020")).toEqual({ year: 2020, month: 11 });
    })
});

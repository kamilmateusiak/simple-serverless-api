import { getMonthLastDateForPayment } from "../../utils/get-month-last-date-for-payment";
import mockData from "../../__mocks__/response.json"

const testCases = Array(12).fill(null).map((_v, index) => new Date(2021, index, 2))

describe('getMonthLastDateForPayment', function () {
    for (let i = 0; i < testCases.length; i++){ 
       const date = testCases[i]
        it(`for a given date ${date} should return last non-weekend date: ${mockData[i]}`, () => {
            const result = getMonthLastDateForPayment(date)
    
            expect(result).toEqual(mockData[i]);
        })
    }
});

import { getMonthLastDateForPayment } from "../../utils/get-month-last-date-for-payment";
import mockData from "../../__mocks__/paymentDates.json"

const testCases = Array(12).fill(null).map((_v, index) => ({ year: 2021, month: index }))

describe('getMonthLastDateForPayment', function () {
    for (let i = 0; i < testCases.length; i++){ 
       const { year, month } = testCases[i]
        it(`for a given year: ${year} and month: ${month} should return last non-weekend date: ${mockData[i]}`, () => {
            const result = getMonthLastDateForPayment(month, year)
    
            expect(result).toEqual(mockData[i]);
        })
    }
});

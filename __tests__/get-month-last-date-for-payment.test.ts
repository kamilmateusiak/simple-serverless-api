import { APIGatewayProxyEvent} from "aws-lambda";
import { getMonthLastDateForPayment } from "../helpers/get-month-last-date-for-payment";
import mockData from "../__mocks__/response.json"

describe('getMonthLastDateForPayment', function () {
    it('for a given date should return date of last non-weekend date', () => {
        const date = new Date(2021, 0, 2);

        const result = getMonthLastDateForPayment(date)

        expect(result).toEqual(mockData[0]);
    })
});

import { APIGatewayProxyEvent} from "aws-lambda";
import { DateFormatErrors } from "../constants/errors";
import { getPayments } from "../handler";
import mockData from "../__mocks__/response.json"

describe('getPayments handler', function () {
    it('for a given date should return base salary for the next 12 months', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                date: "12.12.2020"
            }
        } as any;

        const response = await getPayments(event)

        expect(response).toEqual({
            statusCode: 200,
            body: JSON.stringify({ paymentDates: mockData })
        })
    })

    it('for a given date with wrong format should ', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                date: "asdas"
            }
        } as any;

        const response = await getPayments(event)

        expect(response).toEqual({
            statusCode: 400,
            body: JSON.stringify({ errorMessage: DateFormatErrors.WrongFormat })
        })
    })
});

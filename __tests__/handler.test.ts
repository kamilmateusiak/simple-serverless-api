import { APIGatewayProxyEvent} from "aws-lambda";
import { DateFormatErrors } from "../constants/errors";
import { getPayments } from "../handler";

describe('getPayments handler', function () {
    it('for a given date should return base salary for the next 12 months', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                date: "01/31/2021"
            }
        } as any;

        const response = await getPayments(event)

        expect(response).toHaveProperty("headers", {
            "Content-Type": "text/csv",
            "Content-disposition": "attachment; filename=paymentDates.csv",
         })
         expect(response).toHaveProperty('statusCode', 200);
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

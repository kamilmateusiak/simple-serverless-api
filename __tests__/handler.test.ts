import { APIGatewayProxyEvent} from "aws-lambda";
import { payments } from "../handler";
import mockData from "../__mocks__/response.json"



describe('Unit test for handler', function () {
    it('for a given date should return base salary for the next 12 months', async () => {
        const event: APIGatewayProxyEvent = {
            queryStringParameters: {
                date: "1609455600000"
            }
        } as any;

        // @ts-ignore
        const result = await payments(event)

        expect(result.body).toEqual(JSON.stringify(mockData));
    })
});
